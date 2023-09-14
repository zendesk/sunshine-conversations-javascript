/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 10.0.1
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
import Message from './Message';
import QuotedMessageExternalMessageId from './QuotedMessageExternalMessageId';
import QuotedMessageMessage from './QuotedMessageMessage';

/**
 * The QuotedMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage
 * @version 10.0.1
 */
class QuotedMessage {
    /**
     * Constructs a new <code>QuotedMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId
     * @param type {String} The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     */
    constructor(type) { 
        QuotedMessageMessage.initialize(this, type);QuotedMessageExternalMessageId.initialize(this, type);
        QuotedMessage.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>QuotedMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} The populated <code>QuotedMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotedMessage();
            QuotedMessageMessage.constructFromObject(data, obj);
            QuotedMessageExternalMessageId.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], Message);
            }
            if (data.hasOwnProperty('externalMessageId')) {
                obj['externalMessageId'] = ApiClient.convertToType(data['externalMessageId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     * @param {String} type The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Message}
     */
    getMessage() {
        return this.message;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * Returns The external message Id of the quoted message.
     * @return {String}
     */
    getExternalMessageId() {
        return this.externalMessageId;
    }

    /**
     * Sets The external message Id of the quoted message.
     * @param {String} externalMessageId The external message Id of the quoted message.
     */
    setExternalMessageId(externalMessageId) {
        this['externalMessageId'] = externalMessageId;
    }

}

/**
 * The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
 * @member {String} type
 * @default 'externalMessageId'
 */
QuotedMessage.prototype['type'] = 'externalMessageId';

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
 */
QuotedMessage.prototype['message'] = undefined;

/**
 * The external message Id of the quoted message.
 * @member {String} externalMessageId
 */
QuotedMessage.prototype['externalMessageId'] = undefined;


// Implement QuotedMessageMessage interface:
/**
 * The type of quotedMessage - a complete Sunshine Conversations message is provided.
 * @member {String} type
 * @default 'message'
 */
QuotedMessageMessage.prototype['type'] = 'message';
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
 */
QuotedMessageMessage.prototype['message'] = undefined;
// Implement QuotedMessageExternalMessageId interface:
/**
 * The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
 * @member {String} type
 * @default 'externalMessageId'
 */
QuotedMessageExternalMessageId.prototype['type'] = 'externalMessageId';
/**
 * The external message Id of the quoted message.
 * @member {String} externalMessageId
 */
QuotedMessageExternalMessageId.prototype['externalMessageId'] = undefined;




export default QuotedMessage;

