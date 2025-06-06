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
import ConversationMessageDeliveryPayloadDestination from './ConversationMessageDeliveryPayloadDestination';
import ConversationMessageDeliveryPayloadExternalMessages from './ConversationMessageDeliveryPayloadExternalMessages';
import ConversationMessageDeliveryPayloadMessage from './ConversationMessageDeliveryPayloadMessage';
import ConversationTruncated from './ConversationTruncated';
import User from './User';

/**
 * The ConversationMessageDeliveryPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload
 * @version 15.5.1
 */
class ConversationMessageDeliveryPayload {
    /**
     * Constructs a new <code>ConversationMessageDeliveryPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload
     */
    constructor() { 
        
        ConversationMessageDeliveryPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} The populated <code>ConversationMessageDeliveryPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryPayload();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ConversationMessageDeliveryPayloadMessage.constructFromObject(data['message']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ConversationMessageDeliveryPayloadDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('externalMessages')) {
                obj['externalMessages'] = ApiClient.convertToType(data['externalMessages'], [ConversationMessageDeliveryPayloadExternalMessages]);
            }
            if (data.hasOwnProperty('isFinalEvent')) {
                obj['isFinalEvent'] = ApiClient.convertToType(data['isFinalEvent'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The user associated with the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user associated with the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user associated with the conversation.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns The conversation in which the message was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the message was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the message was sent.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage}
     */
    getMessage() {
        return this.message;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage} message
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination}
     */
    getDestination() {
        return this.destination;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} destination
     */
    setDestination(destination) {
        this['destination'] = destination;
    }
/**
     * Returns An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages>}
     */
    getExternalMessages() {
        return this.externalMessages;
    }

    /**
     * Sets An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages>} externalMessages An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
     */
    setExternalMessages(externalMessages) {
        this['externalMessages'] = externalMessages;
    }
/**
     * Returns A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
     * @return {Boolean}
     */
    getIsFinalEvent() {
        return this.isFinalEvent;
    }

    /**
     * Sets A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
     * @param {Boolean} isFinalEvent A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
     */
    setIsFinalEvent(isFinalEvent) {
        this['isFinalEvent'] = isFinalEvent;
    }

}

/**
 * The user associated with the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
ConversationMessageDeliveryPayload.prototype['user'] = undefined;

/**
 * The conversation in which the message was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationMessageDeliveryPayload.prototype['conversation'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage} message
 */
ConversationMessageDeliveryPayload.prototype['message'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} destination
 */
ConversationMessageDeliveryPayload.prototype['destination'] = undefined;

/**
 * An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages>} externalMessages
 */
ConversationMessageDeliveryPayload.prototype['externalMessages'] = undefined;

/**
 * A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
 * @member {Boolean} isFinalEvent
 */
ConversationMessageDeliveryPayload.prototype['isFinalEvent'] = undefined;






export default ConversationMessageDeliveryPayload;

