/** 
 * Панель журнала входящей корреспонденции
 */
Ext.define('qqext.view.work.Jvk', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.jvk',
	requires: [
		'Ext.toolbar.Paging',
		'Ext.grid.column.Date',
		'Ext.form.field.Text',
		'Ext.form.field.ComboBox',
		'Ext.form.field.Date',
		'qqext.store.Dict',
		'qqext.store.DictSV',
		'qqext.store.ArchiveJvk',
		'qqext.store.SicJvk',
		'qqext.view.work.JvkController'
	],
	controller: 'jvk',
	id: 'jvk',
	dockedItems: [{
			xtype: 'pagingtoolbar',
			displayInfo: true,
			dock: 'bottom'
		}],
	columns: {
		defaults: {
			menuDisabled: true,
			flex: 1
		}
	},
	_cols: [{
			text: 'Литера',
			dataIndex: 'litera',
//			minWidth: 80,
//			width: 97,
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDict', 'organizations'),
					width: '90%',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}, {
			text: '№ вх. документа',
			dataIndex: 'number',
//			minWidth: 50,
//				minWidth: 80,
			items: [{
					xtype: 'textfield',
					width: '90%',
					listeners: {
						specialkey: 'enterKeyStop',
						render: 'render'
					}
				}]
		}, {
			text: 'Дата регистрации',
//			minWidth: 65,
//				minWidth: 90,
			xtype: 'datecolumn',
			dataIndex: 'regDate',
			format: 'd.m.Y',
			focusOnToFront: false,
			items: [{
					width: '90%',
					xtype: 'datefield',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'enterKeyStop'
					}
				}]
		}, {
			xtype: 'datecolumn',
			text: 'Дата исполнения плановая',
//			minWidth: 65,
			dataIndex: 'planDate',
			format: 'd.m.Y',
			items: [{
					width: '90%',
					cls: 'mar_t0',
					xtype: 'datefield',
					focusOnToFront: false,
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'enterKeyStop'
					}
				}]
		}, {
			text: 'Статус уведомления',
//			minWidth: 115,
			dataIndex: 'notiStat',
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDict', 'notistats'),
					width: '95%',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}, {
			text: 'Вид запроса',
//			minWidth: 60,
//			maxWidth: 60,
			dataIndex: 'questionType',
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDictSV', 'questiontypes'),
					width: '90%',
					displayField: 'shortValue',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}, {
			text: 'От кого поступил',
//			minWidth: 165,
//			minWidth: 200,
			dataIndex: 'otKogo',
			items: [{
					xtype: 'textfield',
					width: '90%',
					listeners: {
						specialkey: 'enterKeyStop',
						render: 'render'
					}
				}]
		}, {
			text: 'Состояние запроса',
			dataIndex: 'status',
//			minWidth: 120,
//						minWidth: 130,
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDict', 'statuses'),
					width: '90%',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}, {
			text: 'Дата исполнения',
			dataIndex: 'execDate',
			xtype: 'datecolumn',
//			minWidth: 90,
			format: 'd.m.Y',
			items: [{
					width: '90%',
					cls: 'mar_t0',
					xtype: 'datefield',
					focusOnToFront: false,
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'enterKeyStop'
					}
				}]
		}, {
			text: 'Архив-исполнитель',
			dataIndex: 'execOrg',
//			minWidth: 65,
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDict', 'organizations'),
					width: '90%',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}, {
			text: 'Исполнитель',
			dataIndex: 'executor',
//			minWidth: 70,
//			minWidth: 115,
			items: [{
					xtype: 'combobox',
					store: Ext.create('StoreDict', 'executors'),
					width: '90%',
					listeners: {
						select: 'applyFilter',
						render: 'render',
						specialkey: 'keyStop'
					}
				}]
		}],
	_scls: [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
	_acls: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
	initComponent: function () {
		var jvkPane = this;
		if (qqext.isSic) {
			jvkPane.columns.items = jvkPane._crtCols(jvkPane._scls);
			jvkPane.store = Ext.create('qqext.store.SicJvk');
		} else {
			jvkPane.columns.items = jvkPane._crtCols(jvkPane._acls);
			jvkPane.store = Ext.create('qqext.store.ArchiveJvk');
		}

		jvkPane.callParent();
		// Paginator
		jvkPane.ptb = jvkPane.getDockedItems("toolbar[dock='bottom']")[0];
		jvkPane.ptb.bindStore(jvkPane.store);
		jvkPane.setTitle(qqext.archive);
	},
	/**
	 * @private
	 * Создает набор необходимых колонок
	 * @param {Number[]} indexes индексы колонок, в соответствии с которыми будет создан результирующий массив
	 * @returns {Object[]} колонки для таблицы
	 */
	_crtCols: function (indexes) {
		var items = [];
		for (var i = 0, max = indexes.length; i < max; ++i)
			if (indexes[i])
				items.push(this._cols[i]);
		return items;
	}
});

