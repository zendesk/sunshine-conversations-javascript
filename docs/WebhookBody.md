# SunshineConversationsClient.WebhookBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **String** | URL to be called when the webhook is triggered. | [optional] 
**triggers** | **[String]** | An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers). | [optional] 
**includeFullUser** | **Boolean** | A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user. | [optional] [default to false]
**includeFullSource** | **Boolean** | A boolean specifying whether webhook payloads should include the client and device object (when applicable). | [optional] [default to false]


