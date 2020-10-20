# SunshineConversationsClient.Confirmation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of confirmation. | 
**message** | [**MessagePost**](MessagePost.md) | The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation. | [optional] 



## Enum: TypeEnum


* `immediate` (value: `"immediate"`)

* `userActivity` (value: `"userActivity"`)

* `prompt` (value: `"prompt"`)




