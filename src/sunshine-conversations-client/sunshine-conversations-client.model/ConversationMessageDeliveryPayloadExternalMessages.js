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

/**
 * The ConversationMessageDeliveryPayloadExternalMessages model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages
 * @version 14.1.0
 */
class ConversationMessageDeliveryPayloadExternalMessages {
    /**
     * Constructs a new <code>ConversationMessageDeliveryPayloadExternalMessages</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages
     */
    constructor() { 
        
        ConversationMessageDeliveryPayloadExternalMessages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryPayloadExternalMessages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages} The populated <code>ConversationMessageDeliveryPayloadExternalMessages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryPayloadExternalMessages();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A string representing the ID of the external message.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets A string representing the ID of the external message.
     * @param {String} id A string representing the ID of the external message.
     */
    setId(id) {
        this['id'] = id;
    }

}

/**
 * A string representing the ID of the external message.
 * @member {String} id
 */
ConversationMessageDeliveryPayloadExternalMessages.prototype['id'] = undefined;






export default ConversationMessageDeliveryPayloadExternalMessages;

