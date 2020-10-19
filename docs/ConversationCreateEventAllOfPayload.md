# AloudinSunshineConversationsClient.ConversationCreateEventAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**ConversationTruncated**](ConversationTruncated.md) | The conversation that was created. | [optional] 
**creationReason** | **String** | The reason why the conversation was created, if applicable. * &#x60;linkRequest&#x60; - The conversation was created in order to generate a link request to transfer the user to a different channel. * &#x60;message&#x60; - The conversation was created because a message was sent. * &#x60;none&#x60; - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * &#x60;notification&#x60; - The conversation was created by a call to the Notification API. * &#x60;prechatCapture&#x60; - The conversation was created because the user completed a prechat capture form in the Web Messenger. * &#x60;startConversation&#x60; - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel.  | [optional] 
**source** | [**SourceWebhook**](SourceWebhook.md) | The source of the creation. | [optional] 
**user** | [**User**](User.md) | The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required. | [optional] 
**referral** | [**Referral**](Referral.md) | Referral information, if applicable. | [optional] 



## Enum: CreationReasonEnum


* `linkRequest` (value: `"linkRequest"`)

* `message` (value: `"message"`)

* `none` (value: `"none"`)

* `notification` (value: `"notification"`)

* `prechatCapture` (value: `"prechatCapture"`)

* `startConversation` (value: `"startConversation"`)




