# SunshineConversationsClient.Author

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The author type. Either \&quot;user\&quot; (representing the end user)  or \&quot;business\&quot; (sent on behalf of the business).  | 
**userId** | **String** | The id of the user. Only supported when &#x60;type&#x60; is user. | [optional] 
**userExternalId** | **String** | The externalId of the user. Only supported when &#x60;type&#x60; is user. | [optional] 
**displayName** | **String** | The display name of the message author. | [optional] 
**avatarUrl** | **String** | A custom message icon URL. The image must be JPG, PNG, or GIF format. | [optional] 



## Enum: TypeEnum


* `business` (value: `"business"`)

* `user` (value: `"user"`)




