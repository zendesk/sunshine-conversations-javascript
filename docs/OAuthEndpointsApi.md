# SunshineConversationsClient.OAuthEndpointsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](OAuthEndpointsApi.md#authorize) | **GET** /oauth/authorize | Authorize
[**getToken**](OAuthEndpointsApi.md#getToken) | **POST** /oauth/token | Get Token
[**getTokenInfo**](OAuthEndpointsApi.md#getTokenInfo) | **GET** /v2/tokenInfo | Get Token Info
[**revokeAccess**](OAuthEndpointsApi.md#revokeAccess) | **DELETE** /oauth/authorization | Revoke Access



## authorize

> authorize(clientId, responseType, opts)

Authorize

This endpoint begins the OAuth flow. It relies on a browser session for authentication. If the user is not logged in to Sunshine Conversations they will be redirected to the login page. If the user has many apps, they will first be prompted to select the one they wish to integrate with. They will then be presented with an Allow/Deny dialog, describing details of the access your integration is requesting.

### Example

```javascript
var SunshineConversationsClient = require('sunshine-conversations-client');

var apiInstance = new SunshineConversationsClient.OAuthEndpointsApi();
var clientId = "5e4af71a81966cfff3ef6550"; // String | Your integration’s unique identifier
var responseType = "code"; // String | For now the only acceptable value is code.
var opts = {
  'state': Pending, // String | You may pass in any arbitrary string value here which will be returned to you along with the code via browser redirect.
  'redirectUri': https://example.org // String | You may pass in a redirect_uri to determine which URI the response is redirected to. This URI must be contained in the list configured by your integration. If this option is not passed, the first URI present in the list will be used.
};
apiInstance.authorize(clientId, responseType, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Your integration’s unique identifier | 
 **responseType** | **String**| For now the only acceptable value is code. | 
 **state** | **String**| You may pass in any arbitrary string value here which will be returned to you along with the code via browser redirect. | [optional] 
 **redirectUri** | **String**| You may pass in a redirect_uri to determine which URI the response is redirected to. This URI must be contained in the list configured by your integration. If this option is not passed, the first URI present in the list will be used. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getToken

> Object getToken(inlineObject)

Get Token

This endpoint is used to exchange an authorization code for an access token. It should only be used in server-to-server calls.

### Example

```javascript
var SunshineConversationsClient = require('sunshine-conversations-client');

var apiInstance = new SunshineConversationsClient.OAuthEndpointsApi();
var inlineObject = new SunshineConversationsClient.InlineObject(); // InlineObject | 
apiInstance.getToken(inlineObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTokenInfo

> AppResponse getTokenInfo()

Get Token Info

This endpoint can be used to retrieve the app linked to the OAuth token.

### Example

```javascript
var SunshineConversationsClient = require('sunshine-conversations-client');

var apiInstance = new SunshineConversationsClient.OAuthEndpointsApi();
apiInstance.getTokenInfo().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeAccess

> Object revokeAccess()

Revoke Access

This endpoint is used to revoke your integration’s access to the user’s Sunshine Conversations app. Revoking access means your integration will no longer be able to interact with the app, and any webhooks the integration had previously configured will be removed.  Calling this endpoint is equivalent to the user removing your integration manually in the Sunshine Conversations web app. Your integration’s &#x60;removeUrl&#x60; (if configured) will also be called when an integration is removed in this way. 

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

var apiInstance = new SunshineConversationsClient.OAuthEndpointsApi();
apiInstance.revokeAccess().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

