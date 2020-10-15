# SunshineConversationsClient.SwitchboardIntegration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the switchboard integration. | 
**name** | **String** | Identifier for use in control transfer protocols. Restricted to alphanumeric characters, &#x60;-&#x60; and &#x60;_&#x60;. | 
**integrationId** | **String** | Id of the integration that should deliver events routed by the switchboard. | 
**integrationType** | **String** | Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType. | 
**deliverStandbyEvents** | **Boolean** | Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status) | 
**nextSwitchboardIntegrationId** | **String** | The switchboard integration id to which control of a conversation is passed / offered by default. | [optional] 
**messageHistoryCount** | **Number** | Number of messages to include in the message history context. | [optional] 


