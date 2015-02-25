Ext.define('qqext.view.header.MainTitle', {
	extend: 'Ext.Component',
	alias: 'widget.maintitle',
	id: 'main-title',
	tpl: '<div class="app-name">АИС Запросы</div><div class="fio">{fio}</div>',
	data: {
		fio: ''
	},
	initComponent: function(){
		this.update({fio: qqext.fio});
		this.callParent();
	}
});