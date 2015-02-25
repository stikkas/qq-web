/**
 * Верхнее меню с кнопками
 */
Ext.define('qqext.view.header.Header', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.menuheader',
	requires: [
		'Ext.button.Button',
		'Ext.toolbar.Fill'
	],
	id: 'main-toolbar',
	items: [{
			text: 'Вернуться в поиск',
			cls: 'back_btn'
		}, {
			text: 'Добавить',
			cls: 'add_btn'
		}, {
			text: 'Поиск',
			cls: 'search_btn'
		}, {
			text: 'Очистить',
			cls: 'clean_btn'
		}, {
			text: 'Редактировать',
			cls: 'edit_btn'
		}, {
			text: 'Сохранить',
			cls: 'save_btn'
		}, {
			text: 'Печать',
			cls: 'print_btn'
		}, {
			text: 'Удалить',
			cls: 'remove_btn'
		}, {
			text: 'Регистрировать',
			cls: 'reg_btn'
		},
		'->',
		{
			text: 'В начало',
			cls: 'to_begin_btn'
		},
		{
			text: 'Выйти',
			cls: 'quit_btn'
		}]
});
