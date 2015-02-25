/** 
 * Левая панель с кнопками меню и информацией о статусе запроса
 */
Ext.define('qqext.view.info.InfoPane', {
	extend: 'Ext.container.Container',
	requires: [
		'Ext.layout.container.VBox',
		'Ext.button.Button'
	],
	alias: 'widget.artinfo',
	layout: 'vbox',
	id: 'article-info',
	defaults: {
		xtype: 'button',
		width: '100%'
	},
	items: [{
			text: 'ЖВК'	
		}, {
			text: 'Поиск'
		}, {
			text: 'Отчетные документы'
		}, {
			text: 'Регистрация запроса'
		}, {
			text: 'Уведомление заявителю'
		}, {
			text: 'Передача на исполнение'
		}, {
			text: 'Исполнение запроса'
		}]
});


