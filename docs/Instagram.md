# SunshineConversationsClient.Instagram

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Facebook for app review with the \&quot;manage_pages\&quot; (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \&quot;instagram_basic\&quot;, and \&quot;instagram_manage_messages\&quot; (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token.  | [optional] [default to &#39;instagram&#39;]
**pageAccessToken** | **String** | The Facebook Page Access Token of the Facebook page that is linked to your Instagram account. | 
**appId** | **String** | Your Facebook App ID. | 
**appSecret** | **String** | Your Facebook App secret. | 
**businessName** | **String** | Your Instagram Business account name | [optional] [readonly] 
**businessUsername** | **String** | Your Instagram Business unique username | [optional] [readonly] 
**pageId** | **String** | The ID of the Facebook Page linked to your Instagram Business account | [optional] [readonly] 
**businessId** | **String** | The ID of the Instagram Business account | [optional] [readonly] 
**username** | **String** | The Facebook user&#39;s username. This is returned when integrating through the Dashboard | [optional] [readonly] 
**userId** | **String** | The Facebook user&#39;s user ID. This is returned when integrating through the Dashboard | [optional] [readonly] 


