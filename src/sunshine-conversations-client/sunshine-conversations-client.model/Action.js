/**
 * Sunshine Conversations API
 * # Introduction <aside class=\"notice\">As a stepping stone to new and greater things, we’ve updated Sunshine Conversations API to v2. For users wanting to access v1, please proceed <a href=\"https://docs.smooch.io/rest/\">here</a>.  </aside>  Welcome to the Sunshine Conversations API. The API allows you to craft entirely unique messaging experiences for your app and website as well as talk to any backend or external service.  The Sunshine Conversations API is designed according to REST principles. The API accepts JSON in request bodies and requires that the content-type: application/json header be specified for  all such requests. The API will always respond with an object. Depending on context, resources may be returned as single objects or as arrays of objects, nested within the response object.  In some cases, the API will also facilitate cross-origin resource sharing so that it can be called from a web application.  <aside class=\"notice\">Note that for authenticated requests, cross-origin resource sharing is only available to appUser scoped credentials. Attempting to call the API from the browser using  app or account scoped credentials will result in a <a href=\"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy\">same-origin policy</a> browser error. For more information, refer  to the <a href=\"http://docs.smooch.io/guide/authorization/#handle-credentials-with-caution\">Authorization guide</a>.</aside>  ## Regions  Sunshine Conversations is available in the following regions. Each Sunshine Conversations region has its own API host.  | Region         | Host                       | | -------------- | -------------------------- | | United States  | https://api.smooch.io      | | European Union | https://api.eu-1.smooch.io |  For more information on regions, visit [the guide](/guide/regions/).  <aside class=\"notice\">When configuring an API host, make sure to always use `https`. Some API clients can have unexpected behaviour when following redirects from `http` to `https`.</aside>  ## Errors  Sunshine Conversations uses standard HTTP status codes to communicate errors. In general, a `2xx` status code indicates success while `4xx` indicates an error, in which case, the response body includes a JSON object which includes an array of errors, with a text `code` and `title` containing more details. Multiple errors can only be included in a `400 Bad Request`. A `5xx` status code indicates that something went wrong on our end.  ```javascript {    \"errors\":  [     {         \"code\": \"unauthorized\",         \"title\": \"Authorization is required\"     }    ] } ```  ## API Version  The latest version of the API is v2. Version v1.1 is still supported and you can continue using it but we encourage you to upgrade to the latest version. To learn more about API versioning at Sunshine Conversations, including instructions on how to upgrade to the latest version, [visit our docs](https://docs.smooch.io/guide/versioning).  ## API Pagination and Records Limits  Some APIs can be paginated by providing the `offset` query string parameter.  The `offset` is the number of initial records to skip before picking records to return (default 0).  The `limit` query string can also be provided to change the number of records to return (maximum 100, default 25).  All paginated endpoints will eventually support cursor pagination and `offset` based pagination support will be dropped.  ### Cursor Pagination  Some APIs are paginated through cursor pagination. Rather than providing an `offset`, a `page[after]` or `page[before]` query string parameter may be provided. `page[after]` and `page[before]` are cursors pointing to a record id.  The `page[after]` cursor indicates that only records **subsequent** to it should be returned.  The `page[before]` cursor indicates that only records **preceding** it should be returned.  **Only one** of `page[after]` or `page[before]` may be provided in a query, not both.  In cursor pagination, the equivalent to the `limit` query string is the `page[size]` query string parameter.  ## API Libraries  Sunshine Conversations provides an official API library for [Java](https://github.com/zendesk/sunshine-conversations-java), with more languages to come. These helpful libraries wrap calls to the API and can make interfacing with Sunshine Conversations easier.  ## Postman Collection  In addition to API libraries, Sunshine Conversations also has a Postman collection that can be used for development or testing purposes. See the [guide](https://docs.smooch.io/guide/postman-collection/) for information on how to install and use the collection in your Postman client.  ## Rate Limits  Sunshine Conversations APIs are subject to rate limiting. If the rate limit is exceeded Sunshine Conversations may return a `429 Too Many Requests` HTTP status code. We apply rate limits to prevent abuse, spam, denial-of-service attacks, and similar issues. Our goal is to keep the limits high enough so that any application using Sunshine Conversations as intended will not encounter them. However usage spikes do occur and encountering a rate limit may be unavoidable. In order to avoid production outages, when calling the Sunshine Conversations API you should implement `429` retry logic using exponential backoff and jitter.  If your use case involves making API calls in bulk, please [contact us](https://smooch.io/contact).  ## Request Size Limits  The Sunshine Conversations API imposes the following size limits on HTTP requests:  | Request Type   | Limit           | | -------------- | --------------- | | JSON           | 100kb           | | File upload  | 25mb            |  ## Authorization  This is an overview of how authorization works with the Sunshine Conversations API. Sunshine Conversations allows basic authentication or JSON Web Tokens (JWTs) as authentication methods for server-to-server calls. [See below](#authentication) for more details. There are two different authorization scopes available - app and account.  | Scope          | Authorized Methods                        | | -------------- | ----------------------------------------- | | app            | All methods besides Account Provisioning  | | account     | All methods                               |  The app scope can be used to access any of the Sunshine Conversations APIs, besides account provisioning methods, on behalf of a single app, or any app user related to that app. The account scope can be used to access any of the Sunshine Conversations and Account Provisioning APIs on behalf of the account owner, any app belonging to the account, or any app user related to those apps.  <aside class=\"notice\">An additional scope of `appUser` can also be used to authenticate users when using one of the Sunshine Conversations native SDK integrations. For information on how and when to use this scope, see the guide for <a href=\"https://docs.smooch.io/guide/authenticating-users/\">authenticating users.</a></aside>  ## Authentication  To authenticate requests to the API, you will need an API key, composed of a key id and a secret. For an overview of how authentication works in Sunshine Conversations and instructions on how to generate an API key, see the guide. API requests can be authenticated in two ways:  * With Basic authentication you can make requests using an API key directly.  * With JSON Web Tokens (JWTs) you sign tokens with an API key, which are then used to authenticate with the API. See [When to Use JWTs?](https://docs.smooch.io/guide/jwt/#when-to-use-jwts) to learn if JWTs are relevant for your usage.  * Before using an API key in production, make sure to familiarize yourself with best practices on how to [securely handle credentials](https://docs.smooch.io/guide/authentication-secure-credential-handling/).  ### Basic Authentication  API requests can be authenticated with [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) using an API key. The key id is used as the username and the secret as the password. The scope of access is determined by the owner of the API key. See the [guide](https://docs.smooch.io/guide/basic-authentication/#scope-of-access) for more details.  ### JWTs  JSON Web Tokens (JWTs) are an industry standard authentication method. The full specification is described [here](https://tools.ietf.org/html/rfc7519), and a set of supported JWT libraries for a variety of languages and platforms can be found at http://jwt.io. To summarize, a JWT is composed of a header, a payload, and a signature. The payload contains information called claims which describe the subject to whom the token was issued. The JWT itself is transmitted via the HTTP `authorization` header. The token should be prefixed with “Bearer” followed by a space. For example: `Bearer your-jwt`. To generate a JWT, you need an API key, which is composed of a key ID and a secret. The key ID is included in a JWT’s header, as the `kid` property, while the secret is used to sign the JWT. For more in-depth coverage, see the [guide](https://docs.smooch.io/guide/jwt).  #### Header   The JWT header must contain the key id (kid) of the API key that is used to sign it. The algorithm (alg) used should be HS256. Unsigned JWTs are not accepted.  ```javascript {     \"alg\": \"HS256\",     \"typ\": \"JWT\",     \"kid\": \"act_5963ceb97cde542d000dbdb1\" } ```  #### Payload The JWT payload must include a scope claim which specifies the caller’s scope of access.   * account-scoped JWTs must be generated with an API key associated with a Sunshine Conversations account (act_) or service account (svc_). ```javascript {     \"scope\": \"account\" } ```  * app-scoped JWTs can be generated with an API key associated with an app (app_).  ```javascript {     \"scope\": \"app\" }  ```
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
import Buy from './Buy';
import ExtraChannelOptions from './ExtraChannelOptions';
import Link from './Link';
import LocationRequest from './LocationRequest';
import Postback from './Postback';
import Reply from './Reply';
import Webview from './Webview';

/**
 * The Action model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Action
 * @version 9.0.0
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Action
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Buy
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Link
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Postback
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Reply
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Webview
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param amount {Number} The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param uri {String} The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param payload {String} A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param fallback {String} The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    constructor(type, text, amount, uri, payload, fallback) { 
        Buy.initialize(this, type, text, amount);Link.initialize(this, type, uri, text);LocationRequest.initialize(this, type, text);Postback.initialize(this, type, text, payload);Reply.initialize(this, type, text, payload);Webview.initialize(this, type, uri, text, fallback);
        Action.initialize(this, type, text, amount, uri, payload, fallback);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, amount, uri, payload, fallback) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['amount'] = amount;
        obj['uri'] = uri;
        obj['payload'] = payload;
        obj['fallback'] = fallback;
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Action} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();
            Buy.constructFromObject(data, obj);
            Link.constructFromObject(data, obj);
            LocationRequest.constructFromObject(data, obj);
            Postback.constructFromObject(data, obj);
            Reply.constructFromObject(data, obj);
            Webview.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('extraChannelOptions')) {
                obj['extraChannelOptions'] = ExtraChannelOptions.constructFromObject(data['extraChannelOptions']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('fallback')) {
                obj['fallback'] = ApiClient.convertToType(data['fallback'], 'String');
            }
            if (data.hasOwnProperty('openOnReceive')) {
                obj['openOnReceive'] = ApiClient.convertToType(data['openOnReceive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The type of action.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The button text.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @return {Number}
     */
    getAmount() {
        return this.amount;
    }

    /**
     * Sets The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param {Number} amount The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    setAmount(amount) {
        this['amount'] = amount;
    }
/**
     * Returns An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @return {String}
     */
    getCurrency() {
        return this.currency;
    }

    /**
     * Sets An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @param {String} currency An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     */
    setCurrency(currency) {
        this['currency'] = currency;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }
