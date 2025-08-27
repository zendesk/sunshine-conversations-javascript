# SunshineConversationsClient.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the user. | [optional] 
**authenticated** | **Boolean** | Whether or not the user has authenticated, either via JWT or via the Help Center | [optional] [readonly] 
**externalId** | **String** | An optional ID that can also be used to retrieve the user.  | [optional] 
**zendeskId** | **String** | The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API.  | [optional] 
**signedUpAt** | **String** | The date at which the user signed up. Must be ISO 8601 time format &#x60;YYYY-MM-DDThh:mm:ss.sssZ&#x60;. | [optional] 
**toBeRetained** | **Boolean** | Flag indicating whether a user should be retained after they have passed their inactive expiry. See [creating deletion schedules for bot-only conversations](https://support.zendesk.com/hc/en-us/articles/8499219792154) for more information. | [optional] 
**profile** | [**Profile**](Profile.md) |  | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 
**identities** | [**[Identity]**](Identity.md) | The user&#39;s connected identities. | [optional] [readonly] 


