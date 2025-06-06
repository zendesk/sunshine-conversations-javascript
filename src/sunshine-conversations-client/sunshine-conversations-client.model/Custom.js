/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.5.1
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
import CustomAllOf from './CustomAllOf';
import Integration from './Integration';
import Status from './Status';
import Webhook from './Webhook';

/**
 * The Custom model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Custom
 * @version 15.5.1
 */
class Custom {
    /**
     * Constructs a new <code>Custom</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Custom
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
     * @param type {String} To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     * @param webhooks {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} An array of webhooks associated with the custom integration.
     */
    constructor(type, webhooks) { 
        Integration.initialize(this, type);CustomAllOf.initialize(this, webhooks);
        Custom.initialize(this, type, webhooks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, webhooks) { 
        obj['webhooks'] = webhooks;
    }

    /**
     * Constructs a <code>Custom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Custom} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Custom} The populated <code>Custom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Custom();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            CustomAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [Webhook]);
            }
        }
        return obj;
    }

/**
     * Returns To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     * @param {String} type To configure a custom integration you need to setup a webhook with a set of triggers and target. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns An array of webhooks associated with the custom integration.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>}
     */
    getWebhooks() {
        return this.webhooks;
    }

    /**
     * Sets An array of webhooks associated with the custom integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks An array of webhooks associated with the custom integration.
     */
    setWebhooks(webhooks) {
        this['webhooks'] = webhooks;
    }

}

/**
 * To configure a custom integration you need to setup a webhook with a set of triggers and target. 
 * @member {String} type
 * @default 'custom'
 */
Custom.prototype['type'] = 'custom';

/**
 * An array of webhooks associated with the custom integration.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks
 */
Custom.prototype['webhooks'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement CustomAllOf interface:
/**
 * To configure a custom integration you need to setup a webhook with a set of triggers and target. 
 * @member {String} type
 * @default 'custom'
 */
CustomAllOf.prototype['type'] = 'custom';
/**
 * An array of webhooks associated with the custom integration.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks
 */
CustomAllOf.prototype['webhooks'] = undefined;




export default Custom;

