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
import MatchCriteriaMailgun from './MatchCriteriaMailgun';
import MatchCriteriaMessagebird from './MatchCriteriaMessagebird';
import MatchCriteriaTwilio from './MatchCriteriaTwilio';
import MatchCriteriaWhatsapp from './MatchCriteriaWhatsapp';

/**
 * The MatchCriteria model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
 * @version 9.0.1
 */
class MatchCriteria {
    /**
     * Constructs a new <code>MatchCriteria</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsapp
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param address {String} The user’s email address.
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    constructor(type, integrationId, address, phoneNumber) { 
        MatchCriteriaMailgun.initialize(this, type, integrationId, address);MatchCriteriaMessagebird.initialize(this, type, integrationId, phoneNumber);MatchCriteriaTwilio.initialize(this, type, integrationId, phoneNumber);MatchCriteriaWhatsapp.initialize(this, type, integrationId, phoneNumber);
        MatchCriteria.initialize(this, type, integrationId, address, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, integrationId, address, phoneNumber) { 
        obj['type'] = type;
        obj['integrationId'] = integrationId;
        obj['address'] = address;
        obj['phoneNumber'] = phoneNumber;
    }

    /**
     * Constructs a <code>MatchCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} The populated <code>MatchCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteria();
            MatchCriteriaMailgun.constructFromObject(data, obj);
            MatchCriteriaMessagebird.constructFromObject(data, obj);
            MatchCriteriaTwilio.constructFromObject(data, obj);
            MatchCriteriaWhatsapp.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The channel type.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The ID of the integration to link. Must match the provided type.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration to link. Must match the provided type.
     * @param {String} integrationId The ID of the integration to link. Must match the provided type.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @return {Boolean}
     */
    getPrimary() {
        return this.primary;
    }

    /**
     * Sets Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @param {Boolean} primary Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     */
    setPrimary(primary) {
        this['primary'] = primary;
    }
/**
     * Returns The user’s email address.
     * @return {String}
     */
    getAddress() {
        return this.address;
    }

    /**
     * Sets The user’s email address.
     * @param {String} address The user’s email address.
     */
    setAddress(address) {
        this['address'] = address;
    }
/**
     * Returns May be specified to set the subject for the outgoing email.
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets May be specified to set the subject for the outgoing email.
     * @param {String} subject May be specified to set the subject for the outgoing email.
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * Returns The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @return {String}
     */
    getPhoneNumber() {
        return this.phoneNumber;
    }

    /**
     * Sets The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @param {String} phoneNumber The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    setPhoneNumber(phoneNumber) {
        this['phoneNumber'] = phoneNumber;
    }

}

/**
 * The channel type.
 * @member {String} type
 * @default 'whatsapp'
 */
MatchCriteria.prototype['type'] = 'whatsapp';

/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteria.prototype['integrationId'] = undefined;

/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteria.prototype['primary'] = true;

/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteria.prototype['address'] = undefined;

/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteria.prototype['subject'] = 'New message from {appName}';

/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteria.prototype['phoneNumber'] = undefined;


// Implement MatchCriteriaMailgun interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'mailgun'
 */
MatchCriteriaMailgun.prototype['type'] = 'mailgun';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMailgun.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMailgun.prototype['primary'] = true;
/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteriaMailgun.prototype['address'] = undefined;
/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteriaMailgun.prototype['subject'] = 'New message from {appName}';
// Implement MatchCriteriaMessagebird interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'messagebird'
 */
MatchCriteriaMessagebird.prototype['type'] = 'messagebird';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMessagebird.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMessagebird.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaMessagebird.prototype['phoneNumber'] = undefined;
// Implement MatchCriteriaTwilio interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'twilio'
 */
MatchCriteriaTwilio.prototype['type'] = 'twilio';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaTwilio.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaTwilio.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaTwilio.prototype['phoneNumber'] = undefined;
// Implement MatchCriteriaWhatsapp interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'whatsapp'
 */
MatchCriteriaWhatsapp.prototype['type'] = 'whatsapp';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaWhatsapp.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaWhatsapp.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaWhatsapp.prototype['phoneNumber'] = undefined;




export default MatchCriteria;

