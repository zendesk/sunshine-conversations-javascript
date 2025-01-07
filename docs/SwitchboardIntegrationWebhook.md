# SunshineConversationsClient.SwitchboardIntegrationWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the switchboard integration. | [optional] 
**name** | **String** | Identifier for use in control transfer protocols. Restricted to alphanumeric characters, &#x60;-&#x60; and &#x60;_&#x60;. | [optional] 
**integrationId** | **String** | Id of the integration that should deliver events routed by the switchboard. | [optional] 
**integrationType** | **String** | Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType. | [optional] 


