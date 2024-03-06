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
import FormMessageField from './FormMessageField';

/**
 * The FormMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
 * @version 12.3.0
 */
class FormMessage {
    /**
     * Constructs a new <code>FormMessage</code>.
     * A form type message without text or actions. Only supported in the Web SDK.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
     * @param type {String} The type of message.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageField>} An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     */
    constructor(type, fields) { 
        
        FormMessage.initialize(this, type, fields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, fields) { 
        obj['type'] = type;
        obj['fields'] = fields;
    }

    /**
     * Constructs a <code>FormMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage} The populated <code>FormMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('submitted')) {
                obj['submitted'] = ApiClient.convertToType(data['submitted'], 'Boolean');
            }
            if (data.hasOwnProperty('blockChatInput')) {
                obj['blockChatInput'] = ApiClient.convertToType(data['blockChatInput'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [FormMessageField]);
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
     * Returns Flag which states whether the form is submitted.
     * @return {Boolean}
     */
    getSubmitted() {
        return this.submitted;
    }

    /**
     * Sets Flag which states whether the form is submitted.
     * @param {Boolean} submitted Flag which states whether the form is submitted.
     */
    setSubmitted(submitted) {
        this['submitted'] = submitted;
    }
/**
     * Returns true if the message should block the chat input on Web Messenger.
     * @return {Boolean}
     */
    getBlockChatInput() {
        return this.blockChatInput;
    }

    /**
     * Sets true if the message should block the chat input on Web Messenger.
     * @param {Boolean} blockChatInput true if the message should block the chat input on Web Messenger.
     */
    setBlockChatInput(blockChatInput) {
        this['blockChatInput'] = blockChatInput;
    }
/**
     * Returns An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageField>}
     */
    getFields() {
        return this.fields;
    }

    /**
     * Sets An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageField>} fields An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     */
    setFields(fields) {
        this['fields'] = fields;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'form'
 */
FormMessage.prototype['type'] = 'form';

/**
 * Flag which states whether the form is submitted.
 * @member {Boolean} submitted
 */
FormMessage.prototype['submitted'] = undefined;

/**
 * true if the message should block the chat input on Web Messenger.
 * @member {Boolean} blockChatInput
 */
FormMessage.prototype['blockChatInput'] = undefined;

/**
 * An array of objects representing fields associated with the message. Only present in form and formResponse messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageField>} fields
 */
FormMessage.prototype['fields'] = undefined;






export default FormMessage;

