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
import IntegrationUpdateBase from './IntegrationUpdateBase';

/**
 * The CustomUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate
 * @version 12.5.0
 */
class CustomUpdate {
    /**
     * Constructs a new <code>CustomUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);
        CustomUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomUpdate} The populated <code>CustomUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            IntegrationUpdateBase.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;




export default CustomUpdate;

