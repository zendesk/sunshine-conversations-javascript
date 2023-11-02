# SunshineConversationsClient.FormMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;form&#39;]
**submitted** | **Boolean** | Flag which states whether the form is submitted. | [optional] [readonly] 
**blockChatInput** | **Boolean** | true if the message should block the chat input on Web Messenger. | [optional] 
**fields** | [**[FormMessageField]**](FormMessageField.md) | An array of objects representing fields associated with the message. Only present in form and formResponse messages. | 


