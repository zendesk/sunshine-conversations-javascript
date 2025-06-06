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
import Client from './Client';
import ConversationTruncated from './ConversationTruncated';
import SourceWebhook from './SourceWebhook';
import UserTruncated from './UserTruncated';

/**
 * The ClientAddEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload
 * @version 15.5.1
 */
class ClientAddEventAllOfPayload {
    /**
     * Constructs a new <code>ClientAddEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload
     */
    constructor() { 
        
        ClientAddEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientAddEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload} The populated <code>ClientAddEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientAddEventAllOfPayload();

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
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWebhook);
            }
        }
        return obj;
    }

/**
     * Returns The conversation associated with the creation of the client. This field is only present when the reason is `channelLinking` and when attaching the client to a specific conversation. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation associated with the creation of the client. This field is only present when the reason is `channelLinking` and when attaching the client to a specific conversation. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation associated with the creation of the client. This field is only present when the reason is `channelLinking` and when attaching the client to a specific conversation. 
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
     * Returns The client that was just created.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * Sets The client that was just created.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The client that was just created.
     */
    setClient(client) {
        this['client'] = client;
    }
/**
     * Returns The reason for which the client was added. * `channelLinking` - The client was created as a result of initiating a channel link. * `sdkLogin` - The client was created as a result of logging into an SDK device. * `authCode` - The client was created as a result of initializing an SDK client with an `authCode`. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload.ReasonEnum}
     */
    getReason() {
        return this.reason;
    }

    /**
     * Sets The reason for which the client was added. * `channelLinking` - The client was created as a result of initiating a channel link. * `sdkLogin` - The client was created as a result of logging into an SDK device. * `authCode` - The client was created as a result of initializing an SDK client with an `authCode`. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload.ReasonEnum} reason The reason for which the client was added. * `channelLinking` - The client was created as a result of initiating a channel link. * `sdkLogin` - The client was created as a result of logging into an SDK device. * `authCode` - The client was created as a result of initializing an SDK client with an `authCode`. 
     */
    setReason(reason) {
        this['reason'] = reason;
    }
/**
     * Returns The source where this event originated from. This could be the API or an SDK device.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source where this event originated from. This could be the API or an SDK device.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source where this event originated from. This could be the API or an SDK device.
     */
    setSource(source) {
        this['source'] = source;
    }

}

/**
 * The conversation associated with the creation of the client. This field is only present when the reason is `channelLinking` and when attaching the client to a specific conversation. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ClientAddEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user associated with the client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user
 */
ClientAddEventAllOfPayload.prototype['user'] = undefined;

/**
 * The client that was just created.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
ClientAddEventAllOfPayload.prototype['client'] = undefined;

/**
 * The reason for which the client was added. * `channelLinking` - The client was created as a result of initiating a channel link. * `sdkLogin` - The client was created as a result of logging into an SDK device. * `authCode` - The client was created as a result of initializing an SDK client with an `authCode`. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAddEventAllOfPayload.ReasonEnum} reason
 */
ClientAddEventAllOfPayload.prototype['reason'] = undefined;

/**
 * The source where this event originated from. This could be the API or an SDK device.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
ClientAddEventAllOfPayload.prototype['source'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
ClientAddEventAllOfPayload['ReasonEnum'] = {

    /**
     * value: "channelLinking"
     * @const
     */
    "channelLinking": "channelLinking",

    /**
     * value: "sdkLogin"
     * @const
     */
    "sdkLogin": "sdkLogin",

    /**
     * value: "authCode"
     * @const
     */
    "authCode": "authCode"
};



export default ClientAddEventAllOfPayload;

