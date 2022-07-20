# SunshineConversationsClient.ClientUpdateEventAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**ConversationTruncated**](ConversationTruncated.md) | The conversation which triggered a change in the client. | [optional] 
**user** | [**UserTruncated**](UserTruncated.md) | The user associated with the client. | [optional] 
**client** | [**Client**](Client.md) | The updated client. | [optional] 
**reason** | **String** | The reason for which the client was updated. * &#x60;confirmed&#x60; - The client is now active and ready to use. * &#x60;blocked&#x60; - The user has unsubscribed from the conversation. * &#x60;unblocked&#x60; - A previously unsubscribed user resubscribed to the conversation. * &#x60;matched&#x60; - The channel found a user that matches the information provided.  | [optional] 



## Enum: ReasonEnum


* `confirmed` (value: `"confirmed"`)

* `blocked` (value: `"blocked"`)

* `unblocked` (value: `"unblocked"`)

* `matched` (value: `"matched"`)




