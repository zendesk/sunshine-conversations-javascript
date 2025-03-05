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
import ConversationLeaveEventAllOfPayload from './ConversationLeaveEventAllOfPayload';

/**
 * The ConversationLeaveEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOf
 * @version 15.0.0
 */
class ConversationLeaveEventAllOf {
    /**
     * Constructs a new <code>ConversationLeaveEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOf
     */
    constructor() { 
        
        ConversationLeaveEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationLeaveEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOf} The populated <code>ConversationLeaveEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationLeaveEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationLeaveEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationLeaveEventAllOfPayload} payload
 */
ConversationLeaveEventAllOf.prototype['payload'] = undefined;






export default ConversationLeaveEventAllOf;

