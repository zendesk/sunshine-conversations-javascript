# SunshineConversationsClient.Twilio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint.  | [optional] [default to &#39;twilio&#39;]
**accountSid** | **String** | Twilio Account SID. | 
**authToken** | **String** | Twilio Auth Token. | 
**phoneNumberSid** | **String** | SID for specific phone number. One of &#x60;messagingServiceSid&#x60; or &#x60;phoneNumberSid&#x60; must be provided when creating a Twilio integration. | [optional] 
**messagingServiceSid** | **String** | SID for specific messaging service. One of &#x60;messagingServiceSid&#x60; or &#x60;phoneNumberSid&#x60; must be provided when creating a Twilio integration. | [optional] 


