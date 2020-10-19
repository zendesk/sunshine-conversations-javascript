/**
 * Sunshine Conversations API
 * # Introduction  <aside class=\"notice\">As a stepping stone to new and greater things, we’ve updated Sunshine Conversations API to v2. For users wanting to access v1, please proceed <a href=\"https://docs.smooch.io/rest/v1\">here</a>.  </aside>  Welcome to the Sunshine Conversations API. The API allows you to craft entirely unique messaging experiences for your app and website as well as talk to any backend or external service.  The Sunshine Conversations API is designed according to REST principles. The API accepts JSON in request bodies and requires that the content-type: application/json header be specified for all such requests. The API will always respond with an object. Depending on context, resources may be returned as single objects or as arrays of objects, nested within the response object.  In some cases, the API will also facilitate cross-origin resource sharing so that it can be called from a web application.  <aside class=\"notice\">Note that for authenticated requests, cross-origin resource sharing is only available to appUser scoped credentials. Attempting to call the API from the browser using  app or account scoped credentials will result in a <a href=\"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy\">same-origin policy</a> browser error. For more information, refer  to the <a href=\"http://docs.smooch.io/guide/authorization/#handle-credentials-with-caution\">Authorization guide</a>.</aside>  ## Regions  Sunshine Conversations is available in the following regions. Each Sunshine Conversations region has its own API host.  | Region         | Host                       | | -------------- | -------------------------- | | United States  | https://api.smooch.io      | | European Union | https://api.eu-1.smooch.io |  For more information on regions, visit [the guide](/guide/regions/).  <aside class=\"notice\">When configuring an API host, make sure to always use `https`. Some API clients can have unexpected behaviour when following redirects from `http` to `https`.</aside>  ## Errors  Sunshine Conversations uses standard HTTP status codes to communicate errors. In general, a `2xx` status code indicates success while `4xx` indicates an error, in which case, the response body includes a JSON object which includes an array of errors, with a text `code` and `title` containing more details. Multiple errors can only be included in a `400 Bad Request`. A `5xx` status code indicates that something went wrong on our end.  ```javascript {    \"errors\":  [     {         \"code\": \"unauthorized\",         \"title\": \"Authorization is required\"     }    ] } ```  ## API Version  The latest version of the API is v2. Version v1.1 is still supported and you can continue using it but we encourage you to upgrade to the latest version. To learn more about API versioning at Sunshine Conversations, including instructions on how to upgrade to the latest version, [visit our docs](https://docs.smooch.io/guide/versioning).  ## API Pagination and Records Limits  Some APIs can be paginated by providing the `offset` query string parameter.  The `offset` is the number of initial records to skip before picking records to return (default 0).  The `limit` query string can also be provided to change the number of records to return (maximum 100, default 25).  All paginated endpoints will eventually support cursor pagination and `offset` based pagination support will be dropped.  ### Cursor Pagination  Some APIs are paginated through cursor pagination. Rather than providing an `offset`, a `page[after]` or `page[before]` query string parameter may be provided. `page[after]` and `page[before]` are cursors pointing to a record id.  The `page[after]` cursor indicates that only records **subsequent** to it should be returned.  The `page[before]` cursor indicates that only records **preceding** it should be returned.  **Only one** of `page[after]` or `page[before]` may be provided in a query, not both.  In cursor pagination, the equivalent to the `limit` query string is the `page[size]` query string parameter.  ## API Libraries  Sunshine Conversations provides an official API library for [Java](https://github.com/zendesk/sunshine-conversations-java), with more languages to come. These helpful libraries wrap calls to the API and can make interfacing with Sunshine Conversations easier.  ## Postman Collection  <a style=\"display:inline-block;background:url(https://run.pstmn.io/button.svg);height:30px;width: 123px;\" href=\"https://app.getpostman.com/run-collection/0c7cc8fc66039065d20f\"></a>  In addition to API libraries, Sunshine Conversations also has a Postman collection that can be used for development or testing purposes. See the [guide](https://docs.smooch.io/guide/postman-collection/) for information on how to install and use the collection in your Postman client.  ## Rate Limits  Sunshine Conversations APIs are subject to rate limiting. If the rate limit is exceeded Sunshine Conversations may return a `429 Too Many Requests` HTTP status code. We apply rate limits to prevent abuse, spam, denial-of-service attacks, and similar issues. Our goal is to keep the limits high enough so that any application using Sunshine Conversations as intended will not encounter them. However usage spikes do occur and encountering a rate limit may be unavoidable. In order to avoid production outages, when calling the Sunshine Conversations API you should implement `429` retry logic using exponential backoff and jitter.  If your use case involves making API calls in bulk, please [contact us](https://smooch.io/contact).  ## Request Size Limits  The Sunshine Conversations API imposes the following size limits on HTTP requests:  | Request Type | Limit | | ------------ | ----- | | JSON         | 100kb | | File upload  | 50mb  |  ## Authorization  This is an overview of how authorization works with the Sunshine Conversations API. Sunshine Conversations allows basic authentication or JSON Web Tokens (JWTs) as authentication methods for server-to-server calls. [See below](#authentication) for more details. There are two different authorization scopes available - app and account.  | Scope   | Authorized Methods                       | | ------- | ---------------------------------------- | | app     | All methods besides Account Provisioning | | account | All methods                              |  The app scope can be used to access any of the Sunshine Conversations APIs, besides account provisioning methods, on behalf of a single app, or any app user related to that app. The account scope can be used to access any of the Sunshine Conversations and Account Provisioning APIs on behalf of the account owner, any app belonging to the account, or any app user related to those apps.  <aside class=\"notice\">An additional scope of `appUser` can also be used to authenticate users when using one of the Sunshine Conversations native SDK integrations. For information on how and when to use this scope, see the guide for <a href=\"https://docs.smooch.io/guide/authenticating-users/\">authenticating users.</a></aside>  ## Authentication  To authenticate requests to the API, you will need an API key, composed of a key id and a secret. For an overview of how authentication works in Sunshine Conversations and instructions on how to generate an API key, see the guide. API requests can be authenticated in two ways:  - With Basic authentication you can make requests using an API key directly. - With JSON Web Tokens (JWTs) you sign tokens with an API key, which are then used to authenticate with the API. See [When to Use JWTs?](https://docs.smooch.io/guide/jwt/#when-to-use-jwts) to learn if JWTs are relevant for your usage. - Before using an API key in production, make sure to familiarize yourself with best practices on how to [securely handle credentials](https://docs.smooch.io/guide/authentication-secure-credential-handling/).  ### Basic Authentication  API requests can be authenticated with [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) using an API key. The key id is used as the username and the secret as the password. The scope of access is determined by the owner of the API key. See the [guide](https://docs.smooch.io/guide/basic-authentication/#scope-of-access) for more details.  ### JWTs  JSON Web Tokens (JWTs) are an industry standard authentication method. The full specification is described [here](https://tools.ietf.org/html/rfc7519), and a set of supported JWT libraries for a variety of languages and platforms can be found at http://jwt.io. To summarize, a JWT is composed of a header, a payload, and a signature. The payload contains information called claims which describe the subject to whom the token was issued. The JWT itself is transmitted via the HTTP `authorization` header. The token should be prefixed with “Bearer” followed by a space. For example: `Bearer your-jwt`. To generate a JWT, you need an API key, which is composed of a key ID and a secret. The key ID is included in a JWT’s header, as the `kid` property, while the secret is used to sign the JWT. For more in-depth coverage, see the [guide](https://docs.smooch.io/guide/jwt).  #### Header  The JWT header must contain the key id (kid) of the API key that is used to sign it. The algorithm (alg) used should be HS256. Unsigned JWTs are not accepted.  ```javascript {     \"alg\": \"HS256\",     \"typ\": \"JWT\",     \"kid\": \"act_5963ceb97cde542d000dbdb1\" } ```  #### Payload  The JWT payload must include a scope claim which specifies the caller’s scope of access.  - account-scoped JWTs must be generated with an API key associated with a Sunshine Conversations account (act*) or service account (svc*).  ```javascript {     \"scope\": \"account\" } ```  - app-scoped JWTs can be generated with an API key associated with an app (app\\_).  ```javascript {    \"scope\": \"app\" } ``` 
 *
 * The version of the OpenAPI document: 9.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AcceptControlBody from './sunshine-conversations-client.model/AcceptControlBody';
import Action from './sunshine-conversations-client.model/Action';
import ActionSubset from './sunshine-conversations-client.model/ActionSubset';
import Activity from './sunshine-conversations-client.model/Activity';
import ActivityAllOf from './sunshine-conversations-client.model/ActivityAllOf';
import ActivityPost from './sunshine-conversations-client.model/ActivityPost';
import ActivityPostAllOf from './sunshine-conversations-client.model/ActivityPostAllOf';
import ActivityTypes from './sunshine-conversations-client.model/ActivityTypes';
import Android from './sunshine-conversations-client.model/Android';
import AndroidAllOf from './sunshine-conversations-client.model/AndroidAllOf';
import AndroidUpdate from './sunshine-conversations-client.model/AndroidUpdate';
import AndroidUpdateAllOf from './sunshine-conversations-client.model/AndroidUpdateAllOf';
import ApiKey from './sunshine-conversations-client.model/ApiKey';
import App from './sunshine-conversations-client.model/App';
import AppCreateBody from './sunshine-conversations-client.model/AppCreateBody';
import AppKey from './sunshine-conversations-client.model/AppKey';
import AppKeyCreateBody from './sunshine-conversations-client.model/AppKeyCreateBody';
import AppKeyListResponse from './sunshine-conversations-client.model/AppKeyListResponse';
import AppKeyResponse from './sunshine-conversations-client.model/AppKeyResponse';
import AppListFilter from './sunshine-conversations-client.model/AppListFilter';
import AppListResponse from './sunshine-conversations-client.model/AppListResponse';
import AppResponse from './sunshine-conversations-client.model/AppResponse';
import AppSettings from './sunshine-conversations-client.model/AppSettings';
import AppSubSchema from './sunshine-conversations-client.model/AppSubSchema';
import AppUpdateBody from './sunshine-conversations-client.model/AppUpdateBody';
import Apple from './sunshine-conversations-client.model/Apple';
import AppleAllOf from './sunshine-conversations-client.model/AppleAllOf';
import AppleUpdate from './sunshine-conversations-client.model/AppleUpdate';
import AttachmentDeleteBody from './sunshine-conversations-client.model/AttachmentDeleteBody';
import AttachmentMediaTokenBody from './sunshine-conversations-client.model/AttachmentMediaTokenBody';
import AttachmentMediaTokenResponse from './sunshine-conversations-client.model/AttachmentMediaTokenResponse';
import AttachmentResponse from './sunshine-conversations-client.model/AttachmentResponse';
import AttachmentSchema from './sunshine-conversations-client.model/AttachmentSchema';
import AttachmentUploadBody from './sunshine-conversations-client.model/AttachmentUploadBody';
import Author from './sunshine-conversations-client.model/Author';
import AuthorWebhook from './sunshine-conversations-client.model/AuthorWebhook';
import Buy from './sunshine-conversations-client.model/Buy';
import CarouselMessage from './sunshine-conversations-client.model/CarouselMessage';
import CarouselMessageDisplaySettings from './sunshine-conversations-client.model/CarouselMessageDisplaySettings';
import Client from './sunshine-conversations-client.model/Client';
import ClientAssociation from './sunshine-conversations-client.model/ClientAssociation';
import ClientCreate from './sunshine-conversations-client.model/ClientCreate';
import ClientListResponse from './sunshine-conversations-client.model/ClientListResponse';
import ClientResponse from './sunshine-conversations-client.model/ClientResponse';
import ClientType from './sunshine-conversations-client.model/ClientType';
import Confirmation from './sunshine-conversations-client.model/Confirmation';
import Content from './sunshine-conversations-client.model/Content';
import Conversation from './sunshine-conversations-client.model/Conversation';
import ConversationAllOf from './sunshine-conversations-client.model/ConversationAllOf';
import ConversationCreateBody from './sunshine-conversations-client.model/ConversationCreateBody';
import ConversationCreateEvent from './sunshine-conversations-client.model/ConversationCreateEvent';
import ConversationCreateEventAllOf from './sunshine-conversations-client.model/ConversationCreateEventAllOf';
import ConversationCreateEventAllOfPayload from './sunshine-conversations-client.model/ConversationCreateEventAllOfPayload';
import ConversationListFilter from './sunshine-conversations-client.model/ConversationListFilter';
import ConversationListResponse from './sunshine-conversations-client.model/ConversationListResponse';
import ConversationMessageDeliveryChannelEvent from './sunshine-conversations-client.model/ConversationMessageDeliveryChannelEvent';
import ConversationMessageDeliveryChannelEventAllOf from './sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf';
import ConversationMessageDeliveryFailureEvent from './sunshine-conversations-client.model/ConversationMessageDeliveryFailureEvent';
import ConversationMessageDeliveryFailureEventAllOf from './sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf';
import ConversationMessageDeliveryPayload from './sunshine-conversations-client.model/ConversationMessageDeliveryPayload';
import ConversationMessageDeliveryPayloadDestination from './sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination';
import ConversationMessageDeliveryPayloadExternalMessages from './sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages';
import ConversationMessageDeliveryPayloadMessage from './sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage';
import ConversationMessageDeliveryUserEvent from './sunshine-conversations-client.model/ConversationMessageDeliveryUserEvent';
import ConversationMessageEvent from './sunshine-conversations-client.model/ConversationMessageEvent';
import ConversationMessageEventAllOf from './sunshine-conversations-client.model/ConversationMessageEventAllOf';
import ConversationMessageEventAllOfPayload from './sunshine-conversations-client.model/ConversationMessageEventAllOfPayload';
import ConversationPostbackEvent from './sunshine-conversations-client.model/ConversationPostbackEvent';
import ConversationPostbackEventAllOf from './sunshine-conversations-client.model/ConversationPostbackEventAllOf';
import ConversationPostbackEventAllOfPayload from './sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload';
import ConversationReadEvent from './sunshine-conversations-client.model/ConversationReadEvent';
import ConversationReadEventAllOf from './sunshine-conversations-client.model/ConversationReadEventAllOf';
import ConversationReadEventAllOfPayload from './sunshine-conversations-client.model/ConversationReadEventAllOfPayload';
import ConversationResponse from './sunshine-conversations-client.model/ConversationResponse';
import ConversationTruncated from './sunshine-conversations-client.model/ConversationTruncated';
import ConversationType from './sunshine-conversations-client.model/ConversationType';
import ConversationTypingEvent from './sunshine-conversations-client.model/ConversationTypingEvent';
import ConversationTypingEventAllOf from './sunshine-conversations-client.model/ConversationTypingEventAllOf';
import ConversationTypingEventAllOfPayload from './sunshine-conversations-client.model/ConversationTypingEventAllOfPayload';
import ConversationUpdateBody from './sunshine-conversations-client.model/ConversationUpdateBody';
import Custom from './sunshine-conversations-client.model/Custom';
import CustomAllOf from './sunshine-conversations-client.model/CustomAllOf';
import CustomUpdate from './sunshine-conversations-client.model/CustomUpdate';
import Destination from './sunshine-conversations-client.model/Destination';
import Device from './sunshine-conversations-client.model/Device';
import EventSubSchema from './sunshine-conversations-client.model/EventSubSchema';
import ExtraChannelOptions from './sunshine-conversations-client.model/ExtraChannelOptions';
import ExtraChannelOptionsMessenger from './sunshine-conversations-client.model/ExtraChannelOptionsMessenger';
import Field from './sunshine-conversations-client.model/Field';
import FileMessage from './sunshine-conversations-client.model/FileMessage';
import FormMessage from './sunshine-conversations-client.model/FormMessage';
import FormResponseMessage from './sunshine-conversations-client.model/FormResponseMessage';
import ImageMessage from './sunshine-conversations-client.model/ImageMessage';
import Integration from './sunshine-conversations-client.model/Integration';
import IntegrationApiKey from './sunshine-conversations-client.model/IntegrationApiKey';
import IntegrationApiKeyListResponse from './sunshine-conversations-client.model/IntegrationApiKeyListResponse';
import IntegrationApiKeyResponse from './sunshine-conversations-client.model/IntegrationApiKeyResponse';
import IntegrationId from './sunshine-conversations-client.model/IntegrationId';
import IntegrationListFilter from './sunshine-conversations-client.model/IntegrationListFilter';
import IntegrationListResponse from './sunshine-conversations-client.model/IntegrationListResponse';
import IntegrationResponse from './sunshine-conversations-client.model/IntegrationResponse';
import IntegrationType from './sunshine-conversations-client.model/IntegrationType';
import IntegrationUpdate from './sunshine-conversations-client.model/IntegrationUpdate';
import IntegrationUpdateBase from './sunshine-conversations-client.model/IntegrationUpdateBase';
import Ios from './sunshine-conversations-client.model/Ios';
import IosAllOf from './sunshine-conversations-client.model/IosAllOf';
import IosUpdate from './sunshine-conversations-client.model/IosUpdate';
import IosUpdateAllOf from './sunshine-conversations-client.model/IosUpdateAllOf';
import Item from './sunshine-conversations-client.model/Item';
import Line from './sunshine-conversations-client.model/Line';
import LineAllOf from './sunshine-conversations-client.model/LineAllOf';
import LineUpdate from './sunshine-conversations-client.model/LineUpdate';
import Link from './sunshine-conversations-client.model/Link';
import Links from './sunshine-conversations-client.model/Links';
import ListMessage from './sunshine-conversations-client.model/ListMessage';
import LocationMessage from './sunshine-conversations-client.model/LocationMessage';
import LocationMessageCoordinates from './sunshine-conversations-client.model/LocationMessageCoordinates';
import LocationMessageLocation from './sunshine-conversations-client.model/LocationMessageLocation';
import LocationRequest from './sunshine-conversations-client.model/LocationRequest';
import Mailgun from './sunshine-conversations-client.model/Mailgun';
import MailgunAllOf from './sunshine-conversations-client.model/MailgunAllOf';
import MailgunUpdate from './sunshine-conversations-client.model/MailgunUpdate';
import MailgunUpdateAllOf from './sunshine-conversations-client.model/MailgunUpdateAllOf';
import MatchCriteria from './sunshine-conversations-client.model/MatchCriteria';
import MatchCriteriaBase from './sunshine-conversations-client.model/MatchCriteriaBase';
import MatchCriteriaMailgun from './sunshine-conversations-client.model/MatchCriteriaMailgun';
import MatchCriteriaMailgunAllOf from './sunshine-conversations-client.model/MatchCriteriaMailgunAllOf';
import MatchCriteriaMessagebird from './sunshine-conversations-client.model/MatchCriteriaMessagebird';
import MatchCriteriaMessagebirdAllOf from './sunshine-conversations-client.model/MatchCriteriaMessagebirdAllOf';
import MatchCriteriaTwilio from './sunshine-conversations-client.model/MatchCriteriaTwilio';
import MatchCriteriaTwilioAllOf from './sunshine-conversations-client.model/MatchCriteriaTwilioAllOf';
import MatchCriteriaWhatsapp from './sunshine-conversations-client.model/MatchCriteriaWhatsapp';
import MatchCriteriaWhatsappAllOf from './sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf';
import Message from './sunshine-conversations-client.model/Message';
import MessageBirdUpdate from './sunshine-conversations-client.model/MessageBirdUpdate';
import MessageListResponse from './sunshine-conversations-client.model/MessageListResponse';
import MessageOverride from './sunshine-conversations-client.model/MessageOverride';
import MessageOverrideApple from './sunshine-conversations-client.model/MessageOverrideApple';
import MessageOverrideLine from './sunshine-conversations-client.model/MessageOverrideLine';
import MessageOverrideMessenger from './sunshine-conversations-client.model/MessageOverrideMessenger';
import MessageOverridePayload from './sunshine-conversations-client.model/MessageOverridePayload';
import MessageOverrideWhatsapp from './sunshine-conversations-client.model/MessageOverrideWhatsapp';
import MessagePost from './sunshine-conversations-client.model/MessagePost';
import MessagePostResponse from './sunshine-conversations-client.model/MessagePostResponse';
import Messagebird from './sunshine-conversations-client.model/Messagebird';
import MessagebirdAllOf from './sunshine-conversations-client.model/MessagebirdAllOf';
import Messenger from './sunshine-conversations-client.model/Messenger';
import MessengerAllOf from './sunshine-conversations-client.model/MessengerAllOf';
import MessengerUpdate from './sunshine-conversations-client.model/MessengerUpdate';
import MessengerUpdateAllOf from './sunshine-conversations-client.model/MessengerUpdateAllOf';
import Meta from './sunshine-conversations-client.model/Meta';
import OfferControlBody from './sunshine-conversations-client.model/OfferControlBody';
import Page from './sunshine-conversations-client.model/Page';
import Participant from './sunshine-conversations-client.model/Participant';
import ParticipantJoinBody from './sunshine-conversations-client.model/ParticipantJoinBody';
import ParticipantLeaveBody from './sunshine-conversations-client.model/ParticipantLeaveBody';
import ParticipantLeaveBodyParticipantId from './sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId';
import ParticipantLeaveBodyUserExternalId from './sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId';
import ParticipantLeaveBodyUserId from './sunshine-conversations-client.model/ParticipantLeaveBodyUserId';
import ParticipantListResponse from './sunshine-conversations-client.model/ParticipantListResponse';
import ParticipantResponse from './sunshine-conversations-client.model/ParticipantResponse';
import ParticipantSubSchema from './sunshine-conversations-client.model/ParticipantSubSchema';
import ParticipantWithUserExternalId from './sunshine-conversations-client.model/ParticipantWithUserExternalId';
import ParticipantWithUserId from './sunshine-conversations-client.model/ParticipantWithUserId';
import PassControlBody from './sunshine-conversations-client.model/PassControlBody';
import Postback from './sunshine-conversations-client.model/Postback';
import PostbackWebhook from './sunshine-conversations-client.model/PostbackWebhook';
import PrechatCapture from './sunshine-conversations-client.model/PrechatCapture';
import Profile from './sunshine-conversations-client.model/Profile';
import QuotedMessage from './sunshine-conversations-client.model/QuotedMessage';
import QuotedMessageExternalMessageId from './sunshine-conversations-client.model/QuotedMessageExternalMessageId';
import QuotedMessageMessage from './sunshine-conversations-client.model/QuotedMessageMessage';
import Referral from './sunshine-conversations-client.model/Referral';
import ReferralDetails from './sunshine-conversations-client.model/ReferralDetails';
import Reply from './sunshine-conversations-client.model/Reply';
import Source from './sunshine-conversations-client.model/Source';
import SourceWebhook from './sunshine-conversations-client.model/SourceWebhook';
import Status from './sunshine-conversations-client.model/Status';
import Switchboard from './sunshine-conversations-client.model/Switchboard';
import SwitchboardAcceptControl from './sunshine-conversations-client.model/SwitchboardAcceptControl';
import SwitchboardAcceptControlAllOf from './sunshine-conversations-client.model/SwitchboardAcceptControlAllOf';
import SwitchboardAcceptControlAllOfPayload from './sunshine-conversations-client.model/SwitchboardAcceptControlAllOfPayload';
import SwitchboardAcceptControlFailure from './sunshine-conversations-client.model/SwitchboardAcceptControlFailure';
import SwitchboardAcceptControlFailureAllOf from './sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf';
import SwitchboardAcceptControlFailureAllOfPayload from './sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload';
import SwitchboardIntegration from './sunshine-conversations-client.model/SwitchboardIntegration';
import SwitchboardIntegrationCreateBody from './sunshine-conversations-client.model/SwitchboardIntegrationCreateBody';
import SwitchboardIntegrationListResponse from './sunshine-conversations-client.model/SwitchboardIntegrationListResponse';
import SwitchboardIntegrationResponse from './sunshine-conversations-client.model/SwitchboardIntegrationResponse';
import SwitchboardIntegrationUpdateBody from './sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody';
import SwitchboardIntegrationWebhook from './sunshine-conversations-client.model/SwitchboardIntegrationWebhook';
import SwitchboardListResponse from './sunshine-conversations-client.model/SwitchboardListResponse';
import SwitchboardOfferControl from './sunshine-conversations-client.model/SwitchboardOfferControl';
import SwitchboardOfferControlAllOf from './sunshine-conversations-client.model/SwitchboardOfferControlAllOf';
import SwitchboardOfferControlAllOfPayload from './sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload';
import SwitchboardOfferControlFailure from './sunshine-conversations-client.model/SwitchboardOfferControlFailure';
import SwitchboardPassControl from './sunshine-conversations-client.model/SwitchboardPassControl';
import SwitchboardPassControlAllOf from './sunshine-conversations-client.model/SwitchboardPassControlAllOf';
import SwitchboardPassControlAllOfPayload from './sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload';
import SwitchboardPassControlFailure from './sunshine-conversations-client.model/SwitchboardPassControlFailure';
import SwitchboardResponse from './sunshine-conversations-client.model/SwitchboardResponse';
import SwitchboardUpdateBody from './sunshine-conversations-client.model/SwitchboardUpdateBody';
import Target from './sunshine-conversations-client.model/Target';
import Telegram from './sunshine-conversations-client.model/Telegram';
import TelegramAllOf from './sunshine-conversations-client.model/TelegramAllOf';
import TelegramUpdate from './sunshine-conversations-client.model/TelegramUpdate';
import TextMessage from './sunshine-conversations-client.model/TextMessage';
import Twilio from './sunshine-conversations-client.model/Twilio';
import TwilioAllOf from './sunshine-conversations-client.model/TwilioAllOf';
import TwilioUpdate from './sunshine-conversations-client.model/TwilioUpdate';
import Twitter from './sunshine-conversations-client.model/Twitter';
import TwitterAllOf from './sunshine-conversations-client.model/TwitterAllOf';
import TwitterUpdate from './sunshine-conversations-client.model/TwitterUpdate';
import User from './sunshine-conversations-client.model/User';
import UserAllOf from './sunshine-conversations-client.model/UserAllOf';
import UserCreateBody from './sunshine-conversations-client.model/UserCreateBody';
import UserMergeEvent from './sunshine-conversations-client.model/UserMergeEvent';
import UserMergeEventAllOf from './sunshine-conversations-client.model/UserMergeEventAllOf';
import UserMergeEventAllOfPayload from './sunshine-conversations-client.model/UserMergeEventAllOfPayload';
import UserMergeEventAllOfPayloadMergedConversations from './sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations';
import UserMergeEventAllOfPayloadMergedUsers from './sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers';
import UserResponse from './sunshine-conversations-client.model/UserResponse';
import UserTruncated from './sunshine-conversations-client.model/UserTruncated';
import UserUpdateBody from './sunshine-conversations-client.model/UserUpdateBody';
import Viber from './sunshine-conversations-client.model/Viber';
import ViberAllOf from './sunshine-conversations-client.model/ViberAllOf';
import ViberUpdate from './sunshine-conversations-client.model/ViberUpdate';
import Web from './sunshine-conversations-client.model/Web';
import WebAllOf from './sunshine-conversations-client.model/WebAllOf';
import WebUpdate from './sunshine-conversations-client.model/WebUpdate';
import WebUpdateAllOf from './sunshine-conversations-client.model/WebUpdateAllOf';
import Webhook from './sunshine-conversations-client.model/Webhook';
import WebhookBody from './sunshine-conversations-client.model/WebhookBody';
import WebhookCreateBody from './sunshine-conversations-client.model/WebhookCreateBody';
import WebhookListResponse from './sunshine-conversations-client.model/WebhookListResponse';
import WebhookResponse from './sunshine-conversations-client.model/WebhookResponse';
import WebhookSubSchema from './sunshine-conversations-client.model/WebhookSubSchema';
import Webview from './sunshine-conversations-client.model/Webview';
import WhatsAppUpdate from './sunshine-conversations-client.model/WhatsAppUpdate';
import WhatsAppUpdateAllOf from './sunshine-conversations-client.model/WhatsAppUpdateAllOf';
import Whatsapp from './sunshine-conversations-client.model/Whatsapp';
import WhatsappAllOf from './sunshine-conversations-client.model/WhatsappAllOf';
import ActivitiesApi from './sunshine-conversations-client.api/ActivitiesApi';
import AppKeysApi from './sunshine-conversations-client.api/AppKeysApi';
import AppsApi from './sunshine-conversations-client.api/AppsApi';
import AttachmentsApi from './sunshine-conversations-client.api/AttachmentsApi';
import ClientsApi from './sunshine-conversations-client.api/ClientsApi';
import ConversationsApi from './sunshine-conversations-client.api/ConversationsApi';
import CustomIntegrationApiKeysApi from './sunshine-conversations-client.api/CustomIntegrationApiKeysApi';
import IntegrationsApi from './sunshine-conversations-client.api/IntegrationsApi';
import MessagesApi from './sunshine-conversations-client.api/MessagesApi';
import ParticipantsApi from './sunshine-conversations-client.api/ParticipantsApi';
import SwitchboardActionsApi from './sunshine-conversations-client.api/SwitchboardActionsApi';
import SwitchboardIntegrationsApi from './sunshine-conversations-client.api/SwitchboardIntegrationsApi';
import SwitchboardsApi from './sunshine-conversations-client.api/SwitchboardsApi';
import UsersApi from './sunshine-conversations-client.api/UsersApi';
import WebhooksApi from './sunshine-conversations-client.api/WebhooksApi';


/**
* Sunshine Conversations JavaScript Client.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SunshineConversationsClient = require('sunshine-conversations-client/index'); // See note below*.
* var xxxSvc = new SunshineConversationsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SunshineConversationsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['sunshine-conversations-client/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SunshineConversationsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SunshineConversationsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module sunshine-conversations-client/index
* @version 9.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:sunshine-conversations-client/ApiClient}
     */
    ApiClient,

    /**
     * The AcceptControlBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody}
     */
    AcceptControlBody,

    /**
     * The Action model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Action}
     */
    Action,

    /**
     * The ActionSubset model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset}
     */
    ActionSubset,

    /**
     * The Activity model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity}
     */
    Activity,

    /**
     * The ActivityAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf}
     */
    ActivityAllOf,

    /**
     * The ActivityPost model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost}
     */
    ActivityPost,

    /**
     * The ActivityPostAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf}
     */
    ActivityPostAllOf,

    /**
     * The ActivityTypes model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes}
     */
    ActivityTypes,

    /**
     * The Android model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Android}
     */
    Android,

    /**
     * The AndroidAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf}
     */
    AndroidAllOf,

    /**
     * The AndroidUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate}
     */
    AndroidUpdate,

    /**
     * The AndroidUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf}
     */
    AndroidUpdateAllOf,

    /**
     * The ApiKey model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey}
     */
    ApiKey,

    /**
     * The App model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/App}
     */
    App,

    /**
     * The AppCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody}
     */
    AppCreateBody,

    /**
     * The AppKey model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey}
     */
    AppKey,

    /**
     * The AppKeyCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody}
     */
    AppKeyCreateBody,

    /**
     * The AppKeyListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse}
     */
    AppKeyListResponse,

    /**
     * The AppKeyResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse}
     */
    AppKeyResponse,

    /**
     * The AppListFilter model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter}
     */
    AppListFilter,

    /**
     * The AppListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse}
     */
    AppListResponse,

    /**
     * The AppResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    AppResponse,

    /**
     * The AppSettings model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings}
     */
    AppSettings,

    /**
     * The AppSubSchema model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema}
     */
    AppSubSchema,

    /**
     * The AppUpdateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody}
     */
    AppUpdateBody,

    /**
     * The Apple model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Apple}
     */
    Apple,

    /**
     * The AppleAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf}
     */
    AppleAllOf,

    /**
     * The AppleUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate}
     */
    AppleUpdate,

    /**
     * The AttachmentDeleteBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody}
     */
    AttachmentDeleteBody,

    /**
     * The AttachmentMediaTokenBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody}
     */
    AttachmentMediaTokenBody,

    /**
     * The AttachmentMediaTokenResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse}
     */
    AttachmentMediaTokenResponse,

    /**
     * The AttachmentResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse}
     */
    AttachmentResponse,

    /**
     * The AttachmentSchema model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema}
     */
    AttachmentSchema,

    /**
     * The AttachmentUploadBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody}
     */
    AttachmentUploadBody,

    /**
     * The Author model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
     */
    Author,

    /**
     * The AuthorWebhook model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook}
     */
    AuthorWebhook,

    /**
     * The Buy model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Buy}
     */
    Buy,

    /**
     * The CarouselMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage}
     */
    CarouselMessage,

    /**
     * The CarouselMessageDisplaySettings model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings}
     */
    CarouselMessageDisplaySettings,

    /**
     * The Client model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    Client,

    /**
     * The ClientAssociation model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation}
     */
    ClientAssociation,

    /**
     * The ClientCreate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate}
     */
    ClientCreate,

    /**
     * The ClientListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse}
     */
    ClientListResponse,

    /**
     * The ClientResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse}
     */
    ClientResponse,

    /**
     * The ClientType model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType}
     */
    ClientType,

    /**
     * The Confirmation model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation}
     */
    Confirmation,

    /**
     * The Content model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Content}
     */
    Content,

    /**
     * The Conversation model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation}
     */
    Conversation,

    /**
     * The ConversationAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf}
     */
    ConversationAllOf,

    /**
     * The ConversationCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody}
     */
    ConversationCreateBody,

    /**
     * The ConversationCreateEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEvent}
     */
    ConversationCreateEvent,

    /**
     * The ConversationCreateEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOf}
     */
    ConversationCreateEventAllOf,

    /**
     * The ConversationCreateEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload}
     */
    ConversationCreateEventAllOfPayload,

    /**
     * The ConversationListFilter model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter}
     */
    ConversationListFilter,

    /**
     * The ConversationListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse}
     */
    ConversationListResponse,

    /**
     * The ConversationMessageDeliveryChannelEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEvent}
     */
    ConversationMessageDeliveryChannelEvent,

    /**
     * The ConversationMessageDeliveryChannelEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf}
     */
    ConversationMessageDeliveryChannelEventAllOf,

    /**
     * The ConversationMessageDeliveryFailureEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEvent}
     */
    ConversationMessageDeliveryFailureEvent,

    /**
     * The ConversationMessageDeliveryFailureEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf}
     */
    ConversationMessageDeliveryFailureEventAllOf,

    /**
     * The ConversationMessageDeliveryPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload}
     */
    ConversationMessageDeliveryPayload,

    /**
     * The ConversationMessageDeliveryPayloadDestination model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination}
     */
    ConversationMessageDeliveryPayloadDestination,

    /**
     * The ConversationMessageDeliveryPayloadExternalMessages model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages}
     */
    ConversationMessageDeliveryPayloadExternalMessages,

    /**
     * The ConversationMessageDeliveryPayloadMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage}
     */
    ConversationMessageDeliveryPayloadMessage,

    /**
     * The ConversationMessageDeliveryUserEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryUserEvent}
     */
    ConversationMessageDeliveryUserEvent,

    /**
     * The ConversationMessageEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEvent}
     */
    ConversationMessageEvent,

    /**
     * The ConversationMessageEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOf}
     */
    ConversationMessageEventAllOf,

    /**
     * The ConversationMessageEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload}
     */
    ConversationMessageEventAllOfPayload,

    /**
     * The ConversationPostbackEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEvent}
     */
    ConversationPostbackEvent,

    /**
     * The ConversationPostbackEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOf}
     */
    ConversationPostbackEventAllOf,

    /**
     * The ConversationPostbackEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload}
     */
    ConversationPostbackEventAllOfPayload,

    /**
     * The ConversationReadEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEvent}
     */
    ConversationReadEvent,

    /**
     * The ConversationReadEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOf}
     */
    ConversationReadEventAllOf,

    /**
     * The ConversationReadEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload}
     */
    ConversationReadEventAllOfPayload,

    /**
     * The ConversationResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    ConversationResponse,

    /**
     * The ConversationTruncated model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    ConversationTruncated,

    /**
     * The ConversationType model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType}
     */
    ConversationType,

    /**
     * The ConversationTypingEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEvent}
     */
    ConversationTypingEvent,

    /**
     * The ConversationTypingEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOf}
     */
    ConversationTypingEventAllOf,

    /**
     * The ConversationTypingEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload}
     */
    ConversationTypingEventAllOfPayload,

    /**
     * The ConversationUpdateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody}
     */
    ConversationUpdateBody,

    /**
     * The Custom model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Custom}
     */
    Custom,

    /**
     * The CustomAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf}
     */
    CustomAllOf,

    /**
     * The CustomUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate}
     */
    CustomUpdate,

    /**
     * The Destination model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination}
     */
    Destination,

    /**
     * The Device model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Device}
     */
    Device,

    /**
     * The EventSubSchema model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/EventSubSchema}
     */
    EventSubSchema,

    /**
     * The ExtraChannelOptions model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions}
     */
    ExtraChannelOptions,

    /**
     * The ExtraChannelOptionsMessenger model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger}
     */
    ExtraChannelOptionsMessenger,

    /**
     * The Field model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Field}
     */
    Field,

    /**
     * The FileMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage}
     */
    FileMessage,

    /**
     * The FormMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage}
     */
    FormMessage,

    /**
     * The FormResponseMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage}
     */
    FormResponseMessage,

    /**
     * The ImageMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage}
     */
    ImageMessage,

    /**
     * The Integration model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration}
     */
    Integration,

    /**
     * The IntegrationApiKey model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey}
     */
    IntegrationApiKey,

    /**
     * The IntegrationApiKeyListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse}
     */
    IntegrationApiKeyListResponse,

    /**
     * The IntegrationApiKeyResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    IntegrationApiKeyResponse,

    /**
     * The IntegrationId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId}
     */
    IntegrationId,

    /**
     * The IntegrationListFilter model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter}
     */
    IntegrationListFilter,

    /**
     * The IntegrationListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse}
     */
    IntegrationListResponse,

    /**
     * The IntegrationResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    IntegrationResponse,

    /**
     * The IntegrationType model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType}
     */
    IntegrationType,

    /**
     * The IntegrationUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate}
     */
    IntegrationUpdate,

    /**
     * The IntegrationUpdateBase model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase}
     */
    IntegrationUpdateBase,

    /**
     * The Ios model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Ios}
     */
    Ios,

    /**
     * The IosAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf}
     */
    IosAllOf,

    /**
     * The IosUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate}
     */
    IosUpdate,

    /**
     * The IosUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdateAllOf}
     */
    IosUpdateAllOf,

    /**
     * The Item model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Item}
     */
    Item,

    /**
     * The Line model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Line}
     */
    Line,

    /**
     * The LineAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf}
     */
    LineAllOf,

    /**
     * The LineUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LineUpdate}
     */
    LineUpdate,

    /**
     * The Link model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Link}
     */
    Link,

    /**
     * The Links model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
     */
    Links,

    /**
     * The ListMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage}
     */
    ListMessage,

    /**
     * The LocationMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage}
     */
    LocationMessage,

    /**
     * The LocationMessageCoordinates model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates}
     */
    LocationMessageCoordinates,

    /**
     * The LocationMessageLocation model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation}
     */
    LocationMessageLocation,

    /**
     * The LocationRequest model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest}
     */
    LocationRequest,

    /**
     * The Mailgun model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Mailgun}
     */
    Mailgun,

    /**
     * The MailgunAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf}
     */
    MailgunAllOf,

    /**
     * The MailgunUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdate}
     */
    MailgunUpdate,

    /**
     * The MailgunUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdateAllOf}
     */
    MailgunUpdateAllOf,

    /**
     * The MatchCriteria model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria}
     */
    MatchCriteria,

    /**
     * The MatchCriteriaBase model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase}
     */
    MatchCriteriaBase,

    /**
     * The MatchCriteriaMailgun model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun}
     */
    MatchCriteriaMailgun,

    /**
     * The MatchCriteriaMailgunAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf}
     */
    MatchCriteriaMailgunAllOf,

    /**
     * The MatchCriteriaMessagebird model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird}
     */
    MatchCriteriaMessagebird,

    /**
     * The MatchCriteriaMessagebirdAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebirdAllOf}
     */
    MatchCriteriaMessagebirdAllOf,

    /**
     * The MatchCriteriaTwilio model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio}
     */
    MatchCriteriaTwilio,

    /**
     * The MatchCriteriaTwilioAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilioAllOf}
     */
    MatchCriteriaTwilioAllOf,

    /**
     * The MatchCriteriaWhatsapp model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsapp}
     */
    MatchCriteriaWhatsapp,

    /**
     * The MatchCriteriaWhatsappAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsappAllOf}
     */
    MatchCriteriaWhatsappAllOf,

    /**
     * The Message model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Message}
     */
    Message,

    /**
     * The MessageBirdUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageBirdUpdate}
     */
    MessageBirdUpdate,

    /**
     * The MessageListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse}
     */
    MessageListResponse,

    /**
     * The MessageOverride model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride}
     */
    MessageOverride,

    /**
     * The MessageOverrideApple model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple}
     */
    MessageOverrideApple,

    /**
     * The MessageOverrideLine model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine}
     */
    MessageOverrideLine,

    /**
     * The MessageOverrideMessenger model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger}
     */
    MessageOverrideMessenger,

    /**
     * The MessageOverridePayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    MessageOverridePayload,

    /**
     * The MessageOverrideWhatsapp model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp}
     */
    MessageOverrideWhatsapp,

    /**
     * The MessagePost model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost}
     */
    MessagePost,

    /**
     * The MessagePostResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse}
     */
    MessagePostResponse,

    /**
     * The Messagebird model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Messagebird}
     */
    Messagebird,

    /**
     * The MessagebirdAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf}
     */
    MessagebirdAllOf,

    /**
     * The Messenger model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger}
     */
    Messenger,

    /**
     * The MessengerAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf}
     */
    MessengerAllOf,

    /**
     * The MessengerUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate}
     */
    MessengerUpdate,

    /**
     * The MessengerUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdateAllOf}
     */
    MessengerUpdateAllOf,

    /**
     * The Meta model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
     */
    Meta,

    /**
     * The OfferControlBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody}
     */
    OfferControlBody,

    /**
     * The Page model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Page}
     */
    Page,

    /**
     * The Participant model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant}
     */
    Participant,

    /**
     * The ParticipantJoinBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody}
     */
    ParticipantJoinBody,

    /**
     * The ParticipantLeaveBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody}
     */
    ParticipantLeaveBody,

    /**
     * The ParticipantLeaveBodyParticipantId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyParticipantId}
     */
    ParticipantLeaveBodyParticipantId,

    /**
     * The ParticipantLeaveBodyUserExternalId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId}
     */
    ParticipantLeaveBodyUserExternalId,

    /**
     * The ParticipantLeaveBodyUserId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId}
     */
    ParticipantLeaveBodyUserId,

    /**
     * The ParticipantListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse}
     */
    ParticipantListResponse,

    /**
     * The ParticipantResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse}
     */
    ParticipantResponse,

    /**
     * The ParticipantSubSchema model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema}
     */
    ParticipantSubSchema,

    /**
     * The ParticipantWithUserExternalId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId}
     */
    ParticipantWithUserExternalId,

    /**
     * The ParticipantWithUserId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId}
     */
    ParticipantWithUserId,

    /**
     * The PassControlBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody}
     */
    PassControlBody,

    /**
     * The Postback model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Postback}
     */
    Postback,

    /**
     * The PostbackWebhook model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook}
     */
    PostbackWebhook,

    /**
     * The PrechatCapture model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture}
     */
    PrechatCapture,

    /**
     * The Profile model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile}
     */
    Profile,

    /**
     * The QuotedMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage}
     */
    QuotedMessage,

    /**
     * The QuotedMessageExternalMessageId model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId}
     */
    QuotedMessageExternalMessageId,

    /**
     * The QuotedMessageMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage}
     */
    QuotedMessageMessage,

    /**
     * The Referral model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral}
     */
    Referral,

    /**
     * The ReferralDetails model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails}
     */
    ReferralDetails,

    /**
     * The Reply model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Reply}
     */
    Reply,

    /**
     * The Source model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Source}
     */
    Source,

    /**
     * The SourceWebhook model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
     */
    SourceWebhook,

    /**
     * The Status model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Status}
     */
    Status,

    /**
     * The Switchboard model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard}
     */
    Switchboard,

    /**
     * The SwitchboardAcceptControl model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControl}
     */
    SwitchboardAcceptControl,

    /**
     * The SwitchboardAcceptControlAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOf}
     */
    SwitchboardAcceptControlAllOf,

    /**
     * The SwitchboardAcceptControlAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlAllOfPayload}
     */
    SwitchboardAcceptControlAllOfPayload,

    /**
     * The SwitchboardAcceptControlFailure model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailure}
     */
    SwitchboardAcceptControlFailure,

    /**
     * The SwitchboardAcceptControlFailureAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf}
     */
    SwitchboardAcceptControlFailureAllOf,

    /**
     * The SwitchboardAcceptControlFailureAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload}
     */
    SwitchboardAcceptControlFailureAllOfPayload,

    /**
     * The SwitchboardIntegration model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration}
     */
    SwitchboardIntegration,

    /**
     * The SwitchboardIntegrationCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody}
     */
    SwitchboardIntegrationCreateBody,

    /**
     * The SwitchboardIntegrationListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse}
     */
    SwitchboardIntegrationListResponse,

    /**
     * The SwitchboardIntegrationResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse}
     */
    SwitchboardIntegrationResponse,

    /**
     * The SwitchboardIntegrationUpdateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody}
     */
    SwitchboardIntegrationUpdateBody,

    /**
     * The SwitchboardIntegrationWebhook model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook}
     */
    SwitchboardIntegrationWebhook,

    /**
     * The SwitchboardListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse}
     */
    SwitchboardListResponse,

    /**
     * The SwitchboardOfferControl model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControl}
     */
    SwitchboardOfferControl,

    /**
     * The SwitchboardOfferControlAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOf}
     */
    SwitchboardOfferControlAllOf,

    /**
     * The SwitchboardOfferControlAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload}
     */
    SwitchboardOfferControlAllOfPayload,

    /**
     * The SwitchboardOfferControlFailure model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlFailure}
     */
    SwitchboardOfferControlFailure,

    /**
     * The SwitchboardPassControl model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControl}
     */
    SwitchboardPassControl,

    /**
     * The SwitchboardPassControlAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOf}
     */
    SwitchboardPassControlAllOf,

    /**
     * The SwitchboardPassControlAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload}
     */
    SwitchboardPassControlAllOfPayload,

    /**
     * The SwitchboardPassControlFailure model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlFailure}
     */
    SwitchboardPassControlFailure,

    /**
     * The SwitchboardResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse}
     */
    SwitchboardResponse,

    /**
     * The SwitchboardUpdateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody}
     */
    SwitchboardUpdateBody,

    /**
     * The Target model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Target}
     */
    Target,

    /**
     * The Telegram model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram}
     */
    Telegram,

    /**
     * The TelegramAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf}
     */
    TelegramAllOf,

    /**
     * The TelegramUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramUpdate}
     */
    TelegramUpdate,

    /**
     * The TextMessage model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage}
     */
    TextMessage,

    /**
     * The Twilio model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Twilio}
     */
    Twilio,

    /**
     * The TwilioAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf}
     */
    TwilioAllOf,

    /**
     * The TwilioUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioUpdate}
     */
    TwilioUpdate,

    /**
     * The Twitter model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter}
     */
    Twitter,

    /**
     * The TwitterAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf}
     */
    TwitterAllOf,

    /**
     * The TwitterUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterUpdate}
     */
    TwitterUpdate,

    /**
     * The User model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    User,

    /**
     * The UserAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf}
     */
    UserAllOf,

    /**
     * The UserCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody}
     */
    UserCreateBody,

    /**
     * The UserMergeEvent model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEvent}
     */
    UserMergeEvent,

    /**
     * The UserMergeEventAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOf}
     */
    UserMergeEventAllOf,

    /**
     * The UserMergeEventAllOfPayload model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload}
     */
    UserMergeEventAllOfPayload,

    /**
     * The UserMergeEventAllOfPayloadMergedConversations model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations}
     */
    UserMergeEventAllOfPayloadMergedConversations,

    /**
     * The UserMergeEventAllOfPayloadMergedUsers model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers}
     */
    UserMergeEventAllOfPayloadMergedUsers,

    /**
     * The UserResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    UserResponse,

    /**
     * The UserTruncated model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated}
     */
    UserTruncated,

    /**
     * The UserUpdateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody}
     */
    UserUpdateBody,

    /**
     * The Viber model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Viber}
     */
    Viber,

    /**
     * The ViberAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf}
     */
    ViberAllOf,

    /**
     * The ViberUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate}
     */
    ViberUpdate,

    /**
     * The Web model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Web}
     */
    Web,

    /**
     * The WebAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebAllOf}
     */
    WebAllOf,

    /**
     * The WebUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate}
     */
    WebUpdate,

    /**
     * The WebUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf}
     */
    WebUpdateAllOf,

    /**
     * The Webhook model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook}
     */
    Webhook,

    /**
     * The WebhookBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody}
     */
    WebhookBody,

    /**
     * The WebhookCreateBody model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody}
     */
    WebhookCreateBody,

    /**
     * The WebhookListResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse}
     */
    WebhookListResponse,

    /**
     * The WebhookResponse model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    WebhookResponse,

    /**
     * The WebhookSubSchema model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema}
     */
    WebhookSubSchema,

    /**
     * The Webview model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview}
     */
    Webview,

    /**
     * The WhatsAppUpdate model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdate}
     */
    WhatsAppUpdate,

    /**
     * The WhatsAppUpdateAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdateAllOf}
     */
    WhatsAppUpdateAllOf,

    /**
     * The Whatsapp model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp}
     */
    Whatsapp,

    /**
     * The WhatsappAllOf model constructor.
     * @property {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsappAllOf}
     */
    WhatsappAllOf,

    /**
    * The ActivitiesApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/ActivitiesApi}
    */
    ActivitiesApi,

    /**
    * The AppKeysApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/AppKeysApi}
    */
    AppKeysApi,

    /**
    * The AppsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/AppsApi}
    */
    AppsApi,

    /**
    * The AttachmentsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/AttachmentsApi}
    */
    AttachmentsApi,

    /**
    * The ClientsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/ClientsApi}
    */
    ClientsApi,

    /**
    * The ConversationsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/ConversationsApi}
    */
    ConversationsApi,

    /**
    * The CustomIntegrationApiKeysApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi}
    */
    CustomIntegrationApiKeysApi,

    /**
    * The IntegrationsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/IntegrationsApi}
    */
    IntegrationsApi,

    /**
    * The MessagesApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/MessagesApi}
    */
    MessagesApi,

    /**
    * The ParticipantsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/ParticipantsApi}
    */
    ParticipantsApi,

    /**
    * The SwitchboardActionsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardActionsApi}
    */
    SwitchboardActionsApi,

    /**
    * The SwitchboardIntegrationsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardIntegrationsApi}
    */
    SwitchboardIntegrationsApi,

    /**
    * The SwitchboardsApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardsApi}
    */
    SwitchboardsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:sunshine-conversations-client/sunshine-conversations-client.api/WebhooksApi}
    */
    WebhooksApi
};