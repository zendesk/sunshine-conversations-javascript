/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.0
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
import App from './App';
import Links from './Links';
import Meta from './Meta';

/**
 * The AppListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse
 * @version 12.5.0
 */
class AppListResponse {
    /**
     * Constructs a new <code>AppListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse
     */
    constructor() { 
        
        AppListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse} The populated <code>AppListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppListResponse();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], [App]);
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
     * Returns List of returned apps.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/App>}
     */
    getApps() {
        return this.apps;
    }

    /**
     * Sets List of returned apps.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/App>} apps List of returned apps.
     */
    setApps(apps) {
        this['apps'] = apps;
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
 * List of returned apps.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/App>} apps
 */
AppListResponse.prototype['apps'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
AppListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
AppListResponse.prototype['links'] = undefined;






export default AppListResponse;

