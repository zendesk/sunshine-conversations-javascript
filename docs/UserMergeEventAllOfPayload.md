# SunshineConversationsClient.UserMergeEventAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mergedUsers** | [**UserMergeEventAllOfPayloadMergedUsers**](UserMergeEventAllOfPayloadMergedUsers.md) |  | [optional] 
**mergedConversations** | [**UserMergeEventAllOfPayloadMergedConversations**](UserMergeEventAllOfPayloadMergedConversations.md) |  | [optional] 
**mergedClients** | [**UserMergeEventAllOfPayloadMergedClients**](UserMergeEventAllOfPayloadMergedClients.md) |  | [optional] 
**discardedMetadata** | **{String: Object}** | A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit. | [optional] 
**reason** | **String** | The reason for which the users merged. * &#x60;api&#x60; - The users were merged using the API. * &#x60;channelLinking&#x60; - The users were merged as a result of initiating a channel link. * &#x60;sdkLogin&#x60; - The users were merged as a result of logging into an SDK device.  | [optional] 



## Enum: ReasonEnum


* `api` (value: `"api"`)

* `channelLinking` (value: `"channelLinking"`)

* `sdkLogin` (value: `"sdkLogin"`)




