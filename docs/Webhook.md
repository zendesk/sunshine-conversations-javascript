# AloudinSunshineConversationsClient.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier for the webhook. | [optional] [readonly] 
**version** | **String** | Schema version of the payload delivered to this webhook. Can be &#x60;v1&#x60;, &#x60;v1.1&#x60; or &#x60;v2&#x60;. | [optional] [readonly] 
**target** | **String** | URL to be called when the webhook is triggered. | 
**triggers** | **[String]** | An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are &#x60;conversation:create&#x60;, &#x60;conversation:message:delivery:channel&#x60;, &#x60;conversation:message:delivery:failure&#x60;, &#x60;conversation:message:delivery:user&#x60;, &#x60;conversation:message&#x60;, &#x60;conversation:read&#x60;, &#x60;conversation:typing&#x60;, &#x60;conversation:postback&#x60;, and &#x60;user:merge&#x60; | 
**secret** | **String** | Webhook secret, used to verify the origin of incoming requests. | [optional] 
**includeFullUser** | **Boolean** | A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user. | [optional] [default to false]
**includeFullSource** | **Boolean** | A boolean specifying whether webhook payloads should include the client and device object (when applicable). | [optional] [default to false]


