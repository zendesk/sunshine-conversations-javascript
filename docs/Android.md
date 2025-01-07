# SunshineConversationsClient.Android

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials &lt;code&gt;serverKey&lt;/code&gt; and &lt;code&gt;senderId&lt;/code&gt; will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.&lt;/aside&gt;  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the &#x60;project_id&#x60;, &#x60;client_email&#x60; and &#x60;private_key&#x60; from the generated JSON file and call the create integrations endpoint with this data.  | [optional] [default to &#39;android&#39;]
**projectId** | **String** | Your project ID from your generated private key file. | [optional] 
**clientEmail** | **String** | Your client email from your generated private key file. | [optional] 
**privateKey** | **String** | Your private key from your generated private key file. | [optional] 
**serverKey** | **String** | Your server key from the fcm console. | [optional] 
**senderId** | **String** | Your sender id from the fcm console. | [optional] 
**canUserCreateMoreConversations** | **Boolean** | Allows users to create more than one conversation on the android integration. | [optional] 
**attachmentsEnabled** | **Boolean** | Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center.  | [optional] [readonly] 
**defaultResponderId** | **String** | The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to &lt;a href&#x3D;\&quot;https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\&quot;&gt;Per-channel default responder&lt;/a&gt; guide.  | [optional] 
**defaultResponder** | [**DefaultResponderDefaultResponder**](DefaultResponderDefaultResponder.md) |  | [optional] 


