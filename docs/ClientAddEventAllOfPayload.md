# SunshineConversationsClient.ClientAddEventAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**ConversationTruncated**](ConversationTruncated.md) | The conversation associated with the creation of the client. This field is only present when the reason is &#x60;channelLinking&#x60; and when attaching the client to a specific conversation.  | [optional] 
**user** | [**UserTruncated**](UserTruncated.md) | The user associated with the client. | [optional] 
**client** | [**Client**](Client.md) | The client that was just created. | [optional] 
**reason** | **String** | The reason for which the client was added. * &#x60;channelLinking&#x60; - The client was created as a result of initiating a channel link. * &#x60;sdkLogin&#x60; - The client was created as a result of logging into an SDK device. * &#x60;authCode&#x60; - The client was created as a result of initializing an SDK client with an &#x60;authCode&#x60;.  | [optional] 
**source** | [**SourceWebhook**](SourceWebhook.md) | The source where this event originated from. This could be the API or an SDK device. | [optional] 



## Enum: ReasonEnum


* `channelLinking` (value: `"channelLinking"`)

* `sdkLogin` (value: `"sdkLogin"`)

* `authCode` (value: `"authCode"`)




