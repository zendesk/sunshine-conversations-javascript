/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The MessengerAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
 * @version 9.4.0
 */
class MessengerAllOf {
    /**
     * Constructs a new <code>MessengerAllOf</code>.
     * Facebook Messenger Setup steps: Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); The Facebook app must have been submitted to Facebook for app review with the “manage_pages” (to retrieve Page Access Tokens for the Pages, apps that the app user administers and set a webhook) and “pages_messaging” (to send messages) permissions. In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
     * @param pageAccessToken {String} A Facebook Page Access Token.
     * @param appId {String} A Facebook App ID.
     * @param appSecret {String} A Facebook App Secret.
     */
    constructor(pageAccessToken, appId, appSecret) { 
        
        MessengerAllOf.initialize(this, pageAccessToken, appId, appSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pageAccessToken, appId, appSecret) { 
        obj['pageAccessToken'] = pageAccessToken;
        obj['appId'] = appId;
        obj['appSecret'] = appSecret;
    }

    /**
     * Constructs a <code>MessengerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf} The populated <code>MessengerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessengerAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('appSecret')) {
                obj['appSecret'] = ApiClient.convertToType(data['appSecret'], 'String');
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
     * Returns A Facebook App ID.
     * @return {String}
     */
    getAppId() {
        return this.appId;
    }

    /**
     * Sets A Facebook App ID.
     * @param {String} appId A Facebook App ID.
     */
    setAppId(appId) {
        this['appId'] = appId;
    }
/**
     * Returns A Facebook App Secret.
     * @return {String}
     */
    getAppSecret() {
        return this.appSecret;
    }

    /**
     * Sets A Facebook App Secret.
     * @param {String} appSecret A Facebook App Secret.
     */
    setAppSecret(appSecret) {
        this['appSecret'] = appSecret;
    }

}

/**
 * The type of integration.
 * @member {String} type
 * @default 'messenger'
 */
MessengerAllOf.prototype['type'] = 'messenger';

/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
MessengerAllOf.prototype['pageAccessToken'] = undefined;

/**
 * A Facebook App ID.
 * @member {String} appId
 */
MessengerAllOf.prototype['appId'] = undefined;

/**
 * A Facebook App Secret.
 * @member {String} appSecret
 */
MessengerAllOf.prototype['appSecret'] = undefined;






export default MessengerAllOf;

