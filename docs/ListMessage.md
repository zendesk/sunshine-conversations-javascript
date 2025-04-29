# SunshineConversationsClient.ListMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;list&#39;]
**blockChatInput** | **Boolean** | When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user&#39;s ability to send messages in the conversation. | [optional] 
**items** | [**[Item]**](Item.md) | An array of objects representing the items associated with the message. Only present in carousel and list type messages. | 
**actions** | [**[ActionSubset]**](ActionSubset.md) | An array of objects representing the actions associated with the message. The array length is limited by the third party channel. | [optional] 


