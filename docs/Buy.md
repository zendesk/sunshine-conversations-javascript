# SunshineConversationsClient.Buy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of action. | [default to &#39;buy&#39;]
**text** | **String** | The button text. | 
**amount** | **Number** | The amount being charged. It needs to be specified in cents and is an integer (9.99$ -&gt; 999). | 
**currency** | **String** | An ISO 4217 standard currency code in lowercase. Used for actions of type buy. | [optional] 
**metadata** | **{String: Object}** | Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.  | [optional] 


