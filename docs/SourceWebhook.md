# AloudinSunshineConversationsClient.SourceWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels. | [optional] 
**integrationId** | **String** | Identifier indicating which integration the message was sent from. For user messages only. | [optional] 
**originalMessageId** | **String** | Message identifier assigned by the originating channel. | [optional] 
**originalMessageTimestamp** | **String** | A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message. | [optional] 
**client** | [**Client**](Client.md) | The client from which the user authored the message or activity, if applicable. This field will only be present if the &#x60;includeFullSource&#x60; option is enabled for the webhook. | [optional] 
**device** | [**Device**](Device.md) | The device from which the user authored the message or activity, if applicable. This field will only be present if the &#x60;includeFullSource&#x60; option is enabled for the webhook | [optional] 


