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
import IntegrationUpdateBase from './IntegrationUpdateBase';
import UnityUpdateAllOf from './UnityUpdateAllOf';

/**
 * The UnityUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdate
 * @version 12.1.0
 */
class UnityUpdate {
    /**
     * Constructs a new <code>UnityUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);UnityUpdateAllOf.initialize(this);
        UnityUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnityUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdate} The populated <code>UnityUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnityUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            UnityUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
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
     * Returns Allows users to create more than one conversation on the Unity integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the Unity integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the Unity integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }

}

/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
UnityUpdate.prototype['displayName'] = undefined;

/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
UnityUpdate.prototype['canUserCreateMoreConversations'] = undefined;


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;
// Implement UnityUpdateAllOf interface:
/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
UnityUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default UnityUpdate;