/**
     * Returns The webview URI. This is the URI that will open in the webview when clicking the button.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param {String} uri The webview URI. This is the URI that will open in the webview when clicking the button.
     */
    setUri(uri) {
        this['uri'] = uri;
    }
/**
     * Returns Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @return {Boolean}
     */
    getDefault() {
        return this.default;
    }

    /**
     * Sets Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @param {Boolean} _default Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     */
    setDefault(_default) {
        this['default'] = _default;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions}
     */
    getExtraChannelOptions() {
        return this.extraChannelOptions;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
     */
    setExtraChannelOptions(extraChannelOptions) {
        this['extraChannelOptions'] = extraChannelOptions;
    }
/**
     * Returns A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @return {String}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * Sets A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param {String} payload A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     */
    setPayload(payload) {
        this['payload'] = payload;
    }
/**
     * Returns An icon to render next to the reply option.
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets An icon to render next to the reply option.
     * @param {String} iconUrl An icon to render next to the reply option.
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }
/**
     * Returns The size to display a webview. Used for actions of type webview.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The size to display a webview. Used for actions of type webview.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum} size The size to display a webview. Used for actions of type webview.
     */
    setSize(size) {
        this['size'] = size;
    }
/**
     * Returns The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @return {String}
     */
    getFallback() {
        return this.fallback;
    }

    /**
     * Sets The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @param {String} fallback The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    setFallback(fallback) {
        this['fallback'] = fallback;
    }
/**
     * Returns Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @return {Boolean}
     */
    getOpenOnReceive() {
        return this.openOnReceive;
    }

    /**
     * Sets Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @param {Boolean} openOnReceive Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     */
    setOpenOnReceive(openOnReceive) {
        this['openOnReceive'] = openOnReceive;
    }

}

