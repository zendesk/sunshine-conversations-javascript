# AloudinSunshineConversationsClient.MessagePost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Author**](Author.md) | The author of the message. | 
**content** | [**Content**](Content.md) | The content of the message. | 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**metadata** | [**Object**](.md) | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 
**override** | [**MessageOverride**](MessageOverride.md) |  | [optional] 
**messageSchema** | **String** | Send WhatsApp Message Templates using \&quot;whatsapp\&quot;, while populating the message key using the native [WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates). When the &#x60;messageSchema&#x60; is specified, the message is automatically converted to the Sunshine Conversations schema to be stored in the conversation record. The Sunshine Conversations message schema is also used in the API response. Go to [Post Message API](https://docs.smooch.io/guide/whatsapp/#post-message-api) to view an example.  | [optional] 


