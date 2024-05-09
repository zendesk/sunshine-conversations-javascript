# SunshineConversationsClient.DevicesApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevice**](DevicesApi.md#getDevice) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId}/devices/{deviceId} | Get Device
[**listDevices**](DevicesApi.md#listDevices) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId}/devices | List Devices



## getDevice

> DeviceResponse getDevice(appId, userIdOrExternalId, deviceId)

Get Device

Fetches a specific Device.  &#x60;&#x60;&#x60;shell /v2/apps/:appId/users/:userId &#x60;&#x60;&#x60; 

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

var apiInstance = new SunshineConversationsClient.DevicesApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var userIdOrExternalId = "42589ad070d43be9b00ff7e5"; // String | The user's id or externalId.
var deviceId = "5d8cff3cd55b040010928b5b"; // String | The device's id.
apiInstance.getDevice(appId, userIdOrExternalId, deviceId).then(function(data) {
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
 **deviceId** | **String**| The device&#39;s id. | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDevices

> ClientListResponse listDevices(appId, userIdOrExternalId)

List Devices

Get all the devices for a particular user. The Devices are sorted based on last seen time.  &#x60;&#x60;&#x60;shell /v2/apps/:appId/users/:userId/devices &#x60;&#x60;&#x60; 

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

var apiInstance = new SunshineConversationsClient.DevicesApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var userIdOrExternalId = "42589ad070d43be9b00ff7e5"; // String | The user's id or externalId.
apiInstance.listDevices(appId, userIdOrExternalId).then(function(data) {
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

### Return type

[**ClientListResponse**](ClientListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

