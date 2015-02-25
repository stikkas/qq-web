
Ext.define('qqext.Application', {
    extend: 'Ext.app.Application',
    name: 'qqext',
	requires: [
		'qqext.view.main.Main'
	],
    launch: function () {
		qqext.fio = 'Иванов И. П.';
		Ext.create('widget.main');
    }
});
