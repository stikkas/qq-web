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
		'qqext.store.ArchiveJvk',
		'qqext.store.SicJvk'
	],
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
			/*
			 items: [
			 createCmp('FComboBox', '', ns.stIds.litera, 'filterLiteraCombo', {
			 width: '90%',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}, {
			text: '№ вх. документа',
			dataIndex: 'inboxDocNum',
//			minWidth: 50,
//				minWidth: 80,
			/*					items: [
			 createCmp('FTextField', '', 'docNumberTextField', {
			 width: '90%',
			 listeners: {
			 specialkey: function (tf, event, eopts) {
			 event.stopPropagation();
			 if (event.getKey() === event.ENTER) {
			 var grid = tf.ownerCt.ownerCt.ownerCt;
			 grid.applyFilter();
			 }
			 },
			 render: me._render
			 }
			 })
			 ]*/}, {
			text: 'Дата регистрации',
//			minWidth: 65,
//				minWidth: 90,
			xtype: 'datecolumn',
			dataIndex: 'regDate',
			format: 'd.m.Y',
			focusOnToFront: false,
			/*					items: [{
			 width: '90%',
			 xtype: 'hawkDateField',
			 listeners: {
			 select: me._filterDateSelected,
			 render: me._render,
			 specialkey: function (tf, event, eopts) {
			 event.stopPropagation();
			 if (event.getKey() === event.ENTER) {
			 var grid = tf.ownerCt.ownerCt.ownerCt;
			 grid.applyFilter();
			 }
			 }
			 }
			 }]*/}, {
			xtype: 'datecolumn',
			text: 'Дата исполнения плановая',
//			minWidth: 65,
			dataIndex: 'plannedDate',
			format: 'd.m.Y',
			/*				items: [{
			 width: '90%',
			 cls: 'mar_t0',
			 xtype: 'hawkDateField',
			 focusOnToFront: false,
			 listeners: {
			 select: me._filterDateSelected,
			 render: me._render,
			 specialkey: function (tf, event, eopts) {
			 event.stopPropagation();
			 if (event.getKey() === event.ENTER) {
			 var grid = tf.ownerCt.ownerCt.ownerCt;
			 grid.applyFilter();
			 }
			 }
			 }
			 }]*/}, {
			text: 'Статус уведомления',
//			minWidth: 115,
			dataIndex: 'notifyStatus',
			/*				items: [
			 createCmp('FComboBox', '', ns.stIds.notiStats, 'requestNotiStatus', {
			 width: '95%',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}, {
			text: 'Вид запроса',
//			minWidth: 60,
//			maxWidth: 60,
			dataIndex: 'queryType',
			/*			items: [createCmp('FComboBox', '', ns.stIds.queryType, 'filterQTypeCombo', {
			 width: '90%',
			 displayField: 'shortValue',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}, {
			text: 'От кого поступил',
//			minWidth: 165,
//			minWidth: 200,
			dataIndex: 'fioOrg',
			/*				items: [
			 createCmp('FTextField', '', 'applicantField', {
			 width: '90%',
			 listeners: {
			 specialkey: function (tf, event) {
			 event.stopPropagation();
			 if (event.getKey() === event.ENTER) {
			 var grid = tf.ownerCt.ownerCt.ownerCt;
			 grid.applyFilter();
			 }
			 },
			 render: me._render
			 }
			 })
			 ]*/}, {
			text: 'Состояние запроса',
			dataIndex: 'status',
//			minWidth: 120,
//						minWidth: 130,
			/*		items: [
			 createCmp('FComboBox', '', ns.stIds.stats, 'requestStatusCombo', {
			 width: '90%',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}, {
			text: 'Дата исполнения',
			dataIndex: 'execDate',
			xtype: 'datecolumn',
//			minWidth: 90,
			format: 'd.m.Y',
			/*			items: [{
			 width: '90%',
			 cls: 'mar_t0',
			 xtype: 'hawkDateField',
			 focusOnToFront: false,
			 listeners: {
			 select: me._filterDateSelected,
			 render: me._render,
			 specialkey: function (tf, event, eopts) {
			 event.stopPropagation();
			 if (event.getKey() === event.ENTER) {
			 var grid = tf.ownerCt.ownerCt.ownerCt;
			 grid.applyFilter();
			 }
			 }
			 }
			 }]*/}, {
			text: 'Архив-исполнитель',
			dataIndex: 'execOrg',
//			minWidth: 65,
			/*				items: [
			 createCmp('FComboBox', '', ns.stIds.litera, 'requestExecOrgCombo', {
			 width: '90%',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}, {
			text: 'Исполнитель',
			dataIndex: 'executor',
//			minWidth: 70,
//			minWidth: 115,
			/*				items: [
			 createCmp('FComboBox', '', execStore, 'rlequestExecutorCombo', {
			 width: '90%',
			 listeners: {
			 select: me._filterComboSelected,
			 render: me._render,
			 specialkey: me._specialKeyStop
			 }
			 })
			 ]*/}
	],
	_scls: [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
	_acls: [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
	initComponent: function () {
		var jvkPane = this;
		if (qqext.isSic) {
			jvkPane.columns.items = jvkPane._crtCols(jvkPane._scls);
			jvkPane.store = Ext.create('qqext.store.SicJvk');
		}else{ 
			jvkPane.columns.items = jvkPane._crtCols(jvkPane._acls);
			jvkPane.store = Ext.create('qqext.store.ArchiveJvk');
		}

		jvkPane.callParent();
		jvkPane.setTitle(qqext.archive);
	},
	/**
	 * @private
	 * Создает набор необходимых колонок
	 * @param {Number[]} indexes индексы колонок, в соответствии с которыми будет создан результирующий массив
	 * @returns {Object[]} колонки для таблицы
	 */
	_crtCols: function(indexes) {
		var items = [];
		for (var i = 0, max = indexes.length; i < max; ++i)
			if (indexes[i])
				items.push(this._cols[i]);
		return items;
	}
});