/**
 * The type of action.
 * @member {String} type
 */
Action.prototype['type'] = undefined;

/**
 * The button text.
 * @member {String} text
 */
Action.prototype['text'] = undefined;

/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
Action.prototype['amount'] = undefined;

/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
Action.prototype['currency'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Action.prototype['metadata'] = undefined;

/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
Action.prototype['uri'] = undefined;

/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Action.prototype['default'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Action.prototype['extraChannelOptions'] = undefined;

/**
 * A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
 * @member {String} payload
 */
Action.prototype['payload'] = undefined;

/**
 * An icon to render next to the reply option.
 * @member {String} iconUrl
 */
Action.prototype['iconUrl'] = undefined;

/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Action.SizeEnum} size
 */
Action.prototype['size'] = undefined;

/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
Action.prototype['fallback'] = undefined;

/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
Action.prototype['openOnReceive'] = undefined;


// Implement Buy interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'buy'
 */
Buy.prototype['type'] = 'buy';
/**
 * The button text.
 * @member {String} text
 */
Buy.prototype['text'] = undefined;
/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
Buy.prototype['amount'] = undefined;
/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
Buy.prototype['currency'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Buy.prototype['metadata'] = undefined;
// Implement Link interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'link'
 */
Link.prototype['type'] = 'link';
/**
 * The action URI. This is the link that will be used in the clients when clicking the button.
 * @member {String} uri
 */
Link.prototype['uri'] = undefined;
/**
 * The button text.
 * @member {String} text
 */
Link.prototype['text'] = undefined;
/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Link.prototype['default'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Link.prototype['metadata'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Link.prototype['extraChannelOptions'] = undefined;
// Implement LocationRequest interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'locationRequest'
 */
LocationRequest.prototype['type'] = 'locationRequest';
/**
 * The button text.
 * @member {String} text
 */
LocationRequest.prototype['text'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
LocationRequest.prototype['metadata'] = undefined;
// Implement Postback interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'postback'
 */
Postback.prototype['type'] = 'postback';
/**
 * The button text.
 * @member {String} text
 */
Postback.prototype['text'] = undefined;
/**
 * The payload of a postback or reply button.
 * @member {Object} payload
 */
Postback.prototype['payload'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Postback.prototype['metadata'] = undefined;
// Implement Reply interface:
/**
 * The type of action.
 * @member {String} type
 */
Reply.prototype['type'] = undefined;
/**
 * The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
 * @member {String} text
 */
Reply.prototype['text'] = undefined;
/**
 * A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
 * @member {String} payload
 */
Reply.prototype['payload'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Reply.prototype['metadata'] = undefined;
/**
 * An icon to render next to the reply option.
 * @member {String} iconUrl
 */
Reply.prototype['iconUrl'] = undefined;
// Implement Webview interface:
/**
 * The type of action.
 * @member {String} type
 */
Webview.prototype['type'] = undefined;
/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
Webview.prototype['uri'] = undefined;
/**
 * The button text.
 * @member {String} text
 */
Webview.prototype['text'] = undefined;
/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Webview.prototype['default'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Webview.prototype['metadata'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Webview.prototype['extraChannelOptions'] = undefined;
/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum} size
 */
Webview.prototype['size'] = undefined;
/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
Webview.prototype['fallback'] = undefined;
/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
Webview.prototype['openOnReceive'] = undefined;



/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
Action['SizeEnum'] = {

    /**
     * value: "compact"
     * @const
     */
    "compact": "compact",

    /**
     * value: "tall"
     * @const
     */
    "tall": "tall",

    /**
     * value: "full"
     * @const
     */
    "full": "full"
};



export default Action;

