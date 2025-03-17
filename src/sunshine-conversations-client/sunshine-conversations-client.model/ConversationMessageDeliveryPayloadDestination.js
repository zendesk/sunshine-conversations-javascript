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

/**
 * The ConversationMessageDeliveryPayloadDestination model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination
 * @version 15.1.0
 */
class ConversationMessageDeliveryPayloadDestination {
    /**
     * Constructs a new <code>ConversationMessageDeliveryPayloadDestination</code>.
     * A nested object representing the destination of the message.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination
     */
    constructor() { 
        
        ConversationMessageDeliveryPayloadDestination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryPayloadDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} The populated <code>ConversationMessageDeliveryPayloadDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryPayloadDestination();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
     * @param {String} type An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Identifier indicating which integration the message was sent to.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets Identifier indicating which integration the message was sent to.
     * @param {String} integrationId Identifier indicating which integration the message was sent to.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }

}

/**
 * An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
 * @member {String} type
 */
ConversationMessageDeliveryPayloadDestination.prototype['type'] = undefined;

/**
 * Identifier indicating which integration the message was sent to.
 * @member {String} integrationId
 */
ConversationMessageDeliveryPayloadDestination.prototype['integrationId'] = undefined;






export default ConversationMessageDeliveryPayloadDestination;

