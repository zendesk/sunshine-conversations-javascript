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

/**
 * The QuotedMessageExternalMessageId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId
 * @version 15.5.1
 */
class QuotedMessageExternalMessageId {
    /**
     * Constructs a new <code>QuotedMessageExternalMessageId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId
     * @param type {String} The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     */
    constructor(type) { 
        
        QuotedMessageExternalMessageId.initialize(this, type);
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
     * Constructs a <code>QuotedMessageExternalMessageId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId} The populated <code>QuotedMessageExternalMessageId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotedMessageExternalMessageId();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
QuotedMessageExternalMessageId.prototype['type'] = 'externalMessageId';

/**
 * The external message Id of the quoted message.
 * @member {String} externalMessageId
 */
QuotedMessageExternalMessageId.prototype['externalMessageId'] = undefined;






export default QuotedMessageExternalMessageId;

