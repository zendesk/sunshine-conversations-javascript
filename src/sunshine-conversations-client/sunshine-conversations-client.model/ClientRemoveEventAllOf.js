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
import ClientRemoveEventAllOfPayload from './ClientRemoveEventAllOfPayload';

/**
 * The ClientRemoveEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOf
 * @version 15.5.1
 */
class ClientRemoveEventAllOf {
    /**
     * Constructs a new <code>ClientRemoveEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOf
     */
    constructor() { 
        
        ClientRemoveEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientRemoveEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOf} The populated <code>ClientRemoveEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientRemoveEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ClientRemoveEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientRemoveEventAllOfPayload} payload
 */
ClientRemoveEventAllOf.prototype['payload'] = undefined;






export default ClientRemoveEventAllOf;

