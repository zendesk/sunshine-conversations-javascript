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
 * The TemplateMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TemplateMessage
 * @version 15.0.0
 */
class TemplateMessage {
    /**
     * Constructs a new <code>TemplateMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TemplateMessage
     * @param type {String} The type of message.
     * @param template {Object} The whatsapp template message to send. For more information, consult the [guide](https://docs.smooch.io/guide/whatsapp#sending-message-templates). `schema` must be set to `whatsapp`.
     */
    constructor(type, template) { 
        
        TemplateMessage.initialize(this, type, template);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, template) { 
        obj['type'] = type;
        obj['template'] = template;
    }

    /**
     * Constructs a <code>TemplateMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TemplateMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TemplateMessage} The populated <code>TemplateMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The type of message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The whatsapp template message to send. For more information, consult the [guide](https://docs.smooch.io/guide/whatsapp#sending-message-templates). `schema` must be set to `whatsapp`.
     * @return {Object}
     */
    getTemplate() {
        return this.template;
    }

    /**
     * Sets The whatsapp template message to send. For more information, consult the [guide](https://docs.smooch.io/guide/whatsapp#sending-message-templates). `schema` must be set to `whatsapp`.
     * @param {Object} template The whatsapp template message to send. For more information, consult the [guide](https://docs.smooch.io/guide/whatsapp#sending-message-templates). `schema` must be set to `whatsapp`.
     */
    setTemplate(template) {
        this['template'] = template;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'template'
 */
TemplateMessage.prototype['type'] = 'template';

/**
 * The whatsapp template message to send. For more information, consult the [guide](https://docs.smooch.io/guide/whatsapp#sending-message-templates). `schema` must be set to `whatsapp`.
 * @member {Object} template
 */
TemplateMessage.prototype['template'] = undefined;






export default TemplateMessage;

