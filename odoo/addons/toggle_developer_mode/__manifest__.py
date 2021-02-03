# -*- coding: utf-8 -*-

{
    'name': 'Toggle Developer Mode',
    'category': 'Extra Tools',
    'version': '13.0.1.0.1',
    'summary':
        "To enable / disable developer mode from admin's main menu in Odoo",
    'description': 'no_warning',
    'author': 'Alix Casari',
    'website': 'http://www.horanet.com',
    'sequence': 0,
    'depends': [
        'base',
        'web'
    ],
    'data': [
        'templates/inherited_website_assets_backend.xml',
    ],
    "qweb": [
        "static/src/xml/toggle_developer_mode.xml",
    ],
    'installable': True,
    'auto_install': True,
    'active': True,
}

