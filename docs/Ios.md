# SunshineConversationsClient.Ios

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of integration. | [optional] [default to &#39;ios&#39;]
**certificate** | **String** | The binary of your APN certificate base64 encoded. | [optional] 
**password** | **String** | The password for your APN certificate. | [optional] 
**production** | **Boolean** | The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified. | [optional] 
**autoUpdateBadge** | **Boolean** | Use the unread count of the conversation as the application badge. | [optional] 
**canUserCreateMoreConversations** | **Boolean** | Allows users to create more than one conversation on the iOS integration. | [optional] 


