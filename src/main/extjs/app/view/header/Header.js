/**
 * Верхнее меню с кнопками
 */
Ext.define('qqext.view.header.Header', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.menuheader',
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
		}]
});
