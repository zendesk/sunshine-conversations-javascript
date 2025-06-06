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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';
import TelegramAllOf from './TelegramAllOf';

/**
 * The Telegram model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Telegram
 * @version 15.5.1
 */
class Telegram {
    /**
     * Constructs a new <code>Telegram</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param token {String} Telegram Bot Token.
     */
    constructor(type, token) { 
        Integration.initialize(this, type);TelegramAllOf.initialize(this, token);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Telegram.initialize(this, type, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Telegram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} The populated <code>Telegram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Telegram();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            TelegramAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('botId')) {
                obj['botId'] = ApiClient.convertToType(data['botId'], 'String');
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
     * Returns To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Telegram Bot Token.
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * Sets Telegram Bot Token.
     * @param {String} token Telegram Bot Token.
     */
    setToken(token) {
        this['token'] = token;
    }
/**
     * Returns Username of the botId
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Sets Username of the botId
     * @param {String} username Username of the botId
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * Returns A human-friendly name used to identify the integration.
     * @return {String}
     */
    getBotId() {
        return this.botId;
    }

    /**
     * Sets A human-friendly name used to identify the integration.
     * @param {String} botId A human-friendly name used to identify the integration.
     */
    setBotId(botId) {
        this['botId'] = botId;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the <a href=\"https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\">Switchboard guide</a>. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the <a href=\"https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\">Switchboard guide</a>. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the <a href=\"https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\">Switchboard guide</a>. 
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
 * To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'telegram'
 */
Telegram.prototype['type'] = 'telegram';

/**
 * Telegram Bot Token.
 * @member {String} token
 */
Telegram.prototype['token'] = undefined;

/**
 * Username of the botId
 * @member {String} username
 */
Telegram.prototype['username'] = undefined;

/**
 * A human-friendly name used to identify the integration.
 * @member {String} botId
 */
Telegram.prototype['botId'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the <a href=\"https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\">Switchboard guide</a>. 
 * @member {String} defaultResponderId
 */
Telegram.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Telegram.prototype['defaultResponder'] = undefined;


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
// Implement TelegramAllOf interface:
/**
 * To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'telegram'
 */
TelegramAllOf.prototype['type'] = 'telegram';
/**
 * Telegram Bot Token.
 * @member {String} token
 */
TelegramAllOf.prototype['token'] = undefined;
/**
 * Username of the botId
 * @member {String} username
 */
TelegramAllOf.prototype['username'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} botId
 */
TelegramAllOf.prototype['botId'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to the <a href=\"https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/#default-integration-assignment\">Switchboard guide</a>. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;




export default Telegram;

