# SunshineConversationsClient.Telegram

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint.  | [optional] [default to &#39;telegram&#39;]
**token** | **String** | Telegram Bot Token. | 
**username** | **String** | Username of the botId | [optional] [readonly] 
**botId** | **String** | A human-friendly name used to identify the integration. | [optional] [readonly] 
**defaultResponderId** | **String** | The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to &lt;a href&#x3D;\&quot;https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\&quot;&gt;Per-channel default responder&lt;/a&gt; guide.  | [optional] 
**defaultResponder** | [**DefaultResponderDefaultResponder**](DefaultResponderDefaultResponder.md) |  | [optional] 


