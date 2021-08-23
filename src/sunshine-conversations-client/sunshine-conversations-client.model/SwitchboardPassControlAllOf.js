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
import SwitchboardPassControlAllOfPayload from './SwitchboardPassControlAllOfPayload';

/**
 * The SwitchboardPassControlAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOf
 * @version 9.4.5
 */
class SwitchboardPassControlAllOf {
    /**
     * Constructs a new <code>SwitchboardPassControlAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOf
     */
    constructor() { 
        
        SwitchboardPassControlAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardPassControlAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOf} The populated <code>SwitchboardPassControlAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardPassControlAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = SwitchboardPassControlAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardPassControlAllOfPayload} payload
 */
SwitchboardPassControlAllOf.prototype['payload'] = undefined;






export default SwitchboardPassControlAllOf;

