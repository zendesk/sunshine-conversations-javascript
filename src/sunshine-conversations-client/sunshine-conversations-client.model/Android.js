/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.1.0
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
import AndroidAllOf from './AndroidAllOf';
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';

/**
 * The Android model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Android
 * @version 14.1.0
 */
class Android {
    /**
     * Constructs a new <code>Android</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Android
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     */
    constructor(type) { 
        Integration.initialize(this, type);AndroidAllOf.initialize(this);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Android.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Android</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} The populated <code>Android</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Android();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            AndroidAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
     * Returns <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     * @param {String} type <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     */
    setType(type) {
        this['type'] = type;
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
 * <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
 * @member {String} type
 * @default 'android'
 */
Android.prototype['type'] = 'android';

/**
 * Your project ID from your generated private key file.
 * @member {String} projectId
 */
Android.prototype['projectId'] = undefined;

/**
 * Your client email from your generated private key file.
 * @member {String} clientEmail
 */
Android.prototype['clientEmail'] = undefined;

/**
 * Your private key from your generated private key file.
 * @member {String} privateKey
 */
Android.prototype['privateKey'] = undefined;

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
Android.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
Android.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
Android.prototype['canUserCreateMoreConversations'] = undefined;

/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
Android.prototype['attachmentsEnabled'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Android.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Android.prototype['defaultResponder'] = undefined;


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
// Implement AndroidAllOf interface:
/**
 * <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
 * @member {String} type
 * @default 'android'
 */
AndroidAllOf.prototype['type'] = 'android';
/**
 * Your project ID from your generated private key file.
 * @member {String} projectId
 */
AndroidAllOf.prototype['projectId'] = undefined;
/**
 * Your client email from your generated private key file.
 * @member {String} clientEmail
 */
AndroidAllOf.prototype['clientEmail'] = undefined;
/**
 * Your private key from your generated private key file.
 * @member {String} privateKey
 */
AndroidAllOf.prototype['privateKey'] = undefined;
/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidAllOf.prototype['serverKey'] = undefined;
/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidAllOf.prototype['senderId'] = undefined;
/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidAllOf.prototype['canUserCreateMoreConversations'] = undefined;
/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
AndroidAllOf.prototype['attachmentsEnabled'] = undefined;
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




export default Android;

