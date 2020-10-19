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
import IntegrationUpdateBase from './IntegrationUpdateBase';
import PrechatCapture from './PrechatCapture';
import WebUpdateAllOf from './WebUpdateAllOf';

/**
 * The WebUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate
 * @version 9.0.1
 */
class WebUpdate {
    /**
     * Constructs a new <code>WebUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);WebUpdateAllOf.initialize(this);
        WebUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdate} The populated <code>WebUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            WebUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
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
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
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

}

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


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;
// Implement WebUpdateAllOf interface:
/**
 * This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
 * @member {String} brandColor
 * @default '65758e'
 */
WebUpdateAllOf.prototype['brandColor'] = '65758e';
/**
 * When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
 * @member {Boolean} fixedIntroPane
 * @default false
 */
WebUpdateAllOf.prototype['fixedIntroPane'] = false;
/**
 * This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
 * @member {String} conversationColor
 * @default '0099ff'
 */
WebUpdateAllOf.prototype['conversationColor'] = '0099ff';
/**
 * This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
 * @member {String} actionColor
 * @default '0099ff'
 */
WebUpdateAllOf.prototype['actionColor'] = '0099ff';
/**
 * Choose how the messenger will appear on your website. Must be either button or tab.
 * @member {String} displayStyle
 * @default 'button'
 */
WebUpdateAllOf.prototype['displayStyle'] = 'button';
/**
 * With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} buttonIconUrl
 */
WebUpdateAllOf.prototype['buttonIconUrl'] = undefined;
/**
 * With the button style Web Messenger, you have the option of specifying the button width.
 * @member {String} buttonWidth
 * @default '58'
 */
WebUpdateAllOf.prototype['buttonWidth'] = '58';
/**
 * With the button style Web Messenger, you have the option of specifying the button height.
 * @member {String} buttonHeight
 * @default '58'
 */
WebUpdateAllOf.prototype['buttonHeight'] = '58';
/**
 * Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
 * @member {Array.<String>} integrationOrder
 */
WebUpdateAllOf.prototype['integrationOrder'] = undefined;
/**
 * A custom business name for the Web Messenger.
 * @member {String} businessName
 */
WebUpdateAllOf.prototype['businessName'] = undefined;
/**
 * A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} businessIconUrl
 */
WebUpdateAllOf.prototype['businessIconUrl'] = undefined;
/**
 * A background image url for the conversation. Image will be tiled to fit the window.
 * @member {String} backgroundImageUrl
 */
WebUpdateAllOf.prototype['backgroundImageUrl'] = undefined;
/**
 * A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
 * @member {Array.<String>} originWhitelist
 */
WebUpdateAllOf.prototype['originWhitelist'] = undefined;
/**
 * Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture
 */
WebUpdateAllOf.prototype['prechatCapture'] = undefined;
/**
 * Allows users to create more than one conversation on the web messenger integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
WebUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default WebUpdate;

