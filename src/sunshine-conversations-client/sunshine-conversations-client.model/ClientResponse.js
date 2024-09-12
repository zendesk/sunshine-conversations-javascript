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
import Client from './Client';

/**
 * The ClientResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse
 * @version 12.8.0
 */
class ClientResponse {
    /**
     * Constructs a new <code>ClientResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse
     */
    constructor() { 
        
        ClientResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} The populated <code>ClientResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientResponse();

            if (data.hasOwnProperty('client')) {
                obj['client'] = Client.constructFromObject(data['client']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
     */
    setClient(client) {
        this['client'] = client;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
ClientResponse.prototype['client'] = undefined;






export default ClientResponse;

