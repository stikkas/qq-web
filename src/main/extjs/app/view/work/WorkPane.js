/**
 * Основная панель для работы
 */
Ext.define('qqext.view.work.WorkPane', {
	extend: 'Ext.container.Container',
	requires: [
		'Ext.layout.container.Card',
		'qqext.view.work.Jvk'
	],
	alias: 'widget.work',
	id: 'work-pane',
	layout: 'card',
	pgs: {},
	initComponent: function () {
		this.callParent();
		this.setPage('jvk');
	},
	setPage: function (pageName) {
		var workPane = this,
				page = workPane.pgs[pageName];
		if (!page)
			workPane.pgs[pageName] = page = Ext.create('widget.' + pageName);

		workPane.add(page);
		workPane.setActiveItem(page);
	}
});