# AloudinSunshineConversationsClient.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title of the item. | 
**description** | **String** | The description of the item. | [optional] 
**mediaUrl** | **String** | The image url attached to the item. | [optional] 
**mediaType** | **String** | The MIME type for any image attached in the mediaUrl. | [optional] 
**size** | **String** | The size of the image. | [optional] 
**actions** | [**[ActionSubset]**](ActionSubset.md) | An array of objects representing the actions associated with the item. | 
**metadata** | [**Object**](.md) | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 



## Enum: SizeEnum


* `compact` (value: `"compact"`)

* `large` (value: `"large"`)




