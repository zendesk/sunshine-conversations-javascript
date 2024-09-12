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

/**
 * The IntegrationId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId
 * @version 12.8.0
 */
class IntegrationId {
    /**
     * Constructs a new <code>IntegrationId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId
     */
    constructor() { 
        
        IntegrationId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationId} The populated <code>IntegrationId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationId();

            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     * @param {String} integrationId The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }

}

/**
 * The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation. 
 * @member {String} integrationId
 */
IntegrationId.prototype['integrationId'] = undefined;






export default IntegrationId;

