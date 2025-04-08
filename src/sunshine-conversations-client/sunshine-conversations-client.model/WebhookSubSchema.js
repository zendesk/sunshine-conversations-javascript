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

/**
 * The WebhookSubSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema
 * @version 15.3.1
 */
class WebhookSubSchema {
    /**
     * Constructs a new <code>WebhookSubSchema</code>.
     * The webhook that generated the payload.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema
     */
    constructor() { 
        
        WebhookSubSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookSubSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema} The populated <code>WebhookSubSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSubSchema();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the webhook.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the webhook.
     * @param {String} id The unique ID of the webhook.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Schema version of the payload delivered to this webhook (v2).
     * @return {String}
     */
    getVersion() {
        return this.version;
    }

    /**
     * Sets Schema version of the payload delivered to this webhook (v2).
     * @param {String} version Schema version of the payload delivered to this webhook (v2).
     */
    setVersion(version) {
        this['version'] = version;
    }

}

/**
 * The unique ID of the webhook.
 * @member {String} id
 */
WebhookSubSchema.prototype['id'] = undefined;

/**
 * Schema version of the payload delivered to this webhook (v2).
 * @member {String} version
 */
WebhookSubSchema.prototype['version'] = undefined;






export default WebhookSubSchema;

