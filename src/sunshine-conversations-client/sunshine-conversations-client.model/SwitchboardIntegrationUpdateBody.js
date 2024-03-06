/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.3.0
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
 * The SwitchboardIntegrationUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody
 * @version 12.3.0
 */
class SwitchboardIntegrationUpdateBody {
    /**
     * Constructs a new <code>SwitchboardIntegrationUpdateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody
     */
    constructor() { 
        
        SwitchboardIntegrationUpdateBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardIntegrationUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} The populated <code>SwitchboardIntegrationUpdateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegrationUpdateBody();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
            if (data.hasOwnProperty('deliverStandbyEvents')) {
                obj['deliverStandbyEvents'] = ApiClient.convertToType(data['deliverStandbyEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('nextSwitchboardIntegrationId')) {
                obj['nextSwitchboardIntegrationId'] = ApiClient.convertToType(data['nextSwitchboardIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('messageHistoryCount')) {
                obj['messageHistoryCount'] = ApiClient.convertToType(data['messageHistoryCount'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param {String} name Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. Can't provide both `integrationId` and `integrationType`.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. Can't provide both `integrationId` and `integrationType`.
     * @param {String} integrationId The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. Can't provide both `integrationId` and `integrationType`.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. Can't provide both `integrationId` and `integrationType`.
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. Can't provide both `integrationId` and `integrationType`.
     * @param {String} integrationType The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. Can't provide both `integrationId` and `integrationType`.
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }
/**
     * Returns Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     * @return {Boolean}
     */
    getDeliverStandbyEvents() {
        return this.deliverStandbyEvents;
    }

    /**
     * Sets Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     * @param {Boolean} deliverStandbyEvents Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     */
    setDeliverStandbyEvents(deliverStandbyEvents) {
        this['deliverStandbyEvents'] = deliverStandbyEvents;
    }
/**
     * @return {String}
     */
    getNextSwitchboardIntegrationId() {
        return this.nextSwitchboardIntegrationId;
    }

    /**
     * @param {String} nextSwitchboardIntegrationId
     */
    setNextSwitchboardIntegrationId(nextSwitchboardIntegrationId) {
        this['nextSwitchboardIntegrationId'] = nextSwitchboardIntegrationId;
    }
/**
     * Returns Number of messages to include in the message history context.
     * minimum: 1
     * maximum: 10
     * @return {Number}
     */
    getMessageHistoryCount() {
        return this.messageHistoryCount;
    }

    /**
     * Sets Number of messages to include in the message history context.
     * @param {Number} messageHistoryCount Number of messages to include in the message history context.
     */
    setMessageHistoryCount(messageHistoryCount) {
        this['messageHistoryCount'] = messageHistoryCount;
    }

}

/**
 * Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
 * @member {String} name
 */
SwitchboardIntegrationUpdateBody.prototype['name'] = undefined;

/**
 * The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. Can't provide both `integrationId` and `integrationType`.
 * @member {String} integrationId
 */
SwitchboardIntegrationUpdateBody.prototype['integrationId'] = undefined;

/**
 * The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. Can't provide both `integrationId` and `integrationType`.
 * @member {String} integrationType
 */
SwitchboardIntegrationUpdateBody.prototype['integrationType'] = undefined;

/**
 * Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
 * @member {Boolean} deliverStandbyEvents
 */
SwitchboardIntegrationUpdateBody.prototype['deliverStandbyEvents'] = undefined;

/**
 * @member {String} nextSwitchboardIntegrationId
 */
SwitchboardIntegrationUpdateBody.prototype['nextSwitchboardIntegrationId'] = undefined;

/**
 * Number of messages to include in the message history context.
 * @member {Number} messageHistoryCount
 */
SwitchboardIntegrationUpdateBody.prototype['messageHistoryCount'] = undefined;






export default SwitchboardIntegrationUpdateBody;

