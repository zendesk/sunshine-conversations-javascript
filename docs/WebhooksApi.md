# AloudinSunshineConversationsClient.WebhooksApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhooksApi.md#createWebhook) | **POST** /v2/apps/{appId}/integrations/{integrationId}/webhooks | Create Webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Delete Webhook
[**getWebhook**](WebhooksApi.md#getWebhook) | **GET** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Get Webhook
[**listWebhooks**](WebhooksApi.md#listWebhooks) | **GET** /v2/apps/{appId}/integrations/{integrationId}/webhooks | List Webhooks
[**updateWebhook**](WebhooksApi.md#updateWebhook) | **PATCH** /v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId} | Update Webhook



## createWebhook

> WebhookResponse createWebhook(appId, integrationId, webhookCreateBody)

Create Webhook

Creates a new webhook associated with a Sunshine Conversations Connect integration or a custom integration.

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

var apiInstance = new AloudinSunshineConversationsClient.WebhooksApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var webhookCreateBody = new AloudinSunshineConversationsClient.WebhookCreateBody(); // WebhookCreateBody | 
apiInstance.createWebhook(appId, integrationId, webhookCreateBody).then(function(data) {
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
 **webhookCreateBody** | [**WebhookCreateBody**](WebhookCreateBody.md)|  | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhook

> Object deleteWebhook(appId, integrationId, webhookId)

Delete Webhook

Deletes the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.

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

var apiInstance = new AloudinSunshineConversationsClient.WebhooksApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var webhookId = "029c31f25a21b47effd7be90"; // String | The id of the webhook.
apiInstance.deleteWebhook(appId, integrationId, webhookId).then(function(data) {
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
 **webhookId** | **String**| The id of the webhook. | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhook

> WebhookResponse getWebhook(appId, integrationId, webhookId)

Get Webhook

Gets the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.

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

var apiInstance = new AloudinSunshineConversationsClient.WebhooksApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var webhookId = "029c31f25a21b47effd7be90"; // String | The id of the webhook.
apiInstance.getWebhook(appId, integrationId, webhookId).then(function(data) {
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
 **webhookId** | **String**| The id of the webhook. | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooks

> WebhookListResponse listWebhooks(appId, integrationId)

List Webhooks

Lists all webhooks for a given Sunshine Conversations Connect integration or custom integration.

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

var apiInstance = new AloudinSunshineConversationsClient.WebhooksApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
apiInstance.listWebhooks(appId, integrationId).then(function(data) {
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

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> WebhookResponse updateWebhook(appId, integrationId, webhookId, webhookBody)

Update Webhook

Updates the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.

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

var apiInstance = new AloudinSunshineConversationsClient.WebhooksApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var integrationId = "029c31f25a21b47effd7be90"; // String | The id of the integration.
var webhookId = "029c31f25a21b47effd7be90"; // String | The id of the webhook.
var webhookBody = new AloudinSunshineConversationsClient.WebhookBody(); // WebhookBody | 
apiInstance.updateWebhook(appId, integrationId, webhookId, webhookBody).then(function(data) {
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
 **webhookId** | **String**| The id of the webhook. | 
 **webhookBody** | [**WebhookBody**](WebhookBody.md)|  | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

