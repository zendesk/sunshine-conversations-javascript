# SunshineConversationsClient.Ios

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/).  | [optional] [default to &#39;ios&#39;]
**certificate** | **String** | The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: &#x60;openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d &#39;\\n&#39;&#x60;  | [optional] 
**password** | **String** | The password for your APN certificate. | [optional] 
**production** | **Boolean** | The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified. | [optional] 
**autoUpdateBadge** | **Boolean** | Use the unread count of the conversation as the application badge. | [optional] 
**canUserCreateMoreConversations** | **Boolean** | Allows users to create more than one conversation on the iOS integration. | [optional] 


