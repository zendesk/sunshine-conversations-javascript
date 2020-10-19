# AloudinSunshineConversationsClient.CarouselMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of message. | [default to &#39;carousel&#39;]
**text** | **String** | The fallback text message used when carousel messages are not supported by the channel. | [optional] [readonly] 
**items** | [**[Item]**](Item.md) | An array of objects representing the items associated with the message. Only present in carousel and list type messages. | 
**displaySettings** | [**CarouselMessageDisplaySettings**](CarouselMessageDisplaySettings.md) |  | [optional] 


