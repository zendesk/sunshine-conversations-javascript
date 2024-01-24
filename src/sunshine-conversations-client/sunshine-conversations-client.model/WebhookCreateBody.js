/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.0
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
import WebhookBody from './WebhookBody';

/**
 * The WebhookCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody
 * @version 12.2.0
 */
class WebhookCreateBody {
    /**
     * Constructs a new <code>WebhookCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
     * @param target {String} URL to be called when the webhook is triggered.
     * @param triggers {Array.<String>} An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
     */
    constructor(target, triggers) { 
        WebhookBody.initialize(this);
        WebhookCreateBody.initialize(this, target, triggers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, target, triggers) { 
    }

    /**
     * Constructs a <code>WebhookCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} The populated <code>WebhookCreateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookCreateBody();
            WebhookBody.constructFromObject(data, obj);
            WebhookBody.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement WebhookBody interface:
/**
 * URL to be called when the webhook is triggered.
 * @member {String} target
 */
WebhookBody.prototype['target'] = undefined;
/**
 * An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
 * @member {Array.<String>} triggers
 */
WebhookBody.prototype['triggers'] = undefined;
/**
 * A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
 * @member {Boolean} includeFullUser
 * @default false
 */
WebhookBody.prototype['includeFullUser'] = false;
/**
 * A boolean specifying whether webhook payloads should include the client and device object (when applicable).
 * @member {Boolean} includeFullSource
 * @default false
 */
WebhookBody.prototype['includeFullSource'] = false;




export default WebhookCreateBody;

