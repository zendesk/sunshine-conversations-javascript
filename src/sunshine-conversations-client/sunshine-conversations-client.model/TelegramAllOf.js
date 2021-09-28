/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
 * The TelegramAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf
 * @version 9.4.6
 */
class TelegramAllOf {
    /**
     * Constructs a new <code>TelegramAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf
     * @param token {String} Telegram Bot Token.
     */
    constructor(token) { 
        
        TelegramAllOf.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>TelegramAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf} The populated <code>TelegramAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TelegramAllOf();

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

}

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






export default TelegramAllOf;

