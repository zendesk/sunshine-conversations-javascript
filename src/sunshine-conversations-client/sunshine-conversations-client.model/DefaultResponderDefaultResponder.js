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
 * The DefaultResponderDefaultResponder model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder
 * @version 13.0.0
 */
class DefaultResponderDefaultResponder {
    /**
     * Constructs a new <code>DefaultResponderDefaultResponder</code>.
     * The default responder object. &lt;aside class&#x3D;\&quot;notice\&quot;&gt;This property will only be returned in response for &lt;code&gt;get integration&lt;/code&gt; and &lt;code&gt;list integration&lt;/code&gt; and must not be used in the request body.&lt;/aside&gt; &lt;aside class&#x3D;\&quot;notice\&quot;&gt;Response will contain only one of the following: &lt;code&gt;defaultResponder&lt;/code&gt; or &lt;code&gt;defaultResponderId&lt;/code&gt; but never both.&lt;/aside&gt; 
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

            if (data.hasOwnProperty('switchboardId')) {
                obj['switchboardId'] = ApiClient.convertToType(data['switchboardId'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
     * Returns The unique ID of the switchboard.
     * @return {String}
     */
    getSwitchboardId() {
        return this.switchboardId;
    }

    /**
     * Sets The unique ID of the switchboard.
     * @param {String} switchboardId The unique ID of the switchboard.
     */
    setSwitchboardId(switchboardId) {
        this['switchboardId'] = switchboardId;
    }
/**
     * Returns Identifies the app.
     * @return {String}
     */
    getAppId() {
        return this.appId;
    }

    /**
     * Sets Identifies the app.
     * @param {String} appId Identifies the app.
     */
    setAppId(appId) {
        this['appId'] = appId;
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
     * Returns The name of the switchboard.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the switchboard.
     * @param {String} name The name of the switchboard.
     */
    setName(name) {
        this['name'] = name;
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
     * Returns Indicates whether the switchboard is inherited.
     * @return {Boolean}
     */
    getInherited() {
        return this.inherited;
    }

    /**
     * Sets Indicates whether the switchboard is inherited.
     * @param {Boolean} inherited Indicates whether the switchboard is inherited.
     */
    setInherited(inherited) {
        this['inherited'] = inherited;
    }

}

/**
 * The unique ID of the switchboard.
 * @member {String} switchboardId
 */
DefaultResponderDefaultResponder.prototype['switchboardId'] = undefined;

/**
 * Identifies the app.
 * @member {String} appId
 */
DefaultResponderDefaultResponder.prototype['appId'] = undefined;

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
 * The name of the switchboard.
 * @member {String} name
 */
DefaultResponderDefaultResponder.prototype['name'] = undefined;

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
 * Indicates whether the switchboard is inherited.
 * @member {Boolean} inherited
 */
DefaultResponderDefaultResponder.prototype['inherited'] = undefined;






export default DefaultResponderDefaultResponder;

