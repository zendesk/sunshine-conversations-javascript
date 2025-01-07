# SunshineConversationsClient.ClientsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](ClientsApi.md#createClient) | **POST** /v2/apps/{appId}/users/{userIdOrExternalId}/clients | Create Client
[**listClients**](ClientsApi.md#listClients) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId}/clients | List Clients
[**removeClient**](ClientsApi.md#removeClient) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId} | Remove Client



## createClient

> ClientResponse createClient(appId, userIdOrExternalId, clientCreate)

Create Client

Create a client and link it to a channel specified by the &#x60;matchCriteria.type&#x60;. Note that the client is initially created with a &#x60;pending&#x60; status. The status of the linking request can be tracked by listening to the &#x60;link:match&#x60;, &#x60;link:success&#x60; and &#x60;link:failure&#x60; webhooks (only available in v1). For more information, see [link-events](https://docs.smooch.io/rest/v1/#link-events).

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

var apiInstance = new SunshineConversationsClient.ClientsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var userIdOrExternalId = "42589ad070d43be9b00ff7e5"; // String | The user's id or externalId.
var clientCreate = {"matchCriteria":{"type":"mailgun","integrationId":"582dedf230e788746891281a","primary":true,"address":"steveb@channel5.com","subject":"New message from {appName}"},"confirmation":{"type":"immediate","message":{"author":{"type":"business","displayName":"Steve","avatarUrl":"https://www.gravatar.com/image.jpg"},"content":{"type":"text","text":"Hello!"},"metadata":{"lang":"en-ca"}}},"target":{"conversationId":"029c31f25a21b47effd7be90"}}; // ClientCreate | 
apiInstance.createClient(appId, userIdOrExternalId, clientCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **userIdOrExternalId** | **String**| The user&#39;s id or externalId. | 
 **clientCreate** | [**ClientCreate**](ClientCreate.md)|  | 

### Return type

[**ClientResponse**](ClientResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listClients

> ClientListResponse listClients(appId, userIdOrExternalId, opts)

List Clients

Get all the clients for a particular user, including both linked clients and pending clients. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  &#x60;&#x60;&#x60;shell /v2/apps/:appId/users/:userId/clients?page[after]&#x3D;5ebee0975ac5304b664a12fa &#x60;&#x60;&#x60; 

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

var apiInstance = new SunshineConversationsClient.ClientsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var userIdOrExternalId = "42589ad070d43be9b00ff7e5"; // String | The user's id or externalId.
var opts = {
  'page': new SunshineConversationsClient.Page() // Page | Contains parameters for applying cursor pagination.
};
apiInstance.listClients(appId, userIdOrExternalId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **userIdOrExternalId** | **String**| The user&#39;s id or externalId. | 
 **page** | [**Page**](.md)| Contains parameters for applying cursor pagination. | [optional] 

### Return type

[**ClientListResponse**](ClientListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeClient

> Object removeClient(appId, userIdOrExternalId, clientId)

Remove Client

Remove a particular client and unsubscribe it from all connected conversations.

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

var apiInstance = new SunshineConversationsClient.ClientsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var userIdOrExternalId = "42589ad070d43be9b00ff7e5"; // String | The user's id or externalId.
var clientId = "5d8cff3cd55b040010928b5b"; // String | The client's id.
apiInstance.removeClient(appId, userIdOrExternalId, clientId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **userIdOrExternalId** | **String**| The user&#39;s id or externalId. | 
 **clientId** | **String**| The client&#39;s id. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

