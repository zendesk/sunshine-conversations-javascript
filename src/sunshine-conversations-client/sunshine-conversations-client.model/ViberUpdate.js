/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.3.0
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
 * The ViberUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate
 * @version 15.3.0
 */
class ViberUpdate {
    /**
     * Constructs a new <code>ViberUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);
        ViberUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViberUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberUpdate} The populated <code>ViberUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViberUpdate();
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
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
IntegrationUpdateBase.prototype['defaultResponderId'] = undefined;




export default ViberUpdate;

