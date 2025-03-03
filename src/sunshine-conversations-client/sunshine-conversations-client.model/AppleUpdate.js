/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.4.0
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
import AppleUpdateAllOf from './AppleUpdateAllOf';
import IntegrationUpdateBase from './IntegrationUpdateBase';

/**
 * The AppleUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate
 * @version 14.4.0
 */
class AppleUpdate {
    /**
     * Constructs a new <code>AppleUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);AppleUpdateAllOf.initialize(this);
        AppleUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate} The populated <code>AppleUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppleUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            AppleUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('authenticationMessageSecret')) {
                obj['authenticationMessageSecret'] = ApiClient.convertToType(data['authenticationMessageSecret'], 'String');
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
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
AppleUpdate.prototype['displayName'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
AppleUpdate.prototype['defaultResponderId'] = undefined;

/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
AppleUpdate.prototype['authenticationMessageSecret'] = undefined;


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
IntegrationUpdateBase.prototype['defaultResponderId'] = undefined;
// Implement AppleUpdateAllOf interface:
/**
 * A secret used to create the state value when sending Apple authentication 2.0 messages
 * @member {String} authenticationMessageSecret
 */
AppleUpdateAllOf.prototype['authenticationMessageSecret'] = undefined;




export default AppleUpdate;

