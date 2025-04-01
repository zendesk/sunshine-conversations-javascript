/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.2.0
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
import UnityAllOf from './UnityAllOf';

/**
 * The Unity model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Unity
 * @version 15.2.0
 */
class Unity {
    /**
     * Constructs a new <code>Unity</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Unity
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UnityAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
     */
    constructor(type) { 
        Integration.initialize(this, type);UnityAllOf.initialize(this);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
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
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('canUserSeeConversationList')) {
                obj['canUserSeeConversationList'] = ApiClient.convertToType(data['canUserSeeConversationList'], 'Boolean');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
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
 * To configure a Unity integration, create an integration with type 'unity' by calling the Create Integration endpoint. 
 * @member {String} type
 * @default 'unity'
 */
Unity.prototype['type'] = 'unity';

/**
 * Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
 * @member {Boolean} canUserSeeConversationList
 */
Unity.prototype['canUserSeeConversationList'] = undefined;

/**
 * Allows users to create more than one conversation on the Unity integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
Unity.prototype['canUserCreateMoreConversations'] = undefined;

/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
Unity.prototype['attachmentsEnabled'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Unity.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Unity.prototype['defaultResponder'] = undefined;


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
 * Allows users to view their list of conversations. By default, the list of conversations will be visible. *This setting only applies to apps where `settings.multiConvoEnabled` is set to `true`*. 
 * @member {Boolean} canUserSeeConversationList
 */
UnityAllOf.prototype['canUserSeeConversationList'] = undefined;
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




export default Unity;

