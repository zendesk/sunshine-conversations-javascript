# SunshineConversationsClient.DefaultResponderDefaultResponder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the switchboard integration. | [optional] 
**integrationId** | **String** | The unique ID of the integration. | [optional] 
**integrationType** | **String** | The type of the integration. | [optional] 
**deliverStandbyEvents** | **Boolean** | Indicates whether the switchboard should deliver standby events. | [optional] 
**nextSwitchboardIntegrationId** | **String** | The unique ID of the next switchboard integration. | [optional] 
**messageHistoryCount** | **Number** | The number of messages to keep in the message history. | [optional] 
**inherited** | **Boolean** | Indicates whether the default responder is inherited from the switchboard&#39;s global config or not. Returns &#x60;false&#x60; if a per-channel responder override has been set for this integration, and &#x60;true&#x60; otherwise. | [optional] 


