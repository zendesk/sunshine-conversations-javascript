# SunshineConversationsClient.Twitter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultResponderId** | **String** | The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the &lt;a href&#x3D;\&quot;https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\&quot;&gt;Switchboard guide&lt;/a&gt;.  | [optional] 
**defaultResponder** | [**DefaultResponderDefaultResponder**](DefaultResponderDefaultResponder.md) |  | [optional] 
**type** | **String** | To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup).  | [optional] [default to &#39;twitter&#39;]
**tier** | **String** | Your Twitter app&#39;s tier. Only \&quot;enterprise\&quot; is supported for new integrations. | 
**envName** | **String** | The Twitter dev environments label. Only required / used for sandbox and premium tiers. | [optional] [readonly] 
**consumerKey** | **String** | The consumer key for your Twitter app. | 
**consumerSecret** | **String** | The consumer key secret for your Twitter app. | 
**accessTokenKey** | **String** | The access token key obtained from your user via oauth. | 
**accessTokenSecret** | **String** | The access token secret obtained from your user via oauth. | 



## Enum: TierEnum


* `enterprise` (value: `"enterprise"`)




