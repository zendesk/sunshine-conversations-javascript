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
import Integration from './Integration';
import Status from './Status';
import UnityAllOf from './UnityAllOf';

/**
 * The Unity model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Unity
 * @version 12.1.0
 */
class Unity {
    /**
     * Constructs a new <code>Unity</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Unity
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf
     * @param type {String} To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
     */
    constructor(type) { 
        Integration.initialize(this, type);UnityAllOf.initialize(this);
        Unity.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Unity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Unity} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Unity} The populated <code>Unity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unity();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            UnityAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
     * @param {String} type To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
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
 * To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
 * @member {String} type
 * @default 'unity'
 */
Unity.prototype['type'] = 'unity';

/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
Unity.prototype['canUserCreateMoreConversations'] = undefined;


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
// Implement UnityAllOf interface:
/**
 * To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
 * @member {String} type
 * @default 'unity'
 */
UnityAllOf.prototype['type'] = 'unity';
/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
UnityAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default Unity;

