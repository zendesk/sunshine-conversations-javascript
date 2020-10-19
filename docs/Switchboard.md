# AloudinSunshineConversationsClient.Switchboard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the switchboard. | 
**enabled** | **Boolean** | Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don&#39;t get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events. | 
**defaultSwitchboardIntegrationId** | **String** | The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled. | [optional] 


