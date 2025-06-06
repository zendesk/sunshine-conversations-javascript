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
import Activity from './Activity';
import ConversationTruncated from './ConversationTruncated';

/**
 * The ConversationReadEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload
 * @version 15.5.1
 */
class ConversationReadEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationReadEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload
     */
    constructor() { 
        
        ConversationReadEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationReadEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReadEventAllOfPayload} The populated <code>ConversationReadEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationReadEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = ApiClient.convertToType(data['activity'], Activity);
            }
        }
        return obj;
    }

/**
     * Returns The conversation in which the message was read.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the message was read.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the message was read.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The activity that was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity}
     */
    getActivity() {
        return this.activity;
    }

    /**
     * Sets The activity that was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} activity The activity that was sent.
     */
    setActivity(activity) {
        this['activity'] = activity;
    }

}

/**
 * The conversation in which the message was read.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationReadEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The activity that was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} activity
 */
ConversationReadEventAllOfPayload.prototype['activity'] = undefined;






export default ConversationReadEventAllOfPayload;

