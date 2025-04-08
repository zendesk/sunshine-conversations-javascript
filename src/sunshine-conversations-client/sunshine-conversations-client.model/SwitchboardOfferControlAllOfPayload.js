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
import ConversationTruncated from './ConversationTruncated';

/**
 * The SwitchboardOfferControlAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload
 * @version 15.3.0
 */
class SwitchboardOfferControlAllOfPayload {
    /**
     * Constructs a new <code>SwitchboardOfferControlAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload
     */
    constructor() { 
        
        SwitchboardOfferControlAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardOfferControlAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardOfferControlAllOfPayload} The populated <code>SwitchboardOfferControlAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardOfferControlAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
        }
        return obj;
    }

/**
     * Returns The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the integration from which control is being offered, and a `pendingSwitchboardIntegration`, representing the integration being offered control.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the integration from which control is being offered, and a `pendingSwitchboardIntegration`, representing the integration being offered control.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the integration from which control is being offered, and a `pendingSwitchboardIntegration`, representing the integration being offered control.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object.<String, Object>}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object.<String, Object>} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The conversation from which the switchboard event was fired. On success, the payload will include an `activeSwitchboardIntegration`, representing the integration from which control is being offered, and a `pendingSwitchboardIntegration`, representing the integration being offered control.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
SwitchboardOfferControlAllOfPayload.prototype['conversation'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object.<String, Object>} metadata
 */
SwitchboardOfferControlAllOfPayload.prototype['metadata'] = undefined;






export default SwitchboardOfferControlAllOfPayload;

