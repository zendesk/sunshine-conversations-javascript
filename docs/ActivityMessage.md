# SunshineConversationsClient.ActivityMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each &#x60;type&#x60; value will have a set of pre-defined, localized strings that describe the activity. | [default to &#39;ticket:closed&#39;]
**data** | **{String: Object}** | No additional data is supplied with the \&quot;ticket:transfer:email\&quot; activity type at this time. | [optional] 



## Enum: TypeEnum


* `ticket:closed` (value: `"ticket:closed"`)

* `ticket:transfer:email` (value: `"ticket:transfer:email"`)




