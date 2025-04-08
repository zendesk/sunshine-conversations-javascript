/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.3.1
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
import SwitchboardIntegration from './SwitchboardIntegration';

/**
 * The SwitchboardIntegrationListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse
 * @version 15.3.1
 */
class SwitchboardIntegrationListResponse {
    /**
     * Constructs a new <code>SwitchboardIntegrationListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse
     */
    constructor() { 
        
        SwitchboardIntegrationListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardIntegrationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} The populated <code>SwitchboardIntegrationListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegrationListResponse();

            if (data.hasOwnProperty('switchboardIntegrations')) {
                obj['switchboardIntegrations'] = ApiClient.convertToType(data['switchboardIntegrations'], [SwitchboardIntegration]);
            }
        }
        return obj;
    }

/**
     * Returns List of returned switchboard integrations.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration>}
     */
    getSwitchboardIntegrations() {
        return this.switchboardIntegrations;
    }

    /**
     * Sets List of returned switchboard integrations.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration>} switchboardIntegrations List of returned switchboard integrations.
     */
    setSwitchboardIntegrations(switchboardIntegrations) {
        this['switchboardIntegrations'] = switchboardIntegrations;
    }

}

/**
 * List of returned switchboard integrations.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration>} switchboardIntegrations
 */
SwitchboardIntegrationListResponse.prototype['switchboardIntegrations'] = undefined;






export default SwitchboardIntegrationListResponse;

