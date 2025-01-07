/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
import UserRemoveEventAllOfPayload from './UserRemoveEventAllOfPayload';

/**
 * The UserRemoveEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOf
 * @version 14.3.1
 */
class UserRemoveEventAllOf {
    /**
     * Constructs a new <code>UserRemoveEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOf
     */
    constructor() { 
        
        UserRemoveEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserRemoveEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOf} The populated <code>UserRemoveEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserRemoveEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = UserRemoveEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserRemoveEventAllOfPayload} payload
 */
UserRemoveEventAllOf.prototype['payload'] = undefined;






export default UserRemoveEventAllOf;

