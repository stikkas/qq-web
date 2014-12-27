
Ext.define('qqext.view.main.Main', {
	extend: 'Ext.panel.Panel',
	requires: [
		'qqext.view.main.MainController',
		'qqext.view.main.MainModel'
	],
//	renderTo: Ext.get("mainWindow"),
	xtype: 'app-main',
	title: 'Hello',
	controller: 'main',
	viewModel: {
		type: 'main'
	},
	layout: {
		type: 'hbox'
	},
	autoScroll: true,
	dockedItems: [{
			xtype: 'toolbar',
			items: [{
					text: 'hello',
					handler: function (btn) {
						var panel = btn.up('panel');
						var left = panel.items.getAt(0);
						left.setHtml(left.html +
								'<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>'
								);
					}
				},
				'->',
				{
					text: 'goodbye',
					handler: function (btn) {
						var panel = btn.up('panel');
						var left = panel.items.getAt(2).items.getAt(0);
						left.setHtml(left.html +
								'<h1>Another container</h1>'
								);
					}
				}

			]
		}],
	defaults: {
		height: '100%'
	},
	items: [{
			autoScroll: true,
			xtype: 'panel',
			flex: 1,
			bind: {
				title: '{name}'
			},
//        region: 'west',
			html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>' +
					'<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>' +
					'<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>' +
					'<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
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
					html: '<h2>Content appropriate for the current navigation.</h2>',
					width: '100%'
				}]
		}]
});
