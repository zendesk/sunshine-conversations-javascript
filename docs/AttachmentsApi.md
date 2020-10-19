# AloudinSunshineConversationsClient.AttachmentsApi

All URIs are relative to *https://api.smooch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAttachment**](AttachmentsApi.md#deleteAttachment) | **POST** /v2/apps/{appId}/attachments/remove | Delete Attachment
[**generateMediaJsonWebToken**](AttachmentsApi.md#generateMediaJsonWebToken) | **POST** /v2/apps/{appId}/attachments/token | Generate Media Token
[**setCookie**](AttachmentsApi.md#setCookie) | **POST** /v2/apps/{appId}/attachments/cookie | Set Cookie
[**uploadAttachment**](AttachmentsApi.md#uploadAttachment) | **POST** /v2/apps/{appId}/attachments | Upload Attachment



## deleteAttachment

> Object deleteAttachment(appId, attachmentDeleteBody)

Delete Attachment

Remove an attachment uploaded to Sunshine Conversations through the Upload attachment API. See [Attachments for Messages](#section/Attachments-for-Messages) to have attachments automatically deleted when deleting messages, conversations or users. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Note that deleted attachments can remain available on our CDN’s cache up to 15 minutes after the delete call.&lt;/aside&gt; 

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

var apiInstance = new AloudinSunshineConversationsClient.AttachmentsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var attachmentDeleteBody = new AloudinSunshineConversationsClient.AttachmentDeleteBody(); // AttachmentDeleteBody | 
apiInstance.deleteAttachment(appId, attachmentDeleteBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **attachmentDeleteBody** | [**AttachmentDeleteBody**](AttachmentDeleteBody.md)|  | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateMediaJsonWebToken

> AttachmentMediaTokenResponse generateMediaJsonWebToken(appId, attachmentMediaTokenBody)

Generate Media Token

Generates a media JWT for a list of attachment paths. This media token is a prerequisite for setting the cookie needed to visualize a private attachment. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Note you have the ability to allow files using different rules, see &lt;a href&#x3D;\&quot;https://docs.smooch.io/guide/private-attachments\&quot;&gt;Private Attachments&lt;/a&gt; for more details.&lt;/aside&gt; 

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

var apiInstance = new AloudinSunshineConversationsClient.AttachmentsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var attachmentMediaTokenBody = new AloudinSunshineConversationsClient.AttachmentMediaTokenBody(); // AttachmentMediaTokenBody | 
apiInstance.generateMediaJsonWebToken(appId, attachmentMediaTokenBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **attachmentMediaTokenBody** | [**AttachmentMediaTokenBody**](AttachmentMediaTokenBody.md)|  | 

### Return type

[**AttachmentMediaTokenResponse**](AttachmentMediaTokenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCookie

> Object setCookie(appId)

Set Cookie

With the media JWT retrieved, pass it in the header of the below request as it’s authorization in order to set a cookie in the user’s browser corresponding to the path within the media JWT. The expiration date of this cookie will match the expiration date of the media JWT. This cookie will be needed to visualize a private attachment. 

### Example

```javascript
var AloudinSunshineConversationsClient = require('aloudin-sunshine-conversations-client');
var defaultClient = AloudinSunshineConversationsClient.ApiClient.instance;

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

var apiInstance = new AloudinSunshineConversationsClient.AttachmentsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
apiInstance.setCookie(appId).then(function(data) {
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

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadAttachment

> AttachmentResponse uploadAttachment(appId, access, source, opts)

Upload Attachment

Upload an attachment to Sunshine Conversations to use in future messages. Files are uploaded using the multipart/form-data content type. Use the returned mediaUrl to send a file, image or carousel message. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Note that Sunshine Conversations limits the size and type of file you can upload to the platform. See the &lt;a href&#x3D;\&quot;https://docs.smooch.io/guide/validating-files\&quot;&gt;file validation&lt;/a&gt; guide for more details.&lt;/aside&gt; 

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

var apiInstance = new AloudinSunshineConversationsClient.AttachmentsApi();
var appId = "5d8cff3cd55b040010928b5b"; // String | Identifies the app.
var access = "public"; // String | The access level for the attachment. Currently the available access levels are public and private.
var source = "/path/to/file"; // File | 
var opts = {
  '_for': message, // String | Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details.
  'conversationId': c616a583e4c240a871818541 // String | Links the attachment getting uploaded to the conversation ID.
};
apiInstance.uploadAttachment(appId, access, source, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Identifies the app. | 
 **access** | **String**| The access level for the attachment. Currently the available access levels are public and private. | [default to &#39;public&#39;]
 **source** | **File**|  | 
 **_for** | **String**| Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details. | [optional] 
 **conversationId** | **String**| Links the attachment getting uploaded to the conversation ID. | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

