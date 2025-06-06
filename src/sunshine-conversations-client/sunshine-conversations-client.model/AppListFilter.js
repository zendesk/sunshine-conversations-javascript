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

/**
 * The AppListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter
 * @version 15.5.1
 */
class AppListFilter {
    /**
     * Constructs a new <code>AppListFilter</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter
     */
    constructor() { 
        
        AppListFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} The populated <code>AppListFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppListFilter();

            if (data.hasOwnProperty('serviceAccountId')) {
                obj['serviceAccountId'] = ApiClient.convertToType(data['serviceAccountId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns When specified, lists only the apps that the service account has access to.
     * @return {String}
     */
    getServiceAccountId() {
        return this.serviceAccountId;
    }

    /**
     * Sets When specified, lists only the apps that the service account has access to.
     * @param {String} serviceAccountId When specified, lists only the apps that the service account has access to.
     */
    setServiceAccountId(serviceAccountId) {
        this['serviceAccountId'] = serviceAccountId;
    }

}

/**
 * When specified, lists only the apps that the service account has access to.
 * @member {String} serviceAccountId
 */
AppListFilter.prototype['serviceAccountId'] = undefined;






export default AppListFilter;

