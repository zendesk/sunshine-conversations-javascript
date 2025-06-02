# SunshineConversationsClient.AppSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversationRetentionSeconds** | **Number** | Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/guide/creating-and-managing-apps/#conversation-retention-seconds) for more information.  | [optional] 
**maskCreditCardNumbers** | **Boolean** | A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations.  | [optional] 
**useAnimalNames** | **Boolean** | A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/receiving-messages/#message-author-name) for details.  | [optional] 
**echoPostback** | **Boolean** | A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/guide/creating-and-managing-apps/#echo-postbacks) for more information.  | [optional] 
**ignoreAutoConversationStart** | **Boolean** | A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Calling &lt;code&gt;startConversation()&lt;/code&gt; (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.&lt;/aside&gt;  | [optional] 
**multiConvoEnabled** | **Boolean** | A boolean specifying whether users are allowed to be part of several conversations. Enabling &#x60;multiConvo&#x60; is **irreversible**.  | [optional] 
**appLocalizationEnabled** | **Boolean** | A boolean specifying whether the messages authored by the Sunshine Conversations platform should be localized.  | [optional] 


