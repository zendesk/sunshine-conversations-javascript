# SunshineConversationsClient.Android

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the &#x60;serverKey&#x60; and &#x60;senderId&#x60; from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM &#x60;serverKey&#x60; you can also obtain it from the [Google Developer Console](https://console.developers.google.com/).  | [optional] [default to &#39;android&#39;]
**serverKey** | **String** | Your server key from the fcm console. | [optional] 
**senderId** | **String** | Your sender id from the fcm console. | [optional] 
**canUserCreateMoreConversations** | **Boolean** | Allows users to create more than one conversation on the android integration. | [optional] 


