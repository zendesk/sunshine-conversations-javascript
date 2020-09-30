# SunshineConversationsClient.IosUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** | A human-friendly name used to identify the integration. &#x60;displayName&#x60; can be unset by changing it to &#x60;null&#x60;. | [optional] 
**certificate** | **String** | The binary of your APN certificate base64 encoded. | [optional] 
**password** | **String** | The password for your APN certificate. | [optional] 
**production** | **Boolean** | The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified. | [optional] 
**autoUpdateBadge** | **Boolean** | Use the unread count of the conversation as the application badge. | [optional] 
**canUserCreateConversation** | **Boolean** | Allows users to create more than one conversation on the iOS integration. | [optional] 


