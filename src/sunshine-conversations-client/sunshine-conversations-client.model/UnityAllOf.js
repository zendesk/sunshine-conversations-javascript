/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.0
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
 * The UnityAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf
 * @version 12.2.0
 */
class UnityAllOf {
    /**
     * Constructs a new <code>UnityAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf
     */
    constructor() { 
        
        UnityAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnityAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf} The populated <code>UnityAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnityAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
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
/**
     * Returns Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     * @return {Boolean}
     */
    getAttachmentsEnabled() {
        return this.attachmentsEnabled;
    }

    /**
     * Sets Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     * @param {Boolean} attachmentsEnabled Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     */
    setAttachmentsEnabled(attachmentsEnabled) {
        this['attachmentsEnabled'] = attachmentsEnabled;
    }

}

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

/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
UnityAllOf.prototype['attachmentsEnabled'] = undefined;






export default UnityAllOf;
