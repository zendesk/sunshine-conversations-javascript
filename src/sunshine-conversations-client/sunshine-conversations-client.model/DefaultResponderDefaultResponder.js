/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.0
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
 * The DefaultResponderDefaultResponder model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder
 * @version 15.0.0
 */
class DefaultResponderDefaultResponder {
    /**
     * Constructs a new <code>DefaultResponderDefaultResponder</code>.
     * The default responder for the integration. This is the responder that will be used to send messages to the user. For more information, refer to the &lt;a href&#x3D;\&quot;https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\&quot;&gt;Per-channel default responder&lt;/a&gt; guide. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder
     */
    constructor() { 
        
        DefaultResponderDefaultResponder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DefaultResponderDefaultResponder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} The populated <code>DefaultResponderDefaultResponder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultResponderDefaultResponder();

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
            if (data.hasOwnProperty('inherited')) {
                obj['inherited'] = ApiClient.convertToType(data['inherited'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The name of the switchboard integration.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the switchboard integration.
     * @param {String} name The name of the switchboard integration.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The unique ID of the integration.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The unique ID of the integration.
     * @param {String} integrationId The unique ID of the integration.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns The type of the integration.
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets The type of the integration.
     * @param {String} integrationType The type of the integration.
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }
/**
     * Returns Indicates whether the switchboard should deliver standby events.
     * @return {Boolean}
     */
    getDeliverStandbyEvents() {
        return this.deliverStandbyEvents;
    }

    /**
     * Sets Indicates whether the switchboard should deliver standby events.
     * @param {Boolean} deliverStandbyEvents Indicates whether the switchboard should deliver standby events.
     */
    setDeliverStandbyEvents(deliverStandbyEvents) {
        this['deliverStandbyEvents'] = deliverStandbyEvents;
    }
/**
     * Returns The unique ID of the next switchboard integration.
     * @return {String}
     */
    getNextSwitchboardIntegrationId() {
        return this.nextSwitchboardIntegrationId;
    }

    /**
     * Sets The unique ID of the next switchboard integration.
     * @param {String} nextSwitchboardIntegrationId The unique ID of the next switchboard integration.
     */
    setNextSwitchboardIntegrationId(nextSwitchboardIntegrationId) {
        this['nextSwitchboardIntegrationId'] = nextSwitchboardIntegrationId;
    }
/**
     * Returns The number of messages to keep in the message history.
     * @return {Number}
     */
    getMessageHistoryCount() {
        return this.messageHistoryCount;
    }

    /**
     * Sets The number of messages to keep in the message history.
     * @param {Number} messageHistoryCount The number of messages to keep in the message history.
     */
    setMessageHistoryCount(messageHistoryCount) {
        this['messageHistoryCount'] = messageHistoryCount;
    }
/**
     * Returns Indicates whether the default responder is inherited from the switchboard's global config or not. Returns `false` if a per-channel responder override has been set for this integration, and `true` otherwise.
     * @return {Boolean}
     */
    getInherited() {
        return this.inherited;
    }

    /**
     * Sets Indicates whether the default responder is inherited from the switchboard's global config or not. Returns `false` if a per-channel responder override has been set for this integration, and `true` otherwise.
     * @param {Boolean} inherited Indicates whether the default responder is inherited from the switchboard's global config or not. Returns `false` if a per-channel responder override has been set for this integration, and `true` otherwise.
     */
    setInherited(inherited) {
        this['inherited'] = inherited;
    }

}

/**
 * The name of the switchboard integration.
 * @member {String} name
 */
DefaultResponderDefaultResponder.prototype['name'] = undefined;

/**
 * The unique ID of the integration.
 * @member {String} integrationId
 */
DefaultResponderDefaultResponder.prototype['integrationId'] = undefined;

/**
 * The type of the integration.
 * @member {String} integrationType
 */
DefaultResponderDefaultResponder.prototype['integrationType'] = undefined;

/**
 * Indicates whether the switchboard should deliver standby events.
 * @member {Boolean} deliverStandbyEvents
 */
DefaultResponderDefaultResponder.prototype['deliverStandbyEvents'] = undefined;

/**
 * The unique ID of the next switchboard integration.
 * @member {String} nextSwitchboardIntegrationId
 */
DefaultResponderDefaultResponder.prototype['nextSwitchboardIntegrationId'] = undefined;

/**
 * The number of messages to keep in the message history.
 * @member {Number} messageHistoryCount
 */
DefaultResponderDefaultResponder.prototype['messageHistoryCount'] = undefined;

/**
 * Indicates whether the default responder is inherited from the switchboard's global config or not. Returns `false` if a per-channel responder override has been set for this integration, and `true` otherwise.
 * @member {Boolean} inherited
 */
DefaultResponderDefaultResponder.prototype['inherited'] = undefined;






export default DefaultResponderDefaultResponder;

