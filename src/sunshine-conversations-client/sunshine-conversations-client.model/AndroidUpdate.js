/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.8.0
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
import AndroidUpdateAllOf from './AndroidUpdateAllOf';
import IntegrationUpdateBase from './IntegrationUpdateBase';

/**
 * The AndroidUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate
 * @version 12.8.0
 */
class AndroidUpdate {
    /**
     * Constructs a new <code>AndroidUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);AndroidUpdateAllOf.initialize(this);
        AndroidUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AndroidUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdate} The populated <code>AndroidUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndroidUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            AndroidUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('clientEmail')) {
                obj['clientEmail'] = ApiClient.convertToType(data['clientEmail'], 'String');
            }
            if (data.hasOwnProperty('privateKey')) {
                obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
            }
            if (data.hasOwnProperty('serverKey')) {
                obj['serverKey'] = ApiClient.convertToType(data['serverKey'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
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
     * Returns Your project ID from your generated private key file.
     * @return {String}
     */
    getProjectId() {
        return this.projectId;
    }

    /**
     * Sets Your project ID from your generated private key file.
     * @param {String} projectId Your project ID from your generated private key file.
     */
    setProjectId(projectId) {
        this['projectId'] = projectId;
    }
/**
     * Returns Your client email from your generated private key file.
     * @return {String}
     */
    getClientEmail() {
        return this.clientEmail;
    }

    /**
     * Sets Your client email from your generated private key file.
     * @param {String} clientEmail Your client email from your generated private key file.
     */
    setClientEmail(clientEmail) {
        this['clientEmail'] = clientEmail;
    }
/**
     * Returns Your private key from your generated private key file.
     * @return {String}
     */
    getPrivateKey() {
        return this.privateKey;
    }

    /**
     * Sets Your private key from your generated private key file.
     * @param {String} privateKey Your private key from your generated private key file.
     */
    setPrivateKey(privateKey) {
        this['privateKey'] = privateKey;
    }
/**
     * Returns Your server key from the fcm console.
     * @return {String}
     */
    getServerKey() {
        return this.serverKey;
    }

    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey) {
        this['serverKey'] = serverKey;
    }
/**
     * Returns Your sender id from the fcm console.
     * @return {String}
     */
    getSenderId() {
        return this.senderId;
    }

    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId) {
        this['senderId'] = senderId;
    }
/**
     * Returns Allows users to create more than one conversation on the android integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the android integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the android integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }

}

/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
AndroidUpdate.prototype['displayName'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
AndroidUpdate.prototype['defaultResponderId'] = undefined;

/**
 * Your project ID from your generated private key file.
 * @member {String} projectId
 */
AndroidUpdate.prototype['projectId'] = undefined;

/**
 * Your client email from your generated private key file.
 * @member {String} clientEmail
 */
AndroidUpdate.prototype['clientEmail'] = undefined;

/**
 * Your private key from your generated private key file.
 * @member {String} privateKey
 */
AndroidUpdate.prototype['privateKey'] = undefined;

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidUpdate.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidUpdate.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidUpdate.prototype['canUserCreateMoreConversations'] = undefined;


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
// Implement AndroidUpdateAllOf interface:
/**
 * Your project ID from your generated private key file.
 * @member {String} projectId
 */
AndroidUpdateAllOf.prototype['projectId'] = undefined;
/**
 * Your client email from your generated private key file.
 * @member {String} clientEmail
 */
AndroidUpdateAllOf.prototype['clientEmail'] = undefined;
/**
 * Your private key from your generated private key file.
 * @member {String} privateKey
 */
AndroidUpdateAllOf.prototype['privateKey'] = undefined;
/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidUpdateAllOf.prototype['serverKey'] = undefined;
/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidUpdateAllOf.prototype['senderId'] = undefined;
/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default AndroidUpdate;

