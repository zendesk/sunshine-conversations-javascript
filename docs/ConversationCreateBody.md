# AloudinSunshineConversationsClient.ConversationCreateBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConversationType**](ConversationType.md) |  | 
**participants** | [**[ParticipantSubSchema]**](ParticipantSubSchema.md) | The users participating in the conversation. For &#x60;personal&#x60; conversations, this field is required with a length of exactly 1. For &#x60;sdkGroup&#x60; conversations, must have a length less than or equal to 10. Can be omitted to have a conversation with no participants if the type is &#x60;sdkGroup&#x60;.  | [optional] 
**displayName** | **String** | A friendly name for the conversation, may be displayed to the business or the user.  | [optional] 
**description** | **String** | A short text describing the conversation. | [optional] 
**iconUrl** | **String** | A custom conversation icon url. The image must be in either JPG, PNG, or GIF format | [optional] 
**metadata** | [**Object**](.md) | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 


