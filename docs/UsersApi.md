# SunshineConversationsClient.UsersApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /v2/apps/{appId}/users | Create User
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId} | Delete User
[**deleteUserPersonalInformation**](UsersApi.md#deleteUserPersonalInformation) | **DELETE** /v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation | Delete User Personal Information
[**getUser**](UsersApi.md#getUser) | **GET** /v2/apps/{appId}/users/{userIdOrExternalId} | Get User
[**syncUser**](UsersApi.md#syncUser) | **POST** /v2/apps/{appId}/users/{zendeskId}/sync | Synchronize User
[**updateUser**](UsersApi.md#updateUser) | **PATCH** /v2/apps/{appId}/users/{userIdOrExternalId} | Update User



## createUser

> UserResponse createUser(appId, userCreateBody)

Create User

Creates a new user.

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var userCreateBody = new SunshineConversationsClient.UserCreateBody(); // UserCreateBody | 
apiInstance.createUser(appId, userCreateBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **userCreateBody** | [**UserCreateBody**](UserCreateBody.md)|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> Object deleteUser(appId, userIdOrExternalId)

Delete User

Delete a user, its clients and its conversation history. The user is considered completely deleted once the &#x60;user:delete&#x60; webhook is fired. To only delete a user’s personal information, see [Delete User Personal Information](#operation/DeleteUserPersonalInformation).

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var userIdOrExternalId = ""42589ad070d43be9b00ff7e5""; // String | The user's id or externalId.
apiInstance.deleteUser(appId, userIdOrExternalId).then(function(data) {
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

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserPersonalInformation

> UserResponse deleteUserPersonalInformation(appId, userIdOrExternalId)

Delete User Personal Information

Delete a user’s personal information. Calling this API will clear &#x60;givenName&#x60;, &#x60;surname&#x60;, &#x60;email&#x60; and &#x60;avatarUrl&#x60; and every custom property for the specified user. For every client owned by the user, it will also clear &#x60;displayName&#x60;, &#x60;avatarUrl&#x60; and any channel specific information stored in the info and raw fields. Calling this API doesn’t delete the user’s conversation history. To fully delete the user, see [Delete User](#operation/DeleteUser).

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var userIdOrExternalId = ""42589ad070d43be9b00ff7e5""; // String | The user's id or externalId.
apiInstance.deleteUserPersonalInformation(appId, userIdOrExternalId).then(function(data) {
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

[**UserResponse**](UserResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> UserResponse getUser(appId, userIdOrExternalId)

Get User

Fetches an individual user.

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var userIdOrExternalId = ""42589ad070d43be9b00ff7e5""; // String | The user's id or externalId.
apiInstance.getUser(appId, userIdOrExternalId).then(function(data) {
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

[**UserResponse**](UserResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## syncUser

> UserResponse syncUser(appId, zendeskId, opts)

Synchronize User

Synchronize a messaging user with its core Zendesk user counterpart. Messaging users are separate objects linked to a core Zendesk user record by &#x60;zendeskId&#x60;. It is possible for changes to be made to the core Zendesk user record in a way that causes the messaging user to fall out of sync. The core Zendesk user might have their primary email changed, for example. This endpoint can be used to update the messaging user with the &#x60;profile.givenName&#x60;, &#x60;profile.surname&#x60;, &#x60;externalId&#x60;, and primary email identity of its core Zendesk user counterpart.&lt;br/&gt;&lt;br/&gt;It is also possible for two Zendesk users to be merged. In such a case, this API can be used to apply that merger on the messaging side. The surviving Zendesk user id can be specified via the &#x60;survivingZendeskId&#x60; parameter of the request body, and the outgoing &#x60;zendeskId&#x60; is specified in the request path. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Only the primary email identity of the core Zendesk user will be synchronized, and it will be set on the identities array, not in the profile.&lt;/aside&gt; &lt;br/&gt; &lt;aside class&#x3D;\&quot;notice\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; In some circumstances, a single call to this API might produce changes on more than one messaging user. If the externalId or email being synchronized already exists on a different messaging user within the account, the conflict will be resolved by merging those messaging users together, if possible. If a conflicting messaging user is already linked to a core Zendesk user by zendeskId it cannot be merged. In this case, the conflicting externalId or email will instead be removed and reassigned to the messaging user that is being synchronized.&lt;/aside&gt;

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var zendeskId = ""35436""; // String | The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API. 
var opts = {
  'syncUserBody': new SunshineConversationsClient.SyncUserBody() // SyncUserBody | 
};
apiInstance.syncUser(appId, zendeskId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **zendeskId** | **String**| The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API.  | 
 **syncUserBody** | [**SyncUserBody**](SyncUserBody.md)|  | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> UserResponse updateUser(appId, userIdOrExternalId, userUpdateBody)

Update User

Updates a user.

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

var apiInstance = new SunshineConversationsClient.UsersApi();
var appId = ""5d8cff3cd55b040010928b5b""; // String | Identifies the app.
var userIdOrExternalId = ""42589ad070d43be9b00ff7e5""; // String | The user's id or externalId.
var userUpdateBody = new SunshineConversationsClient.UserUpdateBody(); // UserUpdateBody | 
apiInstance.updateUser(appId, userIdOrExternalId, userUpdateBody).then(function(data) {
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
 **userUpdateBody** | [**UserUpdateBody**](UserUpdateBody.md)|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

