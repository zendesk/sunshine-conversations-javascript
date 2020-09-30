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

/**
 * The Field model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Field
 * @version 9.0.0
 */
class Field {
    /**
     * Constructs a new <code>Field</code>.
     * Properties that can be expected to receive inside a form or formResponse message field. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Field
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} The field type.
     * @param name {String} The name of the field. Must be unique per form or formResponse.
     * @param label {String} The label of the field. What the field is displayed as on Web Messenger.
     */
    constructor(type, name, label) { 
        
        Field.initialize(this, type, name, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, label) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} The populated <code>Field</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Field();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('placeholder')) {
                obj['placeholder'] = ApiClient.convertToType(data['placeholder'], 'String');
            }
            if (data.hasOwnProperty('minSize')) {
                obj['minSize'] = ApiClient.convertToType(data['minSize'], 'Number');
            }
            if (data.hasOwnProperty('maxSize')) {
                obj['maxSize'] = ApiClient.convertToType(data['maxSize'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], [Object]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);
            }
        }
        return obj;
    }

/**
     * Returns The field type.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The field type.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type The field type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The name of the field. Must be unique per form or formResponse.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the field. Must be unique per form or formResponse.
     * @param {String} name The name of the field. Must be unique per form or formResponse.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The label of the field. What the field is displayed as on Web Messenger.
     * @return {String}
     */
    getLabel() {
        return this.label;
    }

    /**
     * Sets The label of the field. What the field is displayed as on Web Messenger.
     * @param {String} label The label of the field. What the field is displayed as on Web Messenger.
     */
    setLabel(label) {
        this['label'] = label;
    }
/**
     * Returns Placeholder text for the field. form message only.
     * @return {String}
     */
    getPlaceholder() {
        return this.placeholder;
    }

    /**
     * Sets Placeholder text for the field. form message only.
     * @param {String} placeholder Placeholder text for the field. form message only.
     */
    setPlaceholder(placeholder) {
        this['placeholder'] = placeholder;
    }
/**
     * Returns The minimum allowed length for the response for a field of type text. form message only.
     * minimum: 1
     * maximum: 128
     * @return {Number}
     */
    getMinSize() {
        return this.minSize;
    }

    /**
     * Sets The minimum allowed length for the response for a field of type text. form message only.
     * @param {Number} minSize The minimum allowed length for the response for a field of type text. form message only.
     */
    setMinSize(minSize) {
        this['minSize'] = minSize;
    }
/**
     * Returns The maximum allowed length for the response for a field of type text. form message only.
     * minimum: 1
     * maximum: 128
     * @return {Number}
     */
    getMaxSize() {
        return this.maxSize;
    }

    /**
     * Sets The maximum allowed length for the response for a field of type text. form message only.
     * @param {Number} maxSize The maximum allowed length for the response for a field of type text. form message only.
     */
    setMaxSize(maxSize) {
        this['maxSize'] = maxSize;
    }
/**
     * Returns Specifies the response for a text field.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets Specifies the response for a text field.
     * @param {String} text Specifies the response for a text field.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Specifies the response for a email field.
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Specifies the response for a email field.
     * @param {String} email Specifies the response for a email field.
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns Array of objects representing the response for a field of type select. form and formResponse messages only.
     * @return {Array.<Object>}
     */
    getSelect() {
        return this.select;
    }

    /**
     * Sets Array of objects representing the response for a field of type select. form and formResponse messages only.
     * @param {Array.<Object>} select Array of objects representing the response for a field of type select. form and formResponse messages only.
     */
    setSelect(select) {
        this['select'] = select;
    }
/**
     * Returns Array of objects representing options for a field of type select.
     * @return {Array.<Object>}
     */
    getOptions() {
        return this.options;
    }

    /**
     * Sets Array of objects representing options for a field of type select.
     * @param {Array.<Object>} options Array of objects representing options for a field of type select.
     */
    setOptions(options) {
        this['options'] = options;
    }

}

/**
 * The field type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type
 */
Field.prototype['type'] = undefined;

/**
 * The name of the field. Must be unique per form or formResponse.
 * @member {String} name
 */
Field.prototype['name'] = undefined;

/**
 * The label of the field. What the field is displayed as on Web Messenger.
 * @member {String} label
 */
Field.prototype['label'] = undefined;

/**
 * Placeholder text for the field. form message only.
 * @member {String} placeholder
 */
Field.prototype['placeholder'] = undefined;

/**
 * The minimum allowed length for the response for a field of type text. form message only.
 * @member {Number} minSize
 * @default 1
 */
Field.prototype['minSize'] = 1;

/**
 * The maximum allowed length for the response for a field of type text. form message only.
 * @member {Number} maxSize
 * @default 128
 */
Field.prototype['maxSize'] = 128;

/**
 * Specifies the response for a text field.
 * @member {String} text
 */
Field.prototype['text'] = undefined;

/**
 * Specifies the response for a email field.
 * @member {String} email
 */
Field.prototype['email'] = undefined;

/**
 * Array of objects representing the response for a field of type select. form and formResponse messages only.
 * @member {Array.<Object>} select
 */
Field.prototype['select'] = undefined;

/**
 * Array of objects representing options for a field of type select.
 * @member {Array.<Object>} options
 */
Field.prototype['options'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Field['TypeEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "select"
     * @const
     */
    "select": "select",

    /**
     * value: "text"
     * @const
     */
    "text": "text"
};



export default Field;

