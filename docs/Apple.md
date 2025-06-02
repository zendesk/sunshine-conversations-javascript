# SunshineConversationsClient.Apple

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint.  | [optional] [default to &#39;apple&#39;]
**businessId** | **String** | Apple Messages for Business ID. | 
**apiSecret** | **String** | Your Apple API secret which is tied to your Messaging Service Provider. | 
**mspId** | **String** | Your Messaging Service Provider ID. | 
**authenticationMessageSecret** | **String** | A secret used to create the state value when sending Apple authentication 2.0 messages | [optional] 
**defaultResponderId** | **String** | The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the &lt;a href&#x3D;\&quot;https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\&quot;&gt;Switchboard guide&lt;/a&gt;.  | [optional] 
**defaultResponder** | [**DefaultResponderDefaultResponder**](DefaultResponderDefaultResponder.md) |  | [optional] 


