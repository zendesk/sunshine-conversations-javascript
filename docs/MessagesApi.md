# SunshineConversationsClient.MessagesApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAllMessages**](MessagesApi.md#deleteAllMessages) | **DELETE** /v2/apps/{appId}/conversations/{conversationId}/messages | Delete All Messages
[**deleteMessage**](MessagesApi.md#deleteMessage) | **DELETE** /v2/apps/{appId}/conversations/{conversationId}/messages/{messageId} | Delete Message
[**listMessages**](MessagesApi.md#listMessages) | **GET** /v2/apps/{appId}/conversations/{conversationId}/messages | List Messages
[**postMessage**](MessagesApi.md#postMessage) | **POST** /v2/apps/{appId}/conversations/{conversationId}/messages | Post Message



## deleteAllMessages

> Object deleteAllMessages(appId, conversationId)

Delete All Messages

Delete all messages of a particular conversation.

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

var apiInstance = new SunshineConversationsClient.MessagesApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var conversationId = ""029c31f25a21b47effd7be90""; // String | Identifies the conversation.
apiInstance.deleteAllMessages(appId, conversationId).then(function(data) {
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

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMessage

> Object deleteMessage(appId, conversationId, messageId)

Delete Message

Delete a single message of a particular conversation.

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

var apiInstance = new SunshineConversationsClient.MessagesApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var conversationId = ""029c31f25a21b47effd7be90""; // String | Identifies the conversation.
var messageId = ""029c31f25a21b47effd7be90""; // String | The id of the message.
apiInstance.deleteMessage(appId, conversationId, messageId).then(function(data) {
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
 **messageId** | **String**| The id of the message. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMessages

> MessageListResponse listMessages(appId, conversationId, opts)

List Messages

List all messages for a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-Pagination-and-Records-Limits), in the _backwards_ direction, with the most recent (i.e. last) page of messages being returned by default. The &#x60;hasMore&#x60; flag indicates whether more messages exist in the direction you are currently paginating through. To page backwards in the history, use the &#x60;beforeCursor&#x60; or follow the &#x60;prev&#x60; link. The page size limit is fixed at 100 messages per page.  &#x60;&#x60;&#x60;shell /v2/apps/:appId/conversations/:conversationId/messages?page[before]&#x3D;5f32b88acf6bf25073b2be56 &#x60;&#x60;&#x60; 

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

var apiInstance = new SunshineConversationsClient.MessagesApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var conversationId = ""029c31f25a21b47effd7be90""; // String | Identifies the conversation.
var opts = {
  'page': new SunshineConversationsClient.Page() // Page | Contains parameters for applying cursor pagination.
};
apiInstance.listMessages(appId, conversationId, opts).then(function(data) {
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
 **page** | [**Page**](.md)| Contains parameters for applying cursor pagination. | [optional] 

### Return type

[**MessageListResponse**](MessageListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postMessage

> MessagePostResponse postMessage(appId, conversationId, messagePost)

Post Message

Send a message in a particular conversation.

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

var apiInstance = new SunshineConversationsClient.MessagesApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var conversationId = ""029c31f25a21b47effd7be90""; // String | Identifies the conversation.
var messagePost = new SunshineConversationsClient.MessagePost(); // MessagePost | 
apiInstance.postMessage(appId, conversationId, messagePost).then(function(data) {
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
 **messagePost** | [**MessagePost**](MessagePost.md)|  | 

### Return type

[**MessagePostResponse**](MessagePostResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

