# AloudinSunshineConversationsClient.SwitchboardsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSwitchboard**](SwitchboardsApi.md#createSwitchboard) | **POST** /v2/apps/{appId}/switchboards | Create Switchboard
[**deleteSwitchboard**](SwitchboardsApi.md#deleteSwitchboard) | **DELETE** /v2/apps/{appId}/switchboards/{switchboardId} | Delete Switchboard
[**listSwitchboards**](SwitchboardsApi.md#listSwitchboards) | **GET** /v2/apps/{appId}/switchboards | List Switchboards
[**updateSwitchboard**](SwitchboardsApi.md#updateSwitchboard) | **PATCH** /v2/apps/{appId}/switchboards/{switchboardId} | Update Switchboard



## createSwitchboard

> SwitchboardResponse createSwitchboard(appId)

Create Switchboard

Create a switchboard.

### Example

```javascript
var AloudinSunshineConversationsClient = require('aloudin-sunshine-conversations-client');
var defaultClient = AloudinSunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_USERNAME';
basicAuth.password = 'YOUR_PASSWORD';

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new AloudinSunshineConversationsClient.SwitchboardsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
apiInstance.createSwitchboard(appId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 

### Return type

[**SwitchboardResponse**](SwitchboardResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteSwitchboard

> Object deleteSwitchboard(appId, switchboardId)

Delete Switchboard

Deletes the switchboard and all its switchboard integrations. The integrations linked to these switchboard integrations are not deleted and will start receiving all conversation events.

### Example

```javascript
var AloudinSunshineConversationsClient = require('aloudin-sunshine-conversations-client');
var defaultClient = AloudinSunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_USERNAME';
basicAuth.password = 'YOUR_PASSWORD';

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new AloudinSunshineConversationsClient.SwitchboardsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var switchboardId = "5d8cff3cd55b040010928b5b"; // String | Identifies the switchboard.
apiInstance.deleteSwitchboard(appId, switchboardId).then(function(data) {
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

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSwitchboards

> SwitchboardListResponse listSwitchboards(appId)

List Switchboards

Lists all switchboards belonging to the app. 

### Example

```javascript
var AloudinSunshineConversationsClient = require('aloudin-sunshine-conversations-client');
var defaultClient = AloudinSunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_USERNAME';
basicAuth.password = 'YOUR_PASSWORD';

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new AloudinSunshineConversationsClient.SwitchboardsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
apiInstance.listSwitchboards(appId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 

### Return type

[**SwitchboardListResponse**](SwitchboardListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSwitchboard

> SwitchboardResponse updateSwitchboard(appId, switchboardId, switchboardUpdateBody)

Update Switchboard

Updates a switchboard record.

### Example

```javascript
var AloudinSunshineConversationsClient = require('aloudin-sunshine-conversations-client');
var defaultClient = AloudinSunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_USERNAME';
basicAuth.password = 'YOUR_PASSWORD';

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new AloudinSunshineConversationsClient.SwitchboardsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var switchboardId = "5d8cff3cd55b040010928b5b"; // String | Identifies the switchboard.
var switchboardUpdateBody = new AloudinSunshineConversationsClient.SwitchboardUpdateBody(); // SwitchboardUpdateBody | 
apiInstance.updateSwitchboard(appId, switchboardId, switchboardUpdateBody).then(function(data) {
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
 **switchboardUpdateBody** | [**SwitchboardUpdateBody**](SwitchboardUpdateBody.md)|  | 

### Return type

[**SwitchboardResponse**](SwitchboardResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

