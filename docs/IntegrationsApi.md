# SunshineConversationsClient.IntegrationsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIntegration**](IntegrationsApi.md#createIntegration) | **POST** /v2/apps/{appId}/integrations | Create Integration
[**deleteIntegration**](IntegrationsApi.md#deleteIntegration) | **DELETE** /v2/apps/{appId}/integrations/{integrationId} | Delete Integration
[**getIntegration**](IntegrationsApi.md#getIntegration) | **GET** /v2/apps/{appId}/integrations/{integrationId} | Get Integration
[**listIntegrations**](IntegrationsApi.md#listIntegrations) | **GET** /v2/apps/{appId}/integrations | List Integrations
[**updateIntegration**](IntegrationsApi.md#updateIntegration) | **PATCH** /v2/apps/{appId}/integrations/{integrationId} | Update Integration



## createIntegration

> IntegrationResponse createIntegration(appId, integration)

Create Integration

The Create Integration endpoint allows you to provision apps with front-end messaging channels. Selecting a &#x60;custom&#x60; integration allows the creation of webhooks.

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

var apiInstance = new SunshineConversationsClient.IntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var integration = new SunshineConversationsClient.Integration(); // Integration | 
apiInstance.createIntegration(appId, integration).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **integration** | [**Integration**](Integration.md)|  | 

### Return type

[**IntegrationResponse**](IntegrationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegration

> Object deleteIntegration(appId, integrationId)

Delete Integration

Delete the specified integration.

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

var apiInstance = new SunshineConversationsClient.IntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var integrationId = ""029c31f25a21b47effd7be90""; // String | The id of the integration.
apiInstance.deleteIntegration(appId, integrationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **integrationId** | **String**| The id of the integration. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegration

> IntegrationResponse getIntegration(appId, integrationId)

Get Integration

Get integration.

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

var apiInstance = new SunshineConversationsClient.IntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var integrationId = ""029c31f25a21b47effd7be90""; // String | The id of the integration.
apiInstance.getIntegration(appId, integrationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **integrationId** | **String**| The id of the integration. | 

### Return type

[**IntegrationResponse**](IntegrationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listIntegrations

> IntegrationListResponse listIntegrations(appId, opts)

List Integrations

List available integrations. This API is paginated through [cursor pagination](#section/Introduction/API-Pagination-and-Records-Limits). &#x60;&#x60;&#x60;shell /v2/apps/:appId/integrations?page[after]&#x3D;5e1606762556d93e9c176f69&amp;page[size]&#x3D;10&amp;filter[types]&#x3D;custom,web &#x60;&#x60;&#x60; 

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

var apiInstance = new SunshineConversationsClient.IntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var opts = {
  'page': new SunshineConversationsClient.Page(), // Page | Contains parameters for applying cursor pagination.
  'filter': new SunshineConversationsClient.IntegrationListFilter() // IntegrationListFilter | Contains parameters for filtering the results.
};
apiInstance.listIntegrations(appId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **page** | [**Page**](.md)| Contains parameters for applying cursor pagination. | [optional] 
 **filter** | [**IntegrationListFilter**](.md)| Contains parameters for filtering the results. | [optional] 

### Return type

[**IntegrationListResponse**](IntegrationListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIntegration

> IntegrationResponse updateIntegration(appId, integrationId, integrationUpdate)

Update Integration

Allows you to update certain fields of existing integrations. If updating a specific property is not supported, you must delete the integration and re-create it with the new data.

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

var apiInstance = new SunshineConversationsClient.IntegrationsApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var integrationId = ""029c31f25a21b47effd7be90""; // String | The id of the integration.
var integrationUpdate = {"displayName":"My Test Integration"}; // IntegrationUpdate | 
apiInstance.updateIntegration(appId, integrationId, integrationUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **integrationId** | **String**| The id of the integration. | 
 **integrationUpdate** | [**IntegrationUpdate**](IntegrationUpdate.md)|  | 

### Return type

[**IntegrationResponse**](IntegrationResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

