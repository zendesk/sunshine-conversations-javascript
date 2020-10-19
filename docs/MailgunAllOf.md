# AloudinSunshineConversationsClient.MailgunAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of integration. | [optional] [default to &#39;mailgun&#39;]
**apiKey** | **String** | The public API key of your Mailgun account. | 
**domain** | **String** | The domain used to relay email. This domain must be configured and verified in your Mailgun account. | 
**incomingAddress** | **String** | Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address. | 
**hideUnsubscribeLink** | **Boolean** | A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails. | [optional] 
**fromAddress** | **String** | Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null. | [optional] 


