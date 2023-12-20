/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.1.0
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
import Links from './Links';
import Meta from './Meta';

/**
 * The ClientListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse
 * @version 12.1.0
 */
class ClientListResponse {
    /**
     * Constructs a new <code>ClientListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse
     */
    constructor() { 
        
        ClientListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse} The populated <code>ClientListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientListResponse();

            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], [Client]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

/**
     * Returns List of returned clients.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Client>}
     */
    getClients() {
        return this.clients;
    }

    /**
     * Sets List of returned clients.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Client>} clients List of returned clients.
     */
    setClients(clients) {
        this['clients'] = clients;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
     */
    getMeta() {
        return this.meta;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta) {
        this['meta'] = meta;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
     */
    getLinks() {
        return this.links;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links) {
        this['links'] = links;
    }

}

/**
 * List of returned clients.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Client>} clients
 */
ClientListResponse.prototype['clients'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
ClientListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
ClientListResponse.prototype['links'] = undefined;






export default ClientListResponse;

