# SunshineConversationsClient.FormResponseMessageField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The field type. | 
**name** | **String** | The name of the field. Must be unique per form or formResponse. | 
**label** | **String** | The label of the field. What the field is displayed as on Web Messenger. | 
**text** | **String** | Specifies the response for a text field. | [optional] 
**email** | **String** | Specifies the response for a email field. | [optional] 
**select** | **[Object]** | Array of objects representing the response for a field of type select. Form and formResponse messages only. | [optional] 
**quotedMessageId** | **String** | The messageId for the form that this response belongs to. | [optional] 



## Enum: TypeEnum


* `email` (value: `"email"`)

* `select` (value: `"select"`)

* `text` (value: `"text"`)




