# -*- coding: utf-8 -*-

{
    'name': 'Toggle Developer Mode',
    'category': 'Extra Tools',
    'version': '11.0.1.0.2',
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
        'templates/inherit_web_menu.xml',
    ],
    'installable': True,
    'auto_install': True,
    'active': True,
}

