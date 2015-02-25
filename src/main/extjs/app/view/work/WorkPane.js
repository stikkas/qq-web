/**
 * Основная панель для работы
 */
Ext.define('qqext.view.work.WorkPane', {
	extend: 'Ext.container.Container',
	requires: [
		'Ext.layout.container.Card'
	],
	alias: 'widget.work',
	id: 'work-pane',
	layout: 'card',
	items: [{
			html: 'Hello Panel'
		}]
});