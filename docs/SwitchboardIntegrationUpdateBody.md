# SunshineConversationsClient.SwitchboardIntegrationUpdateBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Identifier for use in control transfer protocols. Restricted to alphanumeric characters, &#x60;-&#x60; and &#x60;_&#x60;. | [optional] 
**integrationId** | **String** | The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. Can&#39;t provide both &#x60;integrationId&#x60; and &#x60;integrationType&#x60;. | [optional] 
**integrationType** | **String** | The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. Can&#39;t provide both &#x60;integrationId&#x60; and &#x60;integrationType&#x60;. | [optional] 
**deliverStandbyEvents** | **Boolean** | Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status) | [optional] 
**nextSwitchboardIntegrationId** | **String** | The switchboard integration id to which control of a conversation is passed / offered by default. | [optional] 
**messageHistoryCount** | **Number** | Number of messages to include in the message history context. | [optional] 


