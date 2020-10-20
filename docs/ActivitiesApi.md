# SunshineConversationsClient.ActivitiesApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postActivity**](ActivitiesApi.md#postActivity) | **POST** /v2/apps/{appId}/conversations/{conversationId}/activity | Post Activity



## postActivity

> Object postActivity(appId, conversationId, activityPost)

Post Activity

Notify Sunshine Conversations of different conversation activities. Supported activity types are: * Typing activity * Conversation read event 

### Example

```javascript
var SunshineConversationsClient = require('sunshine-conversations-client');
var defaultClient = SunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_USERNAME';
basicAuth.password = 'YOUR_PASSWORD';

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new SunshineConversationsClient.ActivitiesApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var conversationId = "029c31f25a21b47effd7be90"; // String | Identifies the conversation.
var activityPost = {"author":{"type":"user","userId":"5963c0d619a30a2e00de36b8"},"type":"conversation:read"}; // ActivityPost | 
apiInstance.postActivity(appId, conversationId, activityPost).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **conversationId** | **String**| Identifies the conversation. | 
 **activityPost** | [**ActivityPost**](ActivityPost.md)|  | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

