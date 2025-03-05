/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.0
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
 * The ClientRemoveEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload
 * @version 15.0.0
 */
class ClientRemoveEventAllOfPayload {
    /**
     * Constructs a new <code>ClientRemoveEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload
     */
    constructor() { 
        
        ClientRemoveEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientRemoveEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload} The populated <code>ClientRemoveEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientRemoveEventAllOfPayload();

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
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], Object);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWebhook);
            }
        }
        return obj;
    }

/**
     * Returns The conversation associated with the removal of the client. This field is only present when the reason is `theft`, `linkCancelled` or `linkFailed`. Note that for the `theft` reason, the conversation will not be present if it has been deleted. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation associated with the removal of the client. This field is only present when the reason is `theft`, `linkCancelled` or `linkFailed`. Note that for the `theft` reason, the conversation will not be present if it has been deleted. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation associated with the removal of the client. This field is only present when the reason is `theft`, `linkCancelled` or `linkFailed`. Note that for the `theft` reason, the conversation will not be present if it has been deleted. 
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
     * Returns The removed client.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * Sets The removed client.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The removed client.
     */
    setClient(client) {
        this['client'] = client;
    }
/**
     * Returns The reason for which the client was removed. * `api` - The client was removed using the API. * `linkCancelled` - The user cancelled a channel link. * `linkFailed` - The client was removed after a channel link attempt failed. * `sdk` - The client was removed using the SDK. * `theft` - The client was transferred to another user due to a channel link. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload.ReasonEnum}
     */
    getReason() {
        return this.reason;
    }

    /**
     * Sets The reason for which the client was removed. * `api` - The client was removed using the API. * `linkCancelled` - The user cancelled a channel link. * `linkFailed` - The client was removed after a channel link attempt failed. * `sdk` - The client was removed using the SDK. * `theft` - The client was transferred to another user due to a channel link. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload.ReasonEnum} reason The reason for which the client was removed. * `api` - The client was removed using the API. * `linkCancelled` - The user cancelled a channel link. * `linkFailed` - The client was removed after a channel link attempt failed. * `sdk` - The client was removed using the SDK. * `theft` - The client was transferred to another user due to a channel link. 
     */
    setReason(reason) {
        this['reason'] = reason;
    }
/**
     * Returns Object containing details of what went wrong. This field will only be present when the reason is `linkCancelled` or `linkFailed`.
     * @return {Object}
     */
    getError() {
        return this.error;
    }

    /**
     * Sets Object containing details of what went wrong. This field will only be present when the reason is `linkCancelled` or `linkFailed`.
     * @param {Object} error Object containing details of what went wrong. This field will only be present when the reason is `linkCancelled` or `linkFailed`.
     */
    setError(error) {
        this['error'] = error;
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
 * The conversation associated with the removal of the client. This field is only present when the reason is `theft`, `linkCancelled` or `linkFailed`. Note that for the `theft` reason, the conversation will not be present if it has been deleted. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ClientRemoveEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user associated with the client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} user
 */
ClientRemoveEventAllOfPayload.prototype['user'] = undefined;

/**
 * The removed client.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
ClientRemoveEventAllOfPayload.prototype['client'] = undefined;

/**
 * The reason for which the client was removed. * `api` - The client was removed using the API. * `linkCancelled` - The user cancelled a channel link. * `linkFailed` - The client was removed after a channel link attempt failed. * `sdk` - The client was removed using the SDK. * `theft` - The client was transferred to another user due to a channel link. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload.ReasonEnum} reason
 */
ClientRemoveEventAllOfPayload.prototype['reason'] = undefined;

/**
 * Object containing details of what went wrong. This field will only be present when the reason is `linkCancelled` or `linkFailed`.
 * @member {Object} error
 */
ClientRemoveEventAllOfPayload.prototype['error'] = undefined;

/**
 * The source where this event originated from. This could be the API or an SDK device.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
ClientRemoveEventAllOfPayload.prototype['source'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
ClientRemoveEventAllOfPayload['ReasonEnum'] = {

    /**
     * value: "api"
     * @const
     */
    "api": "api",

    /**
     * value: "linkCancelled"
     * @const
     */
    "linkCancelled": "linkCancelled",

    /**
     * value: "linkFailed"
     * @const
     */
    "linkFailed": "linkFailed",

    /**
     * value: "sdk"
     * @const
     */
    "sdk": "sdk",

    /**
     * value: "theft"
     * @const
     */
    "theft": "theft"
};



export default ClientRemoveEventAllOfPayload;

