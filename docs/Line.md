# SunshineConversationsClient.Line

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: &#x60;https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}&#x60;.  | [optional] [default to &#39;line&#39;]
**channelId** | **String** | LINE Channel ID. Can be omitted along with &#x60;channelSecret&#x60; to integrate LINE to setup a webhook before receiving the &#x60;channelId&#x60; and &#x60;channelSecret&#x60; back from LINE. | [optional] 
**channelSecret** | **String** | LINE Channel Secret. Can be omitted along with &#x60;channelId&#x60; to integrate LINE to setup a webhook before receiving the &#x60;channelId&#x60; and &#x60;channelSecret&#x60; back from LINE. | [optional] 
**channelAccessToken** | **String** | LINE Channel Access Token. | [optional] 
**serviceCode** | **String** | LINE Service Code. | [optional] 
**switcherSecret** | **String** | LINE Switcher Secret. | [optional] 
**qrCodeUrl** | **String** | URL provided by LINE in the [Developer Console](https://developers.line.biz/console/). | [optional] 
**lineId** | **String** | LINE Basic ID. Is automatically set when qrCodeUrl is updated. | [optional] [readonly] 


