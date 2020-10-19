# AloudinSunshineConversationsClient.AppsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /v2/apps | Create App
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /v2/apps/{appId} | Delete App
[**getApp**](AppsApi.md#getApp) | **GET** /v2/apps/{appId} | Get App
[**listApps**](AppsApi.md#listApps) | **GET** /v2/apps | List Apps
[**updateApp**](AppsApi.md#updateApp) | **PATCH** /v2/apps/{appId} | Update App



## createApp

> AppResponse createApp(appCreateBody)

Create App

Creates a new app. When using [service account](#service-accounts) credentials, the service account is automatically granted access to the app.

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

var apiInstance = new AloudinSunshineConversationsClient.AppsApi();
var appCreateBody = new AloudinSunshineConversationsClient.AppCreateBody(); // AppCreateBody | 
apiInstance.createApp(appCreateBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appCreateBody** | [**AppCreateBody**](AppCreateBody.md)|  | 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApp

> Object deleteApp(appId)

Delete App

Removes the specified app, including all its enabled integrations.

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

var apiInstance = new AloudinSunshineConversationsClient.AppsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
apiInstance.deleteApp(appId).then(function(data) {
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

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApp

> AppResponse getApp(appId)

Get App

Fetches an individual app.

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

var apiInstance = new AloudinSunshineConversationsClient.AppsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
apiInstance.getApp(appId).then(function(data) {
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

[**AppResponse**](AppResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApps

> AppListResponse listApps(opts)

List Apps

Lists all apps that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  &#x60;&#x60;&#x60;shell /v2/apps?page[after]&#x3D;5e1606762556d93e9c176f69&amp;page[size]&#x3D;10 &#x60;&#x60;&#x60; 

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

var apiInstance = new AloudinSunshineConversationsClient.AppsApi();
var opts = {
  'page': new AloudinSunshineConversationsClient.Page(), // Page | Contains parameters for applying cursor pagination.
  'filter': new AloudinSunshineConversationsClient.AppListFilter() // AppListFilter | Contains parameters for filtering the results.
};
apiInstance.listApps(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**Page**](.md)| Contains parameters for applying cursor pagination. | [optional] 
 **filter** | [**AppListFilter**](.md)| Contains parameters for filtering the results. | [optional] 

### Return type

[**AppListResponse**](AppListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApp

> AppResponse updateApp(appId, appUpdateBody)

Update App

Updates an app.

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

var apiInstance = new AloudinSunshineConversationsClient.AppsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var appUpdateBody = new AloudinSunshineConversationsClient.AppUpdateBody(); // AppUpdateBody | 
apiInstance.updateApp(appId, appUpdateBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **appUpdateBody** | [**AppUpdateBody**](AppUpdateBody.md)|  | 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

