/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.1
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
 * The AppKeyCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody
 * @version 15.0.1
 */
class AppKeyCreateBody {
    /**
     * Constructs a new <code>AppKeyCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody
     * @param displayName {String} The name of the API key.
     */
    constructor(displayName) { 
        
        AppKeyCreateBody.initialize(this, displayName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName) { 
        obj['displayName'] = displayName;
    }

    /**
     * Constructs a <code>AppKeyCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} The populated <code>AppKeyCreateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppKeyCreateBody();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The name of the API key.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets The name of the API key.
     * @param {String} displayName The name of the API key.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }

}

/**
 * The name of the API key.
 * @member {String} displayName
 */
AppKeyCreateBody.prototype['displayName'] = undefined;






export default AppKeyCreateBody;

