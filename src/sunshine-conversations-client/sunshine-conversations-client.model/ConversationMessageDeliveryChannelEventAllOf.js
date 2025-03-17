/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.1.0
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
import ConversationMessageDeliveryPayload from './ConversationMessageDeliveryPayload';

/**
 * The ConversationMessageDeliveryChannelEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf
 * @version 15.1.0
 */
class ConversationMessageDeliveryChannelEventAllOf {
    /**
     * Constructs a new <code>ConversationMessageDeliveryChannelEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf
     */
    constructor() { 
        
        ConversationMessageDeliveryChannelEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryChannelEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf} The populated <code>ConversationMessageDeliveryChannelEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryChannelEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationMessageDeliveryPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} payload
 */
ConversationMessageDeliveryChannelEventAllOf.prototype['payload'] = undefined;






export default ConversationMessageDeliveryChannelEventAllOf;

