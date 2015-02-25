
Ext.define('qqext.view.main.Main', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.main',
	requires: [
		'qqext.view.main.MainController',
		'qqext.view.main.MainModel',
		'qqext.view.header.Header',
		'qqext.view.header.MainTitle',
		'qqext.view.work.WorkPane',
		'qqext.view.info.InfoPane',
		'Ext.layout.container.VBox',
		'Ext.layout.container.HBox'
	],
	controller: 'main',
	layout: {
		type: 'vbox'
	},
	height: '100%',
	items: [{
			xtype: 'maintitle',
			width: '100%',
			height: '2.5em'
		}, {
			xtype: 'menuheader',
			width: '100%',
			height: '3.47em'
		}, {
			xtype: 'container',
			layout: 'hbox',
			width: '100%',
			flex: 1,
			overflowY: 'auto',
			defaults: {
				minHeight: 400,
				height: '100%'
			},
			items: [{
					xtype: 'artinfo',
					width: 170
				}, {
					xtype: 'work',
					flex: 1
				}]
		}],
	initComponent: function () {
		this.callParent();
	}
});
