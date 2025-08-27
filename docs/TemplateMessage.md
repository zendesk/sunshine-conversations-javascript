# SunshineConversationsClient.TemplateMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;template&#39;]
**blockChatInput** | **Boolean** | When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user&#39;s ability to send messages in the conversation. | [optional] 
**template** | **Object** | The whatsapp template message to send. For more information, consult the [guide](https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/message-overrides/#template-messages). &#x60;schema&#x60; must be set to &#x60;whatsapp&#x60;. | 


