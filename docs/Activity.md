# SunshineConversationsClient.Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | If the author type is &#x60;user&#x60;, only &#x60;conversation:read&#x60; is supported. | [optional] 
**source** | [**SourceWebhook**](SourceWebhook.md) | The source of the activity. | [optional] 
**author** | [**AuthorWebhook**](AuthorWebhook.md) |  | [optional] 



## Enum: TypeEnum


* `conversation:read` (value: `"conversation:read"`)

* `typing:start` (value: `"typing:start"`)

* `typing:stop` (value: `"typing:stop"`)




