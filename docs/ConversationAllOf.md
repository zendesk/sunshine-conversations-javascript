# SunshineConversationsClient.ConversationAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isDefault** | **Boolean** | Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases.  | [optional] 
**displayName** | **String** | A friendly name for the conversation, may be displayed to the business or the user.  | [optional] 
**description** | **String** | A short text describing the conversation. | [optional] 
**iconUrl** | **String** | A custom conversation icon url. The image must be in either JPG, PNG, or GIF format | [optional] 
**businessLastRead** | **String** | A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business.  | [optional] 
**lastUpdatedAt** | **String** | A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet.  | [optional] 
**createdAt** | **String** | A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the creation time of the conversation.  | [optional] 


