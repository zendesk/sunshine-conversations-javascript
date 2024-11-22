/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.1.0
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
import ConversationJoinEventAllOfPayload from './ConversationJoinEventAllOfPayload';

/**
 * The ConversationJoinEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOf
 * @version 14.1.0
 */
class ConversationJoinEventAllOf {
    /**
     * Constructs a new <code>ConversationJoinEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOf
     */
    constructor() { 
        
        ConversationJoinEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationJoinEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOf} The populated <code>ConversationJoinEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationJoinEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ConversationJoinEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationJoinEventAllOfPayload} payload
 */
ConversationJoinEventAllOf.prototype['payload'] = undefined;






export default ConversationJoinEventAllOf;

