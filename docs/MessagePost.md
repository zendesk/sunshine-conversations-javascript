# SunshineConversationsClient.MessagePost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Author**](Author.md) | The author of the message. | 
**content** | [**Content**](Content.md) | The content of the message. | 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 
**override** | [**MessageOverride**](MessageOverride.md) |  | [optional] 
**schema** | **String** | When &#x60;schema&#x60; is set to &#x60;\&quot;whatsapp\&quot;&#x60;, the &#x60;content&#x60; key is expected to conform to the [native WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) for sending message templates. For more details, consult the documentation for [sending message templates on WhatsApp](https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/message-overrides/#template-messages).  | [optional] 


