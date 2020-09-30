# SunshineConversationsClient.Participant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the participant. | [optional] 
**userId** | **String** | The id of the associated user. | [optional] 
**unreadCount** | **Number** | Number of messages the user has not yet read. | [optional] 
**clientAssociations** | [**[ClientAssociation]**](ClientAssociation.md) | Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user&#39;s primary client for that conversation, and will be selected first for message delivery.  | [optional] 
**userExternalId** | **String** | The externalId of the associated user. | [optional] 
**lastRead** | **String** | A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read. | [optional] 


