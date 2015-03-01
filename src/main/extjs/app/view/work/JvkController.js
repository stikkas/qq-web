/**
 * Контроллер для ЖВК
 */
Ext.define('qqext.view.work.JvkController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.jvk',

	applyFilter: function () {
		/*
		var me = this,
				filters = [],
				columns = me.columns,
				max = columns.length,
				i = 0, value, clmn, itm,
				store = me.getStore();
		for (; i < max; ++i) {
			clmn = columns[i];
			itm = clmn.items.get(0);
			value = itm.getValue();
			if (value) {
				if (itm.name === 'requestFromCombo') {
					value = Ext.getStore('journalApplicantFilterStore')
							.getById(value).get('name');
				}
				filters.push(Ext.create('Ext.util.Filter', {
					property: clmn.dataIndex,
					value: value
				}));
			}
		}
		filters = filters.concat(me._fltrs);
		store.filters.clear();
		store.addFilter(filters, true);
		*/
	},
	keyStop: function (comp, event, eopts) {
		event.stopPropagation();
	},
	render: function (comp) {
		/*
		comp.getEl().addListener('click', function () {
			comp.focus();
		});
		*/
	},
	enterKeyStop: function (field, event) {
		event.stopPropagation();
		if (event.getKey() === event.ENTER)
			this.applyFilter();
	}
});
