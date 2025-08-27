# SunshineConversationsClient.SwitchboardIntegrationsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSwitchboardIntegration**](SwitchboardIntegrationsApi.md#createSwitchboardIntegration) | **POST** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations | Create Switchboard Integration
[**deleteSwitchboardIntegration**](SwitchboardIntegrationsApi.md#deleteSwitchboardIntegration) | **DELETE** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} | Delete Switchboard Integration
[**listSwitchboardIntegrations**](SwitchboardIntegrationsApi.md#listSwitchboardIntegrations) | **GET** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations | List Switchboard Integrations
[**updateSwitchboardIntegration**](SwitchboardIntegrationsApi.md#updateSwitchboardIntegration) | **PATCH** /v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId} | Update Switchboard Integration



## createSwitchboardIntegration

> SwitchboardIntegrationResponse createSwitchboardIntegration(appId, switchboardId, switchboardIntegrationCreateBody)

Create Switchboard Integration

Create a switchboard integration.

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

var apiInstance = new SunshineConversationsClient.SwitchboardIntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var switchboardId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard.
var switchboardIntegrationCreateBody = {"name":"bot","integrationType":"zd:agentWorkspace","deliverStandbyEvents":true,"nextSwitchboardIntegrationId":"5ef21b86e933b7355c11c606","messageHistoryCount":5}; // SwitchboardIntegrationCreateBody | 
apiInstance.createSwitchboardIntegration(appId, switchboardId, switchboardIntegrationCreateBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **switchboardId** | **String**| Identifies the switchboard. | 
 **switchboardIntegrationCreateBody** | [**SwitchboardIntegrationCreateBody**](SwitchboardIntegrationCreateBody.md)|  | 

### Return type

[**SwitchboardIntegrationResponse**](SwitchboardIntegrationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSwitchboardIntegration

> Object deleteSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId)

Delete Switchboard Integration

Deletes the switchboard integration. If the deleted switchboard integration had an active status for some conversations, the default switchboard integration will replace it. Note that it is forbidden to delete a switchboard integration if it&#39;s the default one (a new one must be chosen first) or if another switchboard integration&#39;s &#x60;nextSwitchboardIntegrationId&#x60; refers to it. The integration that was linked to the deleted switchboard integration will start receiving all conversation events, regardless of the switchboard status.

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

var apiInstance = new SunshineConversationsClient.SwitchboardIntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var switchboardId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard.
var switchboardIntegrationId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard integration.
apiInstance.deleteSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **switchboardId** | **String**| Identifies the switchboard. | 
 **switchboardIntegrationId** | **String**| Identifies the switchboard integration. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSwitchboardIntegrations

> SwitchboardIntegrationListResponse listSwitchboardIntegrations(appId, switchboardId)

List Switchboard Integrations

Lists all switchboard integrations linked to the switchboard. 

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

var apiInstance = new SunshineConversationsClient.SwitchboardIntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var switchboardId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard.
apiInstance.listSwitchboardIntegrations(appId, switchboardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **switchboardId** | **String**| Identifies the switchboard. | 

### Return type

[**SwitchboardIntegrationListResponse**](SwitchboardIntegrationListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSwitchboardIntegration

> SwitchboardIntegrationResponse updateSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId, switchboardIntegrationUpdateBody)

Update Switchboard Integration

Updates a switchboard integration record.

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

var apiInstance = new SunshineConversationsClient.SwitchboardIntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var switchboardId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard.
var switchboardIntegrationId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the switchboard integration.
var switchboardIntegrationUpdateBody = {"deliverStandbyEvents":true,"nextSwitchboardIntegrationId":"5ef21b86e933b7355c11c606","messageHistoryCount":5}; // SwitchboardIntegrationUpdateBody | 
apiInstance.updateSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId, switchboardIntegrationUpdateBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **switchboardId** | **String**| Identifies the switchboard. | 
 **switchboardIntegrationId** | **String**| Identifies the switchboard integration. | 
 **switchboardIntegrationUpdateBody** | [**SwitchboardIntegrationUpdateBody**](SwitchboardIntegrationUpdateBody.md)|  | 

### Return type

[**SwitchboardIntegrationResponse**](SwitchboardIntegrationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

