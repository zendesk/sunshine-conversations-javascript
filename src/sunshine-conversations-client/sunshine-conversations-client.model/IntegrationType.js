/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.2.0
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
 * The IntegrationType model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType
 * @version 14.2.0
 */
class IntegrationType {
    /**
     * Constructs a new <code>IntegrationType</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType
     */
    constructor() { 
        
        IntegrationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType} The populated <code>IntegrationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationType();

            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     * @param {String} integrationType The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }

}

/**
 * The type of the integration to deliver the message to. Can be set to `none` if sending a [silent message](https://docs.smooch.io/guide/sending-messages/#silent-messages). Will return an error if the user does not have a client of that type attached to the conversation. 
 * @member {String} integrationType
 */
IntegrationType.prototype['integrationType'] = undefined;






export default IntegrationType;

