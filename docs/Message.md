# SunshineConversationsClient.Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the message. | [optional] 
**received** | **String** | A datetime string with the format &#x60;YYYY-MM-DDThh:mm:ss.SSSZ&#x60; representing when Sunshine Conversations received the message. | [optional] 
**author** | [**AuthorMessages**](AuthorMessages.md) |  | [optional] 
**content** | [**Content**](Content.md) | The content of the message. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**quotedMessage** | [**QuotedMessage**](QuotedMessage.md) | The quoted message is currently only available for WhatsApp and Web Messenger &#x60;formResponse&#x60; messages. | [optional] 
**metadata** | **Object** |  | [optional] 
**deleted** | **Boolean** | true if the message serves as a placeholder for one that has been deleted. | [optional] 


