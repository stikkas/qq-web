/** 
 * Хранилище для ЖВК Архивов
 */
Ext.define('qqext.store.ArchiveJvk', {
	extend: 'qqext.store.Jvk',
	model: 'qqext.model.ArchiveJvk',
	proxy: {
		type: 'table',
		url: '/qq-web/api/jvk/archive'
	}
});

