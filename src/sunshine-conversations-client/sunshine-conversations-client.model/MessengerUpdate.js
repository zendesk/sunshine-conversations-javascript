/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 10.0.0
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
import InstagramUpdateAllOf from './InstagramUpdateAllOf';
import IntegrationUpdateBase from './IntegrationUpdateBase';

/**
 * The MessengerUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate
 * @version 10.0.0
 */
class MessengerUpdate {
    /**
     * Constructs a new <code>MessengerUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);InstagramUpdateAllOf.initialize(this);
        MessengerUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessengerUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdate} The populated <code>MessengerUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessengerUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            InstagramUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
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

}

/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
MessengerUpdate.prototype['displayName'] = undefined;

/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
MessengerUpdate.prototype['pageAccessToken'] = undefined;


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;
// Implement InstagramUpdateAllOf interface:
/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
InstagramUpdateAllOf.prototype['pageAccessToken'] = undefined;




export default MessengerUpdate;

