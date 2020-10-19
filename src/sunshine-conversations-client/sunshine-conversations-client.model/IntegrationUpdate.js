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

import ApiClient from '../ApiClient';
import AndroidUpdate from './AndroidUpdate';
import AppleUpdate from './AppleUpdate';
import CustomUpdate from './CustomUpdate';
import IosUpdate from './IosUpdate';
import LineUpdate from './LineUpdate';
import MailgunUpdate from './MailgunUpdate';
import MessageBirdUpdate from './MessageBirdUpdate';
import MessengerUpdate from './MessengerUpdate';
import PrechatCapture from './PrechatCapture';
import TelegramUpdate from './TelegramUpdate';
import TwilioUpdate from './TwilioUpdate';
import TwitterUpdate from './TwitterUpdate';
import ViberUpdate from './ViberUpdate';
import WebUpdate from './WebUpdate';
import WhatsAppUpdate from './WhatsAppUpdate';

/**
 * The IntegrationUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate
 * @version 9.0.0
 */
class IntegrationUpdate {
    /**
     * Constructs a new <code>IntegrationUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LineUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessageBirdUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdate
     */
    constructor() { 
        AndroidUpdate.initialize(this);AppleUpdate.initialize(this);CustomUpdate.initialize(this);IosUpdate.initialize(this);LineUpdate.initialize(this);MailgunUpdate.initialize(this);MessageBirdUpdate.initialize(this);MessengerUpdate.initialize(this);TelegramUpdate.initialize(this);TwilioUpdate.initialize(this);TwitterUpdate.initialize(this);ViberUpdate.initialize(this);WebUpdate.initialize(this);WhatsAppUpdate.initialize(this);
        IntegrationUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} The populated <code>IntegrationUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationUpdate();
            AndroidUpdate.constructFromObject(data, obj);
            AppleUpdate.constructFromObject(data, obj);
            CustomUpdate.constructFromObject(data, obj);
            IosUpdate.constructFromObject(data, obj);
            LineUpdate.constructFromObject(data, obj);
            MailgunUpdate.constructFromObject(data, obj);
            MessageBirdUpdate.constructFromObject(data, obj);
            MessengerUpdate.constructFromObject(data, obj);
            TelegramUpdate.constructFromObject(data, obj);
            TwilioUpdate.constructFromObject(data, obj);
            TwitterUpdate.constructFromObject(data, obj);
            ViberUpdate.constructFromObject(data, obj);
            WebUpdate.constructFromObject(data, obj);
            WhatsAppUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('serverKey')) {
                obj['serverKey'] = ApiClient.convertToType(data['serverKey'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('production')) {
                obj['production'] = ApiClient.convertToType(data['production'], 'Boolean');
            }
            if (data.hasOwnProperty('autoUpdateBadge')) {
                obj['autoUpdateBadge'] = ApiClient.convertToType(data['autoUpdateBadge'], 'Boolean');
            }
            if (data.hasOwnProperty('hideUnsubscribeLink')) {
                obj['hideUnsubscribeLink'] = ApiClient.convertToType(data['hideUnsubscribeLink'], 'Boolean');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
            }
            if (data.hasOwnProperty('brandColor')) {
                obj['brandColor'] = ApiClient.convertToType(data['brandColor'], 'String');
            }
            if (data.hasOwnProperty('fixedIntroPane')) {
                obj['fixedIntroPane'] = ApiClient.convertToType(data['fixedIntroPane'], 'Boolean');
            }
            if (data.hasOwnProperty('conversationColor')) {
                obj['conversationColor'] = ApiClient.convertToType(data['conversationColor'], 'String');
            }
            if (data.hasOwnProperty('actionColor')) {
                obj['actionColor'] = ApiClient.convertToType(data['actionColor'], 'String');
            }
            if (data.hasOwnProperty('displayStyle')) {
                obj['displayStyle'] = ApiClient.convertToType(data['displayStyle'], 'String');
            }
            if (data.hasOwnProperty('buttonIconUrl')) {
                obj['buttonIconUrl'] = ApiClient.convertToType(data['buttonIconUrl'], 'String');
            }
            if (data.hasOwnProperty('buttonWidth')) {
                obj['buttonWidth'] = ApiClient.convertToType(data['buttonWidth'], 'String');
            }
            if (data.hasOwnProperty('buttonHeight')) {
                obj['buttonHeight'] = ApiClient.convertToType(data['buttonHeight'], 'String');
            }
            if (data.hasOwnProperty('integrationOrder')) {
                obj['integrationOrder'] = ApiClient.convertToType(data['integrationOrder'], ['String']);
            }
            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('businessIconUrl')) {
                obj['businessIconUrl'] = ApiClient.convertToType(data['businessIconUrl'], 'String');
            }
            if (data.hasOwnProperty('backgroundImageUrl')) {
                obj['backgroundImageUrl'] = ApiClient.convertToType(data['backgroundImageUrl'], 'String');
            }
            if (data.hasOwnProperty('originWhitelist')) {
                obj['originWhitelist'] = ApiClient.convertToType(data['originWhitelist'], ['String']);
            }
            if (data.hasOwnProperty('prechatCapture')) {
                obj['prechatCapture'] = ApiClient.convertToType(data['prechatCapture'], PrechatCapture);
            }
            if (data.hasOwnProperty('hsmFallbackLanguage')) {
                obj['hsmFallbackLanguage'] = ApiClient.convertToType(data['hsmFallbackLanguage'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountManagementAccessToken')) {
                obj['accountManagementAccessToken'] = ApiClient.convertToType(data['accountManagementAccessToken'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @param {String} displayName A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns Your server key from the fcm console.
     * @return {String}
     */
    getServerKey() {
        return this.serverKey;
    }

    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey) {
        this['serverKey'] = serverKey;
    }
/**
     * Returns Your sender id from the fcm console.
     * @return {String}
     */
    getSenderId() {
        return this.senderId;
    }

    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId) {
        this['senderId'] = senderId;
    }
/**
     * Returns Allows users to create more than one conversation on the web messenger integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the web messenger integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the web messenger integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }
/**
     * Returns The binary of your APN certificate base64 encoded.
     * @return {String}
     */
    getCertificate() {
        return this.certificate;
    }

    /**
     * Sets The binary of your APN certificate base64 encoded.
     * @param {String} certificate The binary of your APN certificate base64 encoded.
     */
    setCertificate(certificate) {
        this['certificate'] = certificate;
    }
/**
     * Returns The password for your APN certificate.
     * @return {String}
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets The password for your APN certificate.
     * @param {String} password The password for your APN certificate.
     */
    setPassword(password) {
        this['password'] = password;
    }
/**
     * Returns The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     * @return {Boolean}
     */
    getProduction() {
        return this.production;
    }

    /**
     * Sets The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     * @param {Boolean} production The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     */
    setProduction(production) {
        this['production'] = production;
    }
/**
     * Returns Use the unread count of the conversation as the application badge.
     * @return {Boolean}
     */
    getAutoUpdateBadge() {
        return this.autoUpdateBadge;
    }

    /**
     * Sets Use the unread count of the conversation as the application badge.
     * @param {Boolean} autoUpdateBadge Use the unread count of the conversation as the application badge.
     */
    setAutoUpdateBadge(autoUpdateBadge) {
        this['autoUpdateBadge'] = autoUpdateBadge;
    }
/**
     * Returns A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     * @return {Boolean}
     */
    getHideUnsubscribeLink() {
        return this.hideUnsubscribeLink;
    }

    /**
     * Sets A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     * @param {Boolean} hideUnsubscribeLink A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     */
    setHideUnsubscribeLink(hideUnsubscribeLink) {
        this['hideUnsubscribeLink'] = hideUnsubscribeLink;
    }
/**
     * Returns Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     * @return {String}
     */
    getFromAddress() {
        return this.fromAddress;
    }

    /**
     * Sets Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     * @param {String} fromAddress Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     */
    setFromAddress(fromAddress) {
        this['fromAddress'] = fromAddress;
    }
/**
     * Returns A Facebook Page Access Token.
     * @return {String}
     */
    getPageAccessToken() {
        return this.pageAccessToken;
    }

    /**
     * Sets A Facebook Page Access Token.
     * @param {String} pageAccessToken A Facebook Page Access Token.
     */
    setPageAccessToken(pageAccessToken) {
        this['pageAccessToken'] = pageAccessToken;
    }
/**
     * Returns This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getBrandColor() {
        return this.brandColor;
    }

    /**
     * Sets This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @param {String} brandColor This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     */
    setBrandColor(brandColor) {
        this['brandColor'] = brandColor;
    }
/**
     * Returns When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @return {Boolean}
     */
    getFixedIntroPane() {
        return this.fixedIntroPane;
    }

    /**
     * Sets When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @param {Boolean} fixedIntroPane When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     */
    setFixedIntroPane(fixedIntroPane) {
        this['fixedIntroPane'] = fixedIntroPane;
    }
/**
     * Returns This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getConversationColor() {
        return this.conversationColor;
    }

    /**
     * Sets This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @param {String} conversationColor This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     */
    setConversationColor(conversationColor) {
        this['conversationColor'] = conversationColor;
    }
/**
     * Returns This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getActionColor() {
        return this.actionColor;
    }

    /**
     * Sets This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @param {String} actionColor This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     */
    setActionColor(actionColor) {
        this['actionColor'] = actionColor;
    }
/**
     * Returns Choose how the messenger will appear on your website. Must be either button or tab.
     * @return {String}
     */
    getDisplayStyle() {
        return this.displayStyle;
    }

    /**
     * Sets Choose how the messenger will appear on your website. Must be either button or tab.
     * @param {String} displayStyle Choose how the messenger will appear on your website. Must be either button or tab.
     */
    setDisplayStyle(displayStyle) {
        this['displayStyle'] = displayStyle;
    }
/**
     * Returns With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @return {String}
     */
    getButtonIconUrl() {
        return this.buttonIconUrl;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} buttonIconUrl With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setButtonIconUrl(buttonIconUrl) {
        this['buttonIconUrl'] = buttonIconUrl;
    }
/**
     * Returns With the button style Web Messenger, you have the option of specifying the button width.
     * @return {String}
     */
    getButtonWidth() {
        return this.buttonWidth;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button width.
     * @param {String} buttonWidth With the button style Web Messenger, you have the option of specifying the button width.
     */
    setButtonWidth(buttonWidth) {
        this['buttonWidth'] = buttonWidth;
    }
/**
     * Returns With the button style Web Messenger, you have the option of specifying the button height.
     * @return {String}
     */
    getButtonHeight() {
        return this.buttonHeight;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button height.
     * @param {String} buttonHeight With the button style Web Messenger, you have the option of specifying the button height.
     */
    setButtonHeight(buttonHeight) {
        this['buttonHeight'] = buttonHeight;
    }
/**
     * Returns Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     * @return {Array.<String>}
     */
    getIntegrationOrder() {
        return this.integrationOrder;
    }

    /**
     * Sets Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     * @param {Array.<String>} integrationOrder Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     */
    setIntegrationOrder(integrationOrder) {
        this['integrationOrder'] = integrationOrder;
    }
/**
     * Returns A custom business name for the Web Messenger.
     * @return {String}
     */
    getBusinessName() {
        return this.businessName;
    }

    /**
     * Sets A custom business name for the Web Messenger.
     * @param {String} businessName A custom business name for the Web Messenger.
     */
    setBusinessName(businessName) {
        this['businessName'] = businessName;
    }
/**
     * Returns A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @return {String}
     */
    getBusinessIconUrl() {
        return this.businessIconUrl;
    }

    /**
     * Sets A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} businessIconUrl A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setBusinessIconUrl(businessIconUrl) {
        this['businessIconUrl'] = businessIconUrl;
    }
/**
     * Returns A background image url for the conversation. Image will be tiled to fit the window.
     * @return {String}
     */
    getBackgroundImageUrl() {
        return this.backgroundImageUrl;
    }

    /**
     * Sets A background image url for the conversation. Image will be tiled to fit the window.
     * @param {String} backgroundImageUrl A background image url for the conversation. Image will be tiled to fit the window.
     */
    setBackgroundImageUrl(backgroundImageUrl) {
        this['backgroundImageUrl'] = backgroundImageUrl;
    }
/**
     * Returns A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     * @return {Array.<String>}
     */
    getOriginWhitelist() {
        return this.originWhitelist;
    }

    /**
     * Sets A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     * @param {Array.<String>} originWhitelist A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     */
    setOriginWhitelist(originWhitelist) {
        this['originWhitelist'] = originWhitelist;
    }
/**
     * Returns Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture}
     */
    getPrechatCapture() {
        return this.prechatCapture;
    }

    /**
     * Sets Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     */
    setPrechatCapture(prechatCapture) {
        this['prechatCapture'] = prechatCapture;
    }
/**
     * Returns Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @return {String}
     */
    getHsmFallbackLanguage() {
        return this.hsmFallbackLanguage;
    }

    /**
     * Sets Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @param {String} hsmFallbackLanguage Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     */
    setHsmFallbackLanguage(hsmFallbackLanguage) {
        this['hsmFallbackLanguage'] = hsmFallbackLanguage;
    }
/**
     * Returns The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountId() {
        return this.accountId;
    }

    /**
     * Sets The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @param {String} accountId The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     */
    setAccountId(accountId) {
        this['accountId'] = accountId;
    }
/**
     * Returns An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountManagementAccessToken() {
        return this.accountManagementAccessToken;
    }

    /**
     * Sets An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @param {String} accountManagementAccessToken An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     */
    setAccountManagementAccessToken(accountManagementAccessToken) {
        this['accountManagementAccessToken'] = accountManagementAccessToken;
    }

}

/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdate.prototype['displayName'] = undefined;

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
IntegrationUpdate.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
IntegrationUpdate.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the web messenger integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
IntegrationUpdate.prototype['canUserCreateMoreConversations'] = undefined;

/**
 * The binary of your APN certificate base64 encoded.
 * @member {String} certificate
 */
IntegrationUpdate.prototype['certificate'] = undefined;

/**
 * The password for your APN certificate.
 * @member {String} password
 */
IntegrationUpdate.prototype['password'] = undefined;

/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
IntegrationUpdate.prototype['production'] = undefined;

/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
IntegrationUpdate.prototype['autoUpdateBadge'] = undefined;

/**
 * A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
 * @member {Boolean} hideUnsubscribeLink
 */
IntegrationUpdate.prototype['hideUnsubscribeLink'] = undefined;

/**
 * Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
 * @member {String} fromAddress
 */
IntegrationUpdate.prototype['fromAddress'] = undefined;

/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
IntegrationUpdate.prototype['pageAccessToken'] = undefined;

/**
 * This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
 * @member {String} brandColor
 * @default '65758e'
 */
IntegrationUpdate.prototype['brandColor'] = '65758e';

/**
 * When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
 * @member {Boolean} fixedIntroPane
 * @default false
 */
IntegrationUpdate.prototype['fixedIntroPane'] = false;

/**
 * This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
 * @member {String} conversationColor
 * @default '0099ff'
 */
IntegrationUpdate.prototype['conversationColor'] = '0099ff';

/**
 * This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
 * @member {String} actionColor
 * @default '0099ff'
 */
IntegrationUpdate.prototype['actionColor'] = '0099ff';

/**
 * Choose how the messenger will appear on your website. Must be either button or tab.
 * @member {String} displayStyle
 * @default 'button'
 */
IntegrationUpdate.prototype['displayStyle'] = 'button';

/**
 * With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} buttonIconUrl
 */
IntegrationUpdate.prototype['buttonIconUrl'] = undefined;

/**
 * With the button style Web Messenger, you have the option of specifying the button width.
 * @member {String} buttonWidth
 * @default '58'
 */
IntegrationUpdate.prototype['buttonWidth'] = '58';

/**
 * With the button style Web Messenger, you have the option of specifying the button height.
 * @member {String} buttonHeight
 * @default '58'
 */
IntegrationUpdate.prototype['buttonHeight'] = '58';

/**
 * Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
 * @member {Array.<String>} integrationOrder
 */
IntegrationUpdate.prototype['integrationOrder'] = undefined;

/**
 * A custom business name for the Web Messenger.
 * @member {String} businessName
 */
IntegrationUpdate.prototype['businessName'] = undefined;

/**
 * A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} businessIconUrl
 */
IntegrationUpdate.prototype['businessIconUrl'] = undefined;

/**
 * A background image url for the conversation. Image will be tiled to fit the window.
 * @member {String} backgroundImageUrl
 */
IntegrationUpdate.prototype['backgroundImageUrl'] = undefined;

/**
 * A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
 * @member {Array.<String>} originWhitelist
 */
IntegrationUpdate.prototype['originWhitelist'] = undefined;

/**
 * Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture
 */
IntegrationUpdate.prototype['prechatCapture'] = undefined;

/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
IntegrationUpdate.prototype['hsmFallbackLanguage'] = 'en_US';

/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
IntegrationUpdate.prototype['accountId'] = undefined;

/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
IntegrationUpdate.prototype['accountManagementAccessToken'] = undefined;


// Implement AndroidUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
AndroidUpdate.prototype['displayName'] = undefined;
/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidUpdate.prototype['serverKey'] = undefined;
/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidUpdate.prototype['senderId'] = undefined;
/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidUpdate.prototype['canUserCreateMoreConversations'] = undefined;
// Implement AppleUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
AppleUpdate.prototype['displayName'] = undefined;
// Implement CustomUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
CustomUpdate.prototype['displayName'] = undefined;
// Implement IosUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IosUpdate.prototype['displayName'] = undefined;
/**
 * The binary of your APN certificate base64 encoded.
 * @member {String} certificate
 */
IosUpdate.prototype['certificate'] = undefined;
/**
 * The password for your APN certificate.
 * @member {String} password
 */
IosUpdate.prototype['password'] = undefined;
/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
IosUpdate.prototype['production'] = undefined;
/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
IosUpdate.prototype['autoUpdateBadge'] = undefined;
/**
 * Allows users to create more than one conversation on the iOS integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
IosUpdate.prototype['canUserCreateMoreConversations'] = undefined;
// Implement LineUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
LineUpdate.prototype['displayName'] = undefined;
// Implement MailgunUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
MailgunUpdate.prototype['displayName'] = undefined;
/**
 * A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
 * @member {Boolean} hideUnsubscribeLink
 */
MailgunUpdate.prototype['hideUnsubscribeLink'] = undefined;
/**
 * Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
 * @member {String} fromAddress
 */
MailgunUpdate.prototype['fromAddress'] = undefined;
// Implement MessageBirdUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
MessageBirdUpdate.prototype['displayName'] = undefined;
// Implement MessengerUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
MessengerUpdate.prototype['displayName'] = undefined;
/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
MessengerUpdate.prototype['pageAccessToken'] = undefined;
// Implement TelegramUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
TelegramUpdate.prototype['displayName'] = undefined;
// Implement TwilioUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
TwilioUpdate.prototype['displayName'] = undefined;
// Implement TwitterUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
TwitterUpdate.prototype['displayName'] = undefined;
// Implement ViberUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
ViberUpdate.prototype['displayName'] = undefined;
// Implement WebUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
WebUpdate.prototype['displayName'] = undefined;
/**
 * This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
 * @member {String} brandColor
 * @default '65758e'
 */
WebUpdate.prototype['brandColor'] = '65758e';
/**
 * When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
 * @member {Boolean} fixedIntroPane
 * @default false
 */
WebUpdate.prototype['fixedIntroPane'] = false;
/**
 * This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
 * @member {String} conversationColor
 * @default '0099ff'
 */
WebUpdate.prototype['conversationColor'] = '0099ff';
/**
 * This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
 * @member {String} actionColor
 * @default '0099ff'
 */
WebUpdate.prototype['actionColor'] = '0099ff';
/**
 * Choose how the messenger will appear on your website. Must be either button or tab.
 * @member {String} displayStyle
 * @default 'button'
 */
WebUpdate.prototype['displayStyle'] = 'button';
/**
 * With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} buttonIconUrl
 */
WebUpdate.prototype['buttonIconUrl'] = undefined;
/**
 * With the button style Web Messenger, you have the option of specifying the button width.
 * @member {String} buttonWidth
 * @default '58'
 */
WebUpdate.prototype['buttonWidth'] = '58';
/**
 * With the button style Web Messenger, you have the option of specifying the button height.
 * @member {String} buttonHeight
 * @default '58'
 */
WebUpdate.prototype['buttonHeight'] = '58';
/**
 * Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
 * @member {Array.<String>} integrationOrder
 */
WebUpdate.prototype['integrationOrder'] = undefined;
/**
 * A custom business name for the Web Messenger.
 * @member {String} businessName
 */
WebUpdate.prototype['businessName'] = undefined;
/**
 * A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} businessIconUrl
 */
WebUpdate.prototype['businessIconUrl'] = undefined;
/**
 * A background image url for the conversation. Image will be tiled to fit the window.
 * @member {String} backgroundImageUrl
 */
WebUpdate.prototype['backgroundImageUrl'] = undefined;
/**
 * A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
 * @member {Array.<String>} originWhitelist
 */
WebUpdate.prototype['originWhitelist'] = undefined;
/**
 * Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture
 */
WebUpdate.prototype['prechatCapture'] = undefined;
/**
 * Allows users to create more than one conversation on the web messenger integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
WebUpdate.prototype['canUserCreateMoreConversations'] = undefined;
// Implement WhatsAppUpdate interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
WhatsAppUpdate.prototype['displayName'] = undefined;
/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
WhatsAppUpdate.prototype['hsmFallbackLanguage'] = 'en_US';
/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
WhatsAppUpdate.prototype['accountId'] = undefined;
/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
WhatsAppUpdate.prototype['accountManagementAccessToken'] = undefined;




export default IntegrationUpdate;

