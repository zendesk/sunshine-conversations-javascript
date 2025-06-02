# SunshineConversationsClient.IntegrationUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **String** | A human-friendly name used to identify the integration. &#x60;displayName&#x60; can be unset by changing it to &#x60;null&#x60;. | [optional] 
**defaultResponderId** | **String** | The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the &lt;a href&#x3D;\&quot;https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\&quot;&gt;Switchboard guide&lt;/a&gt;.  | [optional] 
**projectId** | **String** | Your project ID from your generated private key file. | [optional] 
**clientEmail** | **String** | Your client email from your generated private key file. | [optional] 
**privateKey** | **String** | Your private key from your generated private key file. | [optional] 
**serverKey** | **String** | Your server key from the fcm console. | [optional] 
**senderId** | **String** | Your sender id from the fcm console. | [optional] 
**canUserSeeConversationList** | **Boolean** | Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where &#x60;settings.multiConvoEnabled&#x60; is set to &#x60;true&#x60;*.  | [optional] 
**canUserCreateMoreConversations** | **Boolean** | Allows users to create more than one conversation on the web messenger integration. | [optional] 
**authenticationMessageSecret** | **String** | A secret used to create the state value when sending Apple authentication 2.0 messages | [optional] 
**pageAccessToken** | **String** | A Facebook Page Access Token. | [optional] 
**certificate** | **String** | The binary of your APN certificate base64 encoded. | [optional] 
**password** | **String** | The password for your APN certificate. | [optional] 
**production** | **Boolean** | The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified. | [optional] 
**autoUpdateBadge** | **Boolean** | Use the unread count of the conversation as the application badge. | [optional] 
**hideUnsubscribeLink** | **Boolean** | A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails. | [optional] 
**fromAddress** | **String** | Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null. | [optional] 
**brandColor** | **String** | This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color. | [optional] [default to &#39;65758e&#39;]
**fixedIntroPane** | **Boolean** | When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it. | [optional] [default to false]
**conversationColor** | **String** | This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color. | [optional] [default to &#39;0099ff&#39;]
**actionColor** | **String** | This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color. | [optional] [default to &#39;0099ff&#39;]
**displayStyle** | **String** | Choose how the messenger will appear on your website. Must be either button or tab. | [optional] [default to &#39;button&#39;]
**buttonIconUrl** | **String** | With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format. | [optional] 
**buttonWidth** | **String** | With the button style Web Messenger, you have the option of specifying the button width. | [optional] [default to &#39;58&#39;]
**buttonHeight** | **String** | With the button style Web Messenger, you have the option of specifying the button height. | [optional] [default to &#39;58&#39;]
**integrationOrder** | **[String]** | Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed. | [optional] 
**businessName** | **String** | A custom business name for the Web Messenger. | [optional] 
**businessIconUrl** | **String** | A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format. | [optional] 
**backgroundImageUrl** | **String** | A background image url for the conversation. Image will be tiled to fit the window. | [optional] 
**originWhitelist** | **[String]** | A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \&quot;://\&quot; host [ \&quot;:\&quot; port ], where scheme is http or https.  | [optional] 
**prechatCapture** | [**PrechatCapture**](PrechatCapture.md) | Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture. | [optional] 
**hsmFallbackLanguage** | **String** | Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info. | [optional] [default to &#39;en_US&#39;]
**accountId** | **String** | The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction. | [optional] 
**accountManagementAccessToken** | **String** | An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction. | [optional] 


