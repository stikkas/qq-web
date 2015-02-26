
Ext.define('qqext.Application', {
    extend: 'Ext.app.Application',
    name: 'qqext',
	requires: [
		'qqext.view.main.Main'
	],
    launch: function () {
		qqext.fio = 'Иванов И. П.';
		qqext.archive = 'Справочно-информационный центр федеральных государственных архивов';
		qqext.isSic = true;
		Ext.create('widget.main');
    }
});
