/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.2.0
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
 * The MessageOverridePayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload
 * @version 14.2.0
 */
class MessageOverridePayload {
    /**
     * Constructs a new <code>MessageOverridePayload</code>.
     * The exact payload to send to the channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload
     */
    constructor() { 
        
        MessageOverridePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverridePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} The populated <code>MessageOverridePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverridePayload();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], Object);
            }
        }
        return obj;
    }

/**
     * @return {Object}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {Object} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {Object} payload
 */
MessageOverridePayload.prototype['payload'] = undefined;






export default MessageOverridePayload;

