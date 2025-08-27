# SunshineConversationsClient.MessageWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the message. | [optional] 
**received** | **String** | A datetime string with the format &#x60;YYYY-MM-DDThh:mm:ss.SSSZ&#x60; representing when Sunshine Conversations received the message. | [optional] 
**author** | [**AuthorWebhook**](AuthorWebhook.md) |  | [optional] 
**content** | [**Content**](Content.md) | The content of the message. | [optional] 
**source** | [**MessageWebhookSource**](MessageWebhookSource.md) |  | [optional] 
**quotedMessage** | [**QuotedMessage**](QuotedMessage.md) | The quoted message is currently only available for WhatsApp and Web Messenger &#x60;formResponse&#x60; messages. | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 
**deleted** | **Boolean** | true if the message serves as a placeholder for one that has been deleted. | [optional] 


