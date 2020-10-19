# AloudinSunshineConversationsClient.SwitchboardIntegrationCreateBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Identifier for use in control transfer protocols. Restricted to alphanumeric characters, &#x60;-&#x60; and &#x60;_&#x60;. | 
**integrationId** | **String** | The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of &#x60;integrationId&#x60; or &#x60;integrationType&#x60; must be provided. | [optional] 
**integrationType** | **String** | The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of &#x60;integrationId&#x60; or &#x60;integrationType&#x60; must be provided. | [optional] 
**deliverStandbyEvents** | **Boolean** |  | [optional] 
**nextSwitchboardIntegrationId** | **String** |  | [optional] 
**messageHistoryCount** | **Number** | Number of messages to include in the message history context. | [optional] 


