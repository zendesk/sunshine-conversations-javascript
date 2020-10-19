# AloudinSunshineConversationsClient.CustomIntegrationApiKeysApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomIntegrationKey**](CustomIntegrationApiKeysApi.md#createCustomIntegrationKey) | **POST** /v2/apps/{appId}/integrations/{integrationId}/keys | Create Integration Key
[**deleteCustomIntegrationKey**](CustomIntegrationApiKeysApi.md#deleteCustomIntegrationKey) | **DELETE** /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} | Delete Integration Key
[**getCustomIntegrationKey**](CustomIntegrationApiKeysApi.md#getCustomIntegrationKey) | **GET** /v2/apps/{appId}/integrations/{integrationId}/keys/{keyId} | Get Integration Key
[**listCustomIntegrationKeys**](CustomIntegrationApiKeysApi.md#listCustomIntegrationKeys) | **GET** /v2/apps/{appId}/integrations/{integrationId}/keys | List Integration Keys



## createCustomIntegrationKey

> IntegrationApiKeyResponse createCustomIntegrationKey(appId, integrationId, integrationApiKey)

Create Integration Key

Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.

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

var apiInstance = new AloudinSunshineConversationsClient.CustomIntegrationApiKeysApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var integrationApiKey = new AloudinSunshineConversationsClient.IntegrationApiKey(); // IntegrationApiKey | 
apiInstance.createCustomIntegrationKey(appId, integrationId, integrationApiKey).then(function(data) {
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
 **integrationApiKey** | [**IntegrationApiKey**](IntegrationApiKey.md)|  | 

### Return type

[**IntegrationApiKeyResponse**](IntegrationApiKeyResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomIntegrationKey

> Object deleteCustomIntegrationKey(appId, integrationId, keyId)

Delete Integration Key

Removes an API key.

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

var apiInstance = new AloudinSunshineConversationsClient.CustomIntegrationApiKeysApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var keyId = "int_5d8cff3cd55b040010928b5b"; // String | The id of the key.
apiInstance.deleteCustomIntegrationKey(appId, integrationId, keyId).then(function(data) {
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
 **keyId** | **String**| The id of the key. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomIntegrationKey

> IntegrationApiKeyResponse getCustomIntegrationKey(appId, integrationId, keyId)

Get Integration Key

Get the specified API key.

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

var apiInstance = new AloudinSunshineConversationsClient.CustomIntegrationApiKeysApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var keyId = "int_5d8cff3cd55b040010928b5b"; // String | The id of the key.
apiInstance.getCustomIntegrationKey(appId, integrationId, keyId).then(function(data) {
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
 **keyId** | **String**| The id of the key. | 

### Return type

[**IntegrationApiKeyResponse**](IntegrationApiKeyResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCustomIntegrationKeys

> IntegrationApiKeyListResponse listCustomIntegrationKeys(appId, integrationId)

List Integration Keys

Lists all API keys for a given integration.

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

var apiInstance = new AloudinSunshineConversationsClient.CustomIntegrationApiKeysApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
apiInstance.listCustomIntegrationKeys(appId, integrationId).then(function(data) {
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

[**IntegrationApiKeyListResponse**](IntegrationApiKeyListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

