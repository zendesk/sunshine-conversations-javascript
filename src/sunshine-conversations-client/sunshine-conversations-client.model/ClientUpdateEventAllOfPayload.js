/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.1.0
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
import Client from './Client';
import ConversationTruncated from './ConversationTruncated';
import UserTruncated from './UserTruncated';

/**
 * The ClientUpdateEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload
 * @version 12.1.0
 */
class ClientUpdateEventAllOfPayload {
    /**
     * Constructs a new <code>ClientUpdateEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload
     */
    constructor() { 
        
        ClientUpdateEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientUpdateEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload} The populated <code>ClientUpdateEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientUpdateEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], UserTruncated);
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], Client);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The conversation which triggered a change in the client.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation which triggered a change in the client.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation which triggered a change in the client.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The user associated with the client.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user associated with the client.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user The user associated with the client.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns The updated client.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * Sets The updated client.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The updated client.
     */
    setClient(client) {
        this['client'] = client;
    }
/**
     * Returns The reason for which the client was updated. * `confirmed` - The client is now active and ready to use. * `blocked` - The user has unsubscribed from the conversation. * `unblocked` - A previously unsubscribed user resubscribed to the conversation. * `matched` - The channel found a user that matches the information provided. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload.ReasonEnum}
     */
    getReason() {
        return this.reason;
    }

    /**
     * Sets The reason for which the client was updated. * `confirmed` - The client is now active and ready to use. * `blocked` - The user has unsubscribed from the conversation. * `unblocked` - A previously unsubscribed user resubscribed to the conversation. * `matched` - The channel found a user that matches the information provided. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload.ReasonEnum} reason The reason for which the client was updated. * `confirmed` - The client is now active and ready to use. * `blocked` - The user has unsubscribed from the conversation. * `unblocked` - A previously unsubscribed user resubscribed to the conversation. * `matched` - The channel found a user that matches the information provided. 
     */
    setReason(reason) {
        this['reason'] = reason;
    }

}

/**
 * The conversation which triggered a change in the client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ClientUpdateEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user associated with the client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user
 */
ClientUpdateEventAllOfPayload.prototype['user'] = undefined;

/**
 * The updated client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
ClientUpdateEventAllOfPayload.prototype['client'] = undefined;

/**
 * The reason for which the client was updated. * `confirmed` - The client is now active and ready to use. * `blocked` - The user has unsubscribed from the conversation. * `unblocked` - A previously unsubscribed user resubscribed to the conversation. * `matched` - The channel found a user that matches the information provided. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientUpdateEventAllOfPayload.ReasonEnum} reason
 */
ClientUpdateEventAllOfPayload.prototype['reason'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
ClientUpdateEventAllOfPayload['ReasonEnum'] = {

    /**
     * value: "confirmed"
     * @const
     */
    "confirmed": "confirmed",

    /**
     * value: "blocked"
     * @const
     */
    "blocked": "blocked",

    /**
     * value: "unblocked"
     * @const
     */
    "unblocked": "unblocked",

    /**
     * value: "matched"
     * @const
     */
    "matched": "matched"
};



export default ClientUpdateEventAllOfPayload;

