/** 
 * Настройки по умолчанию для комбобоксов
 */
Ext.define('Other.field.ComboBox', {
	override: 'Ext.form.field.ComboBox',
	valueField: 'id',
	editable: false,
	// Не посылать query параметр серверу
	queryParam: false
});


