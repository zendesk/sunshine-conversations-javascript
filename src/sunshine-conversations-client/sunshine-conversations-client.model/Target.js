/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.8.0
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
 * The Target model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Target
 * @version 13.0.0
 */
class Target {
    /**
     * Constructs a new <code>Target</code>.
     * The target conversation to attach the client to.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Target
     * @param conversationId {String} The conversation ID of the target conversation.
     */
    constructor(conversationId) { 
        
        Target.initialize(this, conversationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, conversationId) { 
        obj['conversationId'] = conversationId;
    }

    /**
     * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} The populated <code>Target</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Target();

            if (data.hasOwnProperty('conversationId')) {
                obj['conversationId'] = ApiClient.convertToType(data['conversationId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The conversation ID of the target conversation.
     * @return {String}
     */
    getConversationId() {
        return this.conversationId;
    }

    /**
     * Sets The conversation ID of the target conversation.
     * @param {String} conversationId The conversation ID of the target conversation.
     */
    setConversationId(conversationId) {
        this['conversationId'] = conversationId;
    }

}

/**
 * The conversation ID of the target conversation.
 * @member {String} conversationId
 */
Target.prototype['conversationId'] = undefined;






export default Target;

