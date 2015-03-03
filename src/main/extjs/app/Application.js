
Ext.define('qqext.Application', {
	extend: 'Ext.app.Application',
	name: 'qqext',
	requires: [
		'qqext.view.main.Main',
		'Other.field.ComboBox',
		'qqext.store.DictSV'
	],
	launch: function () {
		qqext.fio = 'Иванов И. П.';
		qqext.archive = 'Справочно-информационный центр федеральных государственных архивов';
		qqext.isSic = true;
		Ext.create('StoreDictSV', 'organizations');
		Ext.create('StoreDict', 'notistats');
		Ext.create('StoreDictSV', 'questiontypes');
		Ext.create('StoreDict', 'statuses');
		Ext.create('StoreDict', 'executors');
		Ext.create('widget.main');
	}
});
