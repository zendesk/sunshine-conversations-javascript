# SunshineConversationsClient.FormMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;form&#39;]
**submitted** | **Boolean** | Flag which states whether the form is submitted. | [optional] [readonly] 
**blockChatInput** | **Boolean** | When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user&#39;s ability to send messages in the conversation.. | [optional] 
**fields** | [**[FormMessageField]**](FormMessageField.md) | An array of objects representing fields associated with the message. Only present in form and formResponse messages. | 


