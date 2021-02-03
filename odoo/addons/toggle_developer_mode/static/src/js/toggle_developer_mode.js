odoo.define('toggle_developer_mode.act_by_delegation', function (require) {
    'use strict';

    let SystrayMenu = require('web.SystrayMenu');
    let Widget = require('web.Widget');

    /***
     * Ajout du menu d'action par délégation dans la barre de menu secondaire si l'utilisateur a les droits requis.
     */
    let ToggleDeveloperMode = Widget.extend({
        template: 'ToggleDeveloperMode',
        events: {
            'click a#toggle_developer_mode': '_onClickToggleDeveloperMode',
        },

        /**
         * @override
         */
        init: function () {
            this._super.apply(this, arguments);
            this.hasBaseSystemGroup = false;
        },
        /**
         * @override
         */
        willStart: function () {
            let self = this;
            let def = this.getSession().user_has_group('base.group_system').then(
                function (has_group) {
                    self.hasBaseSystemGroup = has_group;
                }
            );
            return $.when(this._super.apply(this, arguments), def);
        },
        /**
         * @override
         */
        renderElement: function () {
            this._super();
            if (this.hasBaseSystemGroup) {
                if (odoo.debug === undefined || odoo.debug === '') {
                    this.$('a').prepend('<span class="fa fa-plus"/>');
                } else {
                    this.$('a').prepend('<span class="fa fa-minus"/>');
                }
            } else {
                this.$el.hide();
            }
        },
        _onClickToggleDeveloperMode: function() {
            let qs = $.deparam.querystring();

            if (odoo.debug === undefined || odoo.debug === '') {
                qs.debug = '1';
            } else {
                qs.debug = '';
            }

            let res = $.param(qs);
            let the_hash = window.location.hash;
            window.location = '?' + res + the_hash;
        },
    });

    SystrayMenu.Items.push(ToggleDeveloperMode);
});
