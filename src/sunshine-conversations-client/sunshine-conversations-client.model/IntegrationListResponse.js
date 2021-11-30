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
import Integration from './Integration';
import Links from './Links';
import Meta from './Meta';

/**
 * The IntegrationListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse
 * @version 9.5.7
 */
class IntegrationListResponse {
    /**
     * Constructs a new <code>IntegrationListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse
     */
    constructor() { 
        
        IntegrationListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} The populated <code>IntegrationListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationListResponse();

            if (data.hasOwnProperty('integrations')) {
                obj['integrations'] = ApiClient.convertToType(data['integrations'], [Integration]);
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
     * Returns List of returned integrations.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Integration>}
     */
    getIntegrations() {
        return this.integrations;
    }

    /**
     * Sets List of returned integrations.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Integration>} integrations List of returned integrations.
     */
    setIntegrations(integrations) {
        this['integrations'] = integrations;
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
 * List of returned integrations.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Integration>} integrations
 */
IntegrationListResponse.prototype['integrations'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
IntegrationListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
IntegrationListResponse.prototype['links'] = undefined;






export default IntegrationListResponse;

