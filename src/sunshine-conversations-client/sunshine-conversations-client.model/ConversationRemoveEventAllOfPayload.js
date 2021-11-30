/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
import ConversationTruncated from './ConversationTruncated';

/**
 * The ConversationRemoveEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload
 * @version 9.5.7
 */
class ConversationRemoveEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationRemoveEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload
     */
    constructor() { 
        
        ConversationRemoveEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationRemoveEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationRemoveEventAllOfPayload} The populated <code>ConversationRemoveEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationRemoveEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
        }
        return obj;
    }

/**
     * Returns The conversation that was deleted.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation that was deleted.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation that was deleted.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }

}

/**
 * The conversation that was deleted.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationRemoveEventAllOfPayload.prototype['conversation'] = undefined;






export default ConversationRemoveEventAllOfPayload;

