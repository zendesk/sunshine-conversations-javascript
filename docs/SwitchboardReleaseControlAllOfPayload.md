# SunshineConversationsClient.SwitchboardReleaseControlAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**ConversationTruncated**](ConversationTruncated.md) | The conversation from which the switchboard event was fired. The payload will omit &#x60;activeSwitchboardIntegration&#x60;, representing that no switchboard integration is in control of the conversation. | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 
**reason** | **String** | Reason for the release control action, if applicable. | [optional] 



## Enum: ReasonEnum


* `ticketClosed` (value: `"ticketClosed"`)

* `transferToEmail` (value: `"transferToEmail"`)




