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
import Integration from './Integration';
import Status from './Status';
import WhatsappAllOf from './WhatsappAllOf';

/**
 * The Whatsapp model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
 * @version 9.0.1
 */
class Whatsapp {
    /**
     * Constructs a new <code>Whatsapp</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsappAllOf
     * @param type {String} The type of integration.
     * @param deploymentId {String} The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    constructor(type, deploymentId) { 
        Integration.initialize(this, type);WhatsappAllOf.initialize(this, deploymentId);
        Whatsapp.initialize(this, type, deploymentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, deploymentId) { 
        obj['deploymentId'] = deploymentId;
    }

    /**
     * Constructs a <code>Whatsapp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} The populated <code>Whatsapp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Whatsapp();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            WhatsappAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('deploymentId')) {
                obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
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
     * Returns The type of integration.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     * @return {String}
     */
    getDeploymentId() {
        return this.deploymentId;
    }

    /**
     * Sets The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     * @param {String} deploymentId The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    setDeploymentId(deploymentId) {
        this['deploymentId'] = deploymentId;
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
 * The type of integration.
 * @member {String} type
 * @default 'whatsapp'
 */
Whatsapp.prototype['type'] = 'whatsapp';

/**
 * The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
 * @member {String} deploymentId
 */
Whatsapp.prototype['deploymentId'] = undefined;

/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
Whatsapp.prototype['hsmFallbackLanguage'] = 'en_US';

/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
Whatsapp.prototype['accountId'] = undefined;

/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
Whatsapp.prototype['accountManagementAccessToken'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * The type of integration.
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement WhatsappAllOf interface:
/**
 * The type of integration.
 * @member {String} type
 * @default 'whatsapp'
 */
WhatsappAllOf.prototype['type'] = 'whatsapp';
/**
 * The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
 * @member {String} deploymentId
 */
WhatsappAllOf.prototype['deploymentId'] = undefined;
/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
WhatsappAllOf.prototype['hsmFallbackLanguage'] = 'en_US';
/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
WhatsappAllOf.prototype['accountId'] = undefined;
/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
WhatsappAllOf.prototype['accountManagementAccessToken'] = undefined;




export default Whatsapp;

