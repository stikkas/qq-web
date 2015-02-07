
Ext.define('qqext.view.main.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',
	requires: [
		'qqext.view.main.MainController',
		'qqext.view.main.MainModel',
		'qqext.view.header.Header'
	],
	controller: 'main',
	viewModel: {
		type: 'main'
	},
	header: {
		bind: {
			html: '<div class="main-title">{title}</div>' +
					'<div class="main-fio">{fio}</div>'
		}
	},
	layout: {
		type: 'hbox'
	},
	overflowY: 'auto',
	dockedItems: [{
			xtype: 'menuheader'
		}],
	items: [{
			autoScroll: true,
			xtype: 'panel',
			cls: 'mypanel',
			flex: 1,
			bind: {
				title: '{name}'
			},
			items: [
				Ext.create("Ext.Component", {
					html: "Sample component",
					style: {
						backgroundColor: "yellow",
						width: "100px",
						height: "40px",
						color: 'red',
						padding: "5px",
						marginLeft: 'auto',
						marginRight: 'auto',
						borderWidth: "2px",
						borderStyle: "solid",
						borderColor: "black"
					}
				})

			],
			tbar: [{
					text: 'Button',
					handler: 'onClickButton'
				}]
		}, {
			xtype: 'splitter',
			width: 1
		},
		{
//					region: 'center',
			xtype: 'tabpanel',
			flex: 4.5,
			items: [{
					autoScroll: true,
					title: 'Tab 1',
					html: '<h2>Content appropriate for the current navigation.</h2>'
				}]
		}],
	initComponent: function () {
		this.callParent();
	}
});
