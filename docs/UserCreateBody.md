# SunshineConversationsClient.UserCreateBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | A unique identifier for the user. The &#x60;externalId&#x60; can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/).  | 
**signedUpAt** | **String** | The date at which the user signed up. Must be ISO 8601 time format &#x60;YYYY-MM-DDThh:mm:ss.sssZ&#x60;. | [optional] 
**profile** | [**Profile**](Profile.md) |  | [optional] 
**metadata** | [**Object**](.md) | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 


