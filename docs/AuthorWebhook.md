# AloudinSunshineConversationsClient.AuthorWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The role of the message or activity. | 
**userId** | **String** | The id of the user. Only supported when role is &#x60;user&#x60;. | [optional] 
**user** | [**User**](User.md) | Full profile of the user that authored the message or activity. It is used only in webhook payloads if the &#x60;includeFullUser&#x60; option is enabled. | [optional] 



## Enum: TypeEnum


* `business` (value: `"business"`)

* `user` (value: `"user"`)




