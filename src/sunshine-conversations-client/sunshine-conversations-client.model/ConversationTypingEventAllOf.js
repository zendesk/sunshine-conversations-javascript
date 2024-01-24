/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.0
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
import ConversationTypingEventAllOfPayload from './ConversationTypingEventAllOfPayload';

/**
 * The ConversationTypingEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOf
 * @version 12.2.0
 */
class ConversationTypingEventAllOf {
    /**
     * Constructs a new <code>ConversationTypingEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOf
     */
    constructor() { 
        
        ConversationTypingEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationTypingEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOf} The populated <code>ConversationTypingEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationTypingEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationTypingEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} payload
 */
ConversationTypingEventAllOf.prototype['payload'] = undefined;






export default ConversationTypingEventAllOf;

