
Ext.define('qqext.view.main.Main', {
	extend: 'Ext.container.Container',
	alias: 'widget.main',
	requires: [
		'qqext.view.main.MainController',
		'qqext.view.main.MainModel',
		'qqext.view.header.Header',
		'qqext.view.header.MainTitle',
		'Ext.layout.container.VBox'
	],
	controller: 'main',
	/*
	 viewModel: {
	 type: 'main'
	 },
	 header: {
	 bind: {
	 html: '<div class="main-title">{title}</div>' +
	 '<div class="main-fio">{fio}</div>'
	 }
	 },
	 */
	layout: {
		type: 'vbox'
	},
	overflowY: 'auto',
	dockedItems: [{
			xtype: 'menuheader'
		}],
	items: [{
			xtype: 'maintitle',
			width: '100%'
		}, {
			xtype: 'menuheader'
		}],
	initComponent: function () {
		this.callParent();
	}
});
