/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.1
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
 * The UnityUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdateAllOf
 * @version 15.0.1
 */
class UnityUpdateAllOf {
    /**
     * Constructs a new <code>UnityUpdateAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdateAllOf
     */
    constructor() { 
        
        UnityUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnityUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityUpdateAllOf} The populated <code>UnityUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnityUpdateAllOf();

            if (data.hasOwnProperty('canUserSeeConversationList')) {
                obj['canUserSeeConversationList'] = ApiClient.convertToType(data['canUserSeeConversationList'], 'Boolean');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
     * @return {Boolean}
     */
    getCanUserSeeConversationList() {
        return this.canUserSeeConversationList;
    }

    /**
     * Sets Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
     * @param {Boolean} canUserSeeConversationList Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
     */
    setCanUserSeeConversationList(canUserSeeConversationList) {
        this['canUserSeeConversationList'] = canUserSeeConversationList;
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
 * Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
 * @member {Boolean} canUserSeeConversationList
 */
UnityUpdateAllOf.prototype['canUserSeeConversationList'] = undefined;

/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
UnityUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;






export default UnityUpdateAllOf;

