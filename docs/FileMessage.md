# SunshineConversationsClient.FileMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;file&#39;]
**mediaUrl** | **String** | The URL for media, such as an image, attached to the message. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Note that for private attachments an authorization header is required to access the mediaUrl. See &lt;a href&#x3D;\&quot;https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/messaging_private_attachments/\&quot;&gt;Configuring private attachments for messaging&lt;/a&gt; guide for more details.&lt;/aside&gt;  | 
**mediaSize** | **Number** | The size of the media. | [optional] [readonly] 
**mediaType** | **String** | The media type of the file. | [optional] [readonly] 
**altText** | **String** | An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value. | [optional] 
**text** | **String** | The text content of the message. | [optional] 
**attachmentId** | **String** | An identifier used by Sunshine Conversations for internal purposes. | [optional] 


