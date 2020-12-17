/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.0
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
import Field from './Field';

/**
 * The FormResponseMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
 * @version 9.4.1
 */
class FormResponseMessage {
    /**
     * Constructs a new <code>FormResponseMessage</code>.
     * A formResponse type message is a response to a form type message. formResponse type messages are only supported as responses to form messages on Web Messenger and cannot be sent via the API.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
     * @param type {String} The type of message.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} Array of field objects that contain the submitted fields.
     */
    constructor(type, fields) { 
        
        FormResponseMessage.initialize(this, type, fields);
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
     * Constructs a <code>FormResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage} The populated <code>FormResponseMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormResponseMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [Field]);
            }
            if (data.hasOwnProperty('textFallback')) {
                obj['textFallback'] = ApiClient.convertToType(data['textFallback'], 'String');
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
     * Returns Array of field objects that contain the submitted fields.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
     */
    getFields() {
        return this.fields;
    }

    /**
     * Sets Array of field objects that contain the submitted fields.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields Array of field objects that contain the submitted fields.
     */
    setFields(fields) {
        this['fields'] = fields;
    }
/**
     * Returns A string containing the `label: value` of all fields, each separated by a newline character.
     * @return {String}
     */
    getTextFallback() {
        return this.textFallback;
    }

    /**
     * Sets A string containing the `label: value` of all fields, each separated by a newline character.
     * @param {String} textFallback A string containing the `label: value` of all fields, each separated by a newline character.
     */
    setTextFallback(textFallback) {
        this['textFallback'] = textFallback;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'formResponse'
 */
FormResponseMessage.prototype['type'] = 'formResponse';

/**
 * Array of field objects that contain the submitted fields.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields
 */
FormResponseMessage.prototype['fields'] = undefined;

/**
 * A string containing the `label: value` of all fields, each separated by a newline character.
 * @member {String} textFallback
 */
FormResponseMessage.prototype['textFallback'] = undefined;






export default FormResponseMessage;

