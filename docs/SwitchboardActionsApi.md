# SunshineConversationsClient.SwitchboardActionsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptControl**](SwitchboardActionsApi.md#acceptControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/acceptControl | Accept Control
[**offerControl**](SwitchboardActionsApi.md#offerControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/offerControl | Offer Control
[**passControl**](SwitchboardActionsApi.md#passControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/passControl | Pass Control
[**releaseControl**](SwitchboardActionsApi.md#releaseControl) | **POST** /v2/apps/{appId}/conversations/{conversationId}/releaseControl | Release Control



## acceptControl

> Object acceptControl(appId, conversationId, acceptControlBody)

Accept Control

The acceptControl action transfers the control of the conversation to the pending switchboard integration. When using integration auth scope, a 403 is returned if the pending switchboard integration is not the authenticated integration.

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

var apiInstance = new SunshineConversationsClient.SwitchboardActionsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var conversationId = "029c31f25a21b47effd7be90"; // String | Identifies the conversation.
var acceptControlBody = new SunshineConversationsClient.AcceptControlBody(); // AcceptControlBody | 
apiInstance.acceptControl(appId, conversationId, acceptControlBody).then(function(data) {
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
 **acceptControlBody** | [**AcceptControlBody**](AcceptControlBody.md)|  | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## offerControl

> Object offerControl(appId, conversationId, offerControlBody)

Offer Control

The offerControl action will invite a switchboard integration to accept control of the conversation (changing its status to pending), and trigger a webhook signal to that integration indicating that they have been offered control of the conversation. Invalidates previous offerControl actions.

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

var apiInstance = new SunshineConversationsClient.SwitchboardActionsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var conversationId = "029c31f25a21b47effd7be90"; // String | Identifies the conversation.
var offerControlBody = new SunshineConversationsClient.OfferControlBody(); // OfferControlBody | 
apiInstance.offerControl(appId, conversationId, offerControlBody).then(function(data) {
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
 **offerControlBody** | [**OfferControlBody**](OfferControlBody.md)|  | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## passControl

> Object passControl(appId, conversationId, passControlBody)

Pass Control

The passControl action marks the named switchboard integration as active and transition all the other switchboard integrations to standby status.

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

var apiInstance = new SunshineConversationsClient.SwitchboardActionsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var conversationId = "029c31f25a21b47effd7be90"; // String | Identifies the conversation.
var passControlBody = new SunshineConversationsClient.PassControlBody(); // PassControlBody | 
apiInstance.passControl(appId, conversationId, passControlBody).then(function(data) {
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
 **passControlBody** | [**PassControlBody**](PassControlBody.md)|  | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## releaseControl

> Object releaseControl(appId, conversationId)

Release Control

The releaseControl action releases the control of the conversation by nullifying its switchboard state. When using integration auth scope, a 403 is returned if the active switchboard integration is not the authenticated integration.

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

var apiInstance = new SunshineConversationsClient.SwitchboardActionsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var conversationId = "029c31f25a21b47effd7be90"; // String | Identifies the conversation.
apiInstance.releaseControl(appId, conversationId).then(function(data) {
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

