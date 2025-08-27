# SunshineConversationsClient.ReleaseControlBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for the release control action. | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the &#x60;switchboard:releaseControl&#x60; webhook. | [optional] 



## Enum: ReasonEnum


* `ticketClosed` (value: `"ticketClosed"`)

* `transferToEmail` (value: `"transferToEmail"`)




