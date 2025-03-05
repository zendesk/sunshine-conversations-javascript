/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.0
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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';
import TwitterAllOf from './TwitterAllOf';

/**
 * The Twitter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Twitter
 * @version 15.0.0
 */
class Twitter {
    /**
     * Constructs a new <code>Twitter</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     * @param tier {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter.TierEnum} Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
     * @param consumerKey {String} The consumer key for your Twitter app.
     * @param consumerSecret {String} The consumer key secret for your Twitter app.
     * @param accessTokenKey {String} The access token key obtained from your user via oauth.
     * @param accessTokenSecret {String} The access token secret obtained from your user via oauth.
     */
    constructor(type, tier, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret) { 
        Integration.initialize(this, type);TwitterAllOf.initialize(this, tier, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Twitter.initialize(this, type, tier, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, tier, consumerKey, consumerSecret, accessTokenKey, accessTokenSecret) { 
        obj['tier'] = tier;
        obj['consumerKey'] = consumerKey;
        obj['consumerSecret'] = consumerSecret;
        obj['accessTokenKey'] = accessTokenKey;
        obj['accessTokenSecret'] = accessTokenSecret;
    }

    /**
     * Constructs a <code>Twitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter} The populated <code>Twitter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Twitter();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            TwitterAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('tier')) {
                obj['tier'] = ApiClient.convertToType(data['tier'], 'String');
            }
            if (data.hasOwnProperty('envName')) {
                obj['envName'] = ApiClient.convertToType(data['envName'], 'String');
            }
            if (data.hasOwnProperty('consumerKey')) {
                obj['consumerKey'] = ApiClient.convertToType(data['consumerKey'], 'String');
            }
            if (data.hasOwnProperty('consumerSecret')) {
                obj['consumerSecret'] = ApiClient.convertToType(data['consumerSecret'], 'String');
            }
            if (data.hasOwnProperty('accessTokenKey')) {
                obj['accessTokenKey'] = ApiClient.convertToType(data['accessTokenKey'], 'String');
            }
            if (data.hasOwnProperty('accessTokenSecret')) {
                obj['accessTokenSecret'] = ApiClient.convertToType(data['accessTokenSecret'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponder')) {
                obj['defaultResponder'] = DefaultResponderDefaultResponder.constructFromObject(data['defaultResponder']);
            }
        }
        return obj;
    }

/**
     * Returns To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     * @param {String} type To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter.TierEnum}
     */
    getTier() {
        return this.tier;
    }

    /**
     * Sets Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter.TierEnum} tier Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
     */
    setTier(tier) {
        this['tier'] = tier;
    }
/**
     * Returns The Twitter dev environments label. Only required / used for sandbox and premium tiers.
     * @return {String}
     */
    getEnvName() {
        return this.envName;
    }

    /**
     * Sets The Twitter dev environments label. Only required / used for sandbox and premium tiers.
     * @param {String} envName The Twitter dev environments label. Only required / used for sandbox and premium tiers.
     */
    setEnvName(envName) {
        this['envName'] = envName;
    }
/**
     * Returns The consumer key for your Twitter app.
     * @return {String}
     */
    getConsumerKey() {
        return this.consumerKey;
    }

    /**
     * Sets The consumer key for your Twitter app.
     * @param {String} consumerKey The consumer key for your Twitter app.
     */
    setConsumerKey(consumerKey) {
        this['consumerKey'] = consumerKey;
    }
/**
     * Returns The consumer key secret for your Twitter app.
     * @return {String}
     */
    getConsumerSecret() {
        return this.consumerSecret;
    }

    /**
     * Sets The consumer key secret for your Twitter app.
     * @param {String} consumerSecret The consumer key secret for your Twitter app.
     */
    setConsumerSecret(consumerSecret) {
        this['consumerSecret'] = consumerSecret;
    }
/**
     * Returns The access token key obtained from your user via oauth.
     * @return {String}
     */
    getAccessTokenKey() {
        return this.accessTokenKey;
    }

    /**
     * Sets The access token key obtained from your user via oauth.
     * @param {String} accessTokenKey The access token key obtained from your user via oauth.
     */
    setAccessTokenKey(accessTokenKey) {
        this['accessTokenKey'] = accessTokenKey;
    }
/**
     * Returns The access token secret obtained from your user via oauth.
     * @return {String}
     */
    getAccessTokenSecret() {
        return this.accessTokenSecret;
    }

    /**
     * Sets The access token secret obtained from your user via oauth.
     * @param {String} accessTokenSecret The access token secret obtained from your user via oauth.
     */
    setAccessTokenSecret(accessTokenSecret) {
        this['accessTokenSecret'] = accessTokenSecret;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     */
    setDefaultResponderId(defaultResponderId) {
        this['defaultResponderId'] = defaultResponderId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder}
     */
    getDefaultResponder() {
        return this.defaultResponder;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
     */
    setDefaultResponder(defaultResponder) {
        this['defaultResponder'] = defaultResponder;
    }

}

/**
 * To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
 * @member {String} type
 * @default 'twitter'
 */
Twitter.prototype['type'] = 'twitter';

/**
 * Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Twitter.TierEnum} tier
 */
Twitter.prototype['tier'] = undefined;

/**
 * The Twitter dev environments label. Only required / used for sandbox and premium tiers.
 * @member {String} envName
 */
Twitter.prototype['envName'] = undefined;

/**
 * The consumer key for your Twitter app.
 * @member {String} consumerKey
 */
Twitter.prototype['consumerKey'] = undefined;

/**
 * The consumer key secret for your Twitter app.
 * @member {String} consumerSecret
 */
Twitter.prototype['consumerSecret'] = undefined;

/**
 * The access token key obtained from your user via oauth.
 * @member {String} accessTokenKey
 */
Twitter.prototype['accessTokenKey'] = undefined;

/**
 * The access token secret obtained from your user via oauth.
 * @member {String} accessTokenSecret
 */
Twitter.prototype['accessTokenSecret'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Twitter.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Twitter.prototype['defaultResponder'] = undefined;


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
// Implement TwitterAllOf interface:
/**
 * To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
 * @member {String} type
 * @default 'twitter'
 */
TwitterAllOf.prototype['type'] = 'twitter';
/**
 * Your Twitter app's tier. Only \"enterprise\" is supported for new integrations.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} tier
 */
TwitterAllOf.prototype['tier'] = undefined;
/**
 * The Twitter dev environments label. Only required / used for sandbox and premium tiers.
 * @member {String} envName
 */
TwitterAllOf.prototype['envName'] = undefined;
/**
 * The consumer key for your Twitter app.
 * @member {String} consumerKey
 */
TwitterAllOf.prototype['consumerKey'] = undefined;
/**
 * The consumer key secret for your Twitter app.
 * @member {String} consumerSecret
 */
TwitterAllOf.prototype['consumerSecret'] = undefined;
/**
 * The access token key obtained from your user via oauth.
 * @member {String} accessTokenKey
 */
TwitterAllOf.prototype['accessTokenKey'] = undefined;
/**
 * The access token secret obtained from your user via oauth.
 * @member {String} accessTokenSecret
 */
TwitterAllOf.prototype['accessTokenSecret'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;



/**
 * Allowed values for the <code>tier</code> property.
 * @enum {String}
 * @readonly
 */
Twitter['TierEnum'] = {

    /**
     * value: "enterprise"
     * @const
     */
    "enterprise": "enterprise"
};



export default Twitter;

