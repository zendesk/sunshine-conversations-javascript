# SunshineConversationsClient.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the user. | [optional] 
**authenticated** | **Boolean** | Whether or not the user has authenticated, either via JWT or via the Help Center | [optional] [readonly] 
**externalId** | **String** | An optional ID that can also be used to retrieve the user.  | [optional] 
**zendeskId** | **String** | The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API.  | [optional] 
**signedUpAt** | **String** |  | [optional] 
**toBeRetained** | **Boolean** |  | [optional] 
**profile** | [**Profile**](Profile.md) |  | [optional] 
**metadata** | **Object** |  | [optional] 
**identities** | [**[Identity]**](Identity.md) | The user&#39;s connected identities. | [optional] [readonly] 


