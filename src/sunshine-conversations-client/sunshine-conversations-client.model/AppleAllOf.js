/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.5.1
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
 * The AppleAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf
 * @version 15.5.1
 */
class AppleAllOf {
    /**
     * Constructs a new <code>AppleAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf
     * @param businessId {String} Apple Messages for Business ID.
     * @param apiSecret {String} Your Apple API secret which is tied to your Messaging Service Provider.
     * @param mspId {String} Your Messaging Service Provider ID.
     */
    constructor(businessId, apiSecret, mspId) { 
        
        AppleAllOf.initialize(this, businessId, apiSecret, mspId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, businessId, apiSecret, mspId) { 
        obj['businessId'] = businessId;
        obj['apiSecret'] = apiSecret;
        obj['mspId'] = mspId;
    }

    /**
     * Constructs a <code>AppleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleAllOf} The populated <code>AppleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppleAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('businessId')) {
                obj['businessId'] = ApiClient.convertToType(data['businessId'], 'String');
            }
            if (data.hasOwnProperty('apiSecret')) {
                obj['apiSecret'] = ApiClient.convertToType(data['apiSecret'], 'String');
            }
            if (data.hasOwnProperty('mspId')) {
                obj['mspId'] = ApiClient.convertToType(data['mspId'], 'String');
            }
            if (data.hasOwnProperty('authenticationMessageSecret')) {
                obj['authenticationMessageSecret'] = ApiClient.convertToType(data['authenticationMessageSecret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     * @param {String} type To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Apple Messages for Business ID.
     * @return {String}
     */
    getBusinessId() {
        return this.businessId;
    }

    /**
     * Sets Apple Messages for Business ID.
     * @param {String} businessId Apple Messages for Business ID.
     */
    setBusinessId(businessId) {
        this['businessId'] = businessId;
    }
/**
     * Returns Your Apple API secret which is tied to your Messaging Service Provider.
     * @return {String}
     */
    getApiSecret() {
        return this.apiSecret;
    }

    /**
     * Sets Your Apple API secret which is tied to your Messaging Service Provider.
     * @param {String} apiSecret Your Apple API secret which is tied to your Messaging Service Provider.
     */
    setApiSecret(apiSecret) {
        this['apiSecret'] = apiSecret;
    }
/**
     * Returns Your Messaging Service Provider ID.
     * @return {String}
     */
    getMspId() {
        return this.mspId;
    }

    /**
     * Sets Your Messaging Service Provider ID.
     * @param {String} mspId Your Messaging Service Provider ID.
     */
    setMspId(mspId) {
        this['mspId'] = mspId;
    }
/**
     * Returns A secret used to create the state value when sending Apple authentication 2.0 messages
     * @return {String}
     */
    getAuthenticationMessageSecret() {
        return this.authenticationMessageSecret;
    }

    /**
     * Sets A secret used to create the state value when sending Apple authentication 2.0 messages
     * @param {String} authenticationMessageSecret A secret used to create the state value when sending Apple authentication 2.0 messages
     */
    setAuthenticationMessageSecret(authenticationMessageSecret) {
        this['authenticationMessageSecret'] = authenticationMessageSecret;
    }

}

/**
 * To configure an Apple Messages for Business integration, acquire the required information and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'apple'
 */
AppleAllOf.prototype['type'] = 'apple';

/**
 * Apple Messages for Business ID.
 * @member {String} businessId
 */
AppleAllOf.prototype['businessId'] = undefined;

/**
 * Your Apple API secret which is tied to your Messaging Service Provider.
 * @member {String} apiSecret
 */
AppleAllOf.prototype['apiSecret'] = undefined;

/**
 * Your Messaging Service Provider ID.
 * @member {String} mspId
 */
AppleAllOf.prototype['mspId'] = undefined;

/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
AppleAllOf.prototype['authenticationMessageSecret'] = undefined;






export default AppleAllOf;

