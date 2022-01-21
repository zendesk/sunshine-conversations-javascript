# SunshineConversationsClient.MessengerAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Facebook Messenger Setup steps: - Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); - The Facebook app must have been submitted to Meta for app review with the “pages_manage_metadata” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. - In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token.  | [optional] [default to &#39;messenger&#39;]
**pageAccessToken** | **String** | A Facebook Page Access Token. | 
**appId** | **String** | A Facebook App ID. | 
**appSecret** | **String** | A Facebook App Secret. | 
**pageId** | **Number** | A Facebook page ID. | [optional] 
**pageName** | **String** | A Facebook page name. | [optional] 


