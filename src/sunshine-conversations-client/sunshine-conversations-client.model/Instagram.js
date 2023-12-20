/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.1.0
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
import InstagramAllOf from './InstagramAllOf';
import Integration from './Integration';
import Status from './Status';

/**
 * The Instagram model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Instagram
 * @version 12.1.0
 */
class Instagram {
    /**
     * Constructs a new <code>Instagram</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Instagram
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramAllOf
     * @param type {String} Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @param pageAccessToken {String} The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @param appId {String} Your Facebook App ID.
     * @param appSecret {String} Your Facebook App secret.
     */
    constructor(type, pageAccessToken, appId, appSecret) { 
        Integration.initialize(this, type);InstagramAllOf.initialize(this, pageAccessToken, appId, appSecret);
        Instagram.initialize(this, type, pageAccessToken, appId, appSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, pageAccessToken, appId, appSecret) { 
        obj['pageAccessToken'] = pageAccessToken;
        obj['appId'] = appId;
        obj['appSecret'] = appSecret;
    }

    /**
     * Constructs a <code>Instagram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Instagram} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Instagram} The populated <code>Instagram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instagram();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            InstagramAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('businessUsername')) {
                obj['businessUsername'] = ApiClient.convertToType(data['businessUsername'], 'String');
            }
            if (data.hasOwnProperty('pageId')) {
                obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
            }
            if (data.hasOwnProperty('businessId')) {
                obj['businessId'] = ApiClient.convertToType(data['businessId'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @param {String} type Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @return {String}
     */
    getPageAccessToken() {
        return this.pageAccessToken;
    }

    /**
     * Sets The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @param {String} pageAccessToken The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     */
    setPageAccessToken(pageAccessToken) {
        this['pageAccessToken'] = pageAccessToken;
    }
/**
     * Returns Your Facebook App ID.
     * @return {String}
     */
    getAppId() {
        return this.appId;
    }

    /**
     * Sets Your Facebook App ID.
     * @param {String} appId Your Facebook App ID.
     */
    setAppId(appId) {
        this['appId'] = appId;
    }
/**
     * Returns Your Facebook App secret.
     * @return {String}
     */
    getAppSecret() {
        return this.appSecret;
    }

    /**
     * Sets Your Facebook App secret.
     * @param {String} appSecret Your Facebook App secret.
     */
    setAppSecret(appSecret) {
        this['appSecret'] = appSecret;
    }
/**
     * Returns Your Instagram Business account name
     * @return {String}
     */
    getBusinessName() {
        return this.businessName;
    }

    /**
     * Sets Your Instagram Business account name
     * @param {String} businessName Your Instagram Business account name
     */
    setBusinessName(businessName) {
        this['businessName'] = businessName;
    }
/**
     * Returns Your Instagram Business unique username
     * @return {String}
     */
    getBusinessUsername() {
        return this.businessUsername;
    }

    /**
     * Sets Your Instagram Business unique username
     * @param {String} businessUsername Your Instagram Business unique username
     */
    setBusinessUsername(businessUsername) {
        this['businessUsername'] = businessUsername;
    }
/**
     * Returns The ID of the Facebook Page linked to your Instagram Business account
     * @return {String}
     */
    getPageId() {
        return this.pageId;
    }

    /**
     * Sets The ID of the Facebook Page linked to your Instagram Business account
     * @param {String} pageId The ID of the Facebook Page linked to your Instagram Business account
     */
    setPageId(pageId) {
        this['pageId'] = pageId;
    }
/**
     * Returns The ID of the Instagram Business account
     * @return {String}
     */
    getBusinessId() {
        return this.businessId;
    }

    /**
     * Sets The ID of the Instagram Business account
     * @param {String} businessId The ID of the Instagram Business account
     */
    setBusinessId(businessId) {
        this['businessId'] = businessId;
    }
/**
     * Returns The Facebook user's username. This is returned when integrating through the Dashboard
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Sets The Facebook user's username. This is returned when integrating through the Dashboard
     * @param {String} username The Facebook user's username. This is returned when integrating through the Dashboard
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * Returns The Facebook user's user ID. This is returned when integrating through the Dashboard
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The Facebook user's user ID. This is returned when integrating through the Dashboard
     * @param {String} userId The Facebook user's user ID. This is returned when integrating through the Dashboard
     */
    setUserId(userId) {
        this['userId'] = userId;
    }

}

/**
 * Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
 * @member {String} type
 * @default 'instagram'
 */
Instagram.prototype['type'] = 'instagram';

/**
 * The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
 * @member {String} pageAccessToken
 */
Instagram.prototype['pageAccessToken'] = undefined;

/**
 * Your Facebook App ID.
 * @member {String} appId
 */
Instagram.prototype['appId'] = undefined;

/**
 * Your Facebook App secret.
 * @member {String} appSecret
 */
Instagram.prototype['appSecret'] = undefined;

/**
 * Your Instagram Business account name
 * @member {String} businessName
 */
Instagram.prototype['businessName'] = undefined;

/**
 * Your Instagram Business unique username
 * @member {String} businessUsername
 */
Instagram.prototype['businessUsername'] = undefined;

/**
 * The ID of the Facebook Page linked to your Instagram Business account
 * @member {String} pageId
 */
Instagram.prototype['pageId'] = undefined;

/**
 * The ID of the Instagram Business account
 * @member {String} businessId
 */
Instagram.prototype['businessId'] = undefined;

/**
 * The Facebook user's username. This is returned when integrating through the Dashboard
 * @member {String} username
 */
Instagram.prototype['username'] = undefined;

/**
 * The Facebook user's user ID. This is returned when integrating through the Dashboard
 * @member {String} userId
 */
Instagram.prototype['userId'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
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
// Implement InstagramAllOf interface:
/**
 * Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
 * @member {String} type
 * @default 'instagram'
 */
InstagramAllOf.prototype['type'] = 'instagram';
/**
 * The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
 * @member {String} pageAccessToken
 */
InstagramAllOf.prototype['pageAccessToken'] = undefined;
/**
 * Your Facebook App ID.
 * @member {String} appId
 */
InstagramAllOf.prototype['appId'] = undefined;
/**
 * Your Facebook App secret.
 * @member {String} appSecret
 */
InstagramAllOf.prototype['appSecret'] = undefined;
/**
 * Your Instagram Business account name
 * @member {String} businessName
 */
InstagramAllOf.prototype['businessName'] = undefined;
/**
 * Your Instagram Business unique username
 * @member {String} businessUsername
 */
InstagramAllOf.prototype['businessUsername'] = undefined;
/**
 * The ID of the Facebook Page linked to your Instagram Business account
 * @member {String} pageId
 */
InstagramAllOf.prototype['pageId'] = undefined;
/**
 * The ID of the Instagram Business account
 * @member {String} businessId
 */
InstagramAllOf.prototype['businessId'] = undefined;
/**
 * The Facebook user's username. This is returned when integrating through the Dashboard
 * @member {String} username
 */
InstagramAllOf.prototype['username'] = undefined;
/**
 * The Facebook user's user ID. This is returned when integrating through the Dashboard
 * @member {String} userId
 */
InstagramAllOf.prototype['userId'] = undefined;




export default Instagram;

