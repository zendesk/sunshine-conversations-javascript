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
import Field from './Field';
import FormResponseMessageFieldAllOf from './FormResponseMessageFieldAllOf';

/**
 * The FormResponseMessageField model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField
 * @version 15.5.1
 */
class FormResponseMessageField {
    /**
     * Constructs a new <code>FormResponseMessageField</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Field
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageFieldAllOf
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField.TypeEnum} The field type.
     * @param name {String} The name of the field. Must be unique per form or formResponse.
     * @param label {String} The label of the field. What the field is displayed as on Web Messenger.
     */
    constructor(type, name, label) { 
        Field.initialize(this, type, name, label);FormResponseMessageFieldAllOf.initialize(this);
        FormResponseMessageField.initialize(this, type, name, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, label) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>FormResponseMessageField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField} The populated <code>FormResponseMessageField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormResponseMessageField();
            Field.constructFromObject(data, obj);
            FormResponseMessageFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], [Object]);
            }
            if (data.hasOwnProperty('quotedMessageId')) {
                obj['quotedMessageId'] = ApiClient.convertToType(data['quotedMessageId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The field type.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The field type.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField.TypeEnum} type The field type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The name of the field. Must be unique per form or formResponse.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the field. Must be unique per form or formResponse.
     * @param {String} name The name of the field. Must be unique per form or formResponse.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The label of the field. What the field is displayed as on Web Messenger.
     * @return {String}
     */
    getLabel() {
        return this.label;
    }

    /**
     * Sets The label of the field. What the field is displayed as on Web Messenger.
     * @param {String} label The label of the field. What the field is displayed as on Web Messenger.
     */
    setLabel(label) {
        this['label'] = label;
    }
/**
     * Returns Specifies the response for a text field.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets Specifies the response for a text field.
     * @param {String} text Specifies the response for a text field.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Specifies the response for a email field.
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Specifies the response for a email field.
     * @param {String} email Specifies the response for a email field.
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns Array of objects representing the response for a field of type select. Form and formResponse messages only.
     * @return {Array.<Object>}
     */
    getSelect() {
        return this.select;
    }

    /**
     * Sets Array of objects representing the response for a field of type select. Form and formResponse messages only.
     * @param {Array.<Object>} select Array of objects representing the response for a field of type select. Form and formResponse messages only.
     */
    setSelect(select) {
        this['select'] = select;
    }
/**
     * Returns The messageId for the form that this response belongs to.
     * @return {String}
     */
    getQuotedMessageId() {
        return this.quotedMessageId;
    }

    /**
     * Sets The messageId for the form that this response belongs to.
     * @param {String} quotedMessageId The messageId for the form that this response belongs to.
     */
    setQuotedMessageId(quotedMessageId) {
        this['quotedMessageId'] = quotedMessageId;
    }

}

/**
 * The field type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageField.TypeEnum} type
 */
FormResponseMessageField.prototype['type'] = undefined;

/**
 * The name of the field. Must be unique per form or formResponse.
 * @member {String} name
 */
FormResponseMessageField.prototype['name'] = undefined;

/**
 * The label of the field. What the field is displayed as on Web Messenger.
 * @member {String} label
 */
FormResponseMessageField.prototype['label'] = undefined;

/**
 * Specifies the response for a text field.
 * @member {String} text
 */
FormResponseMessageField.prototype['text'] = undefined;

/**
 * Specifies the response for a email field.
 * @member {String} email
 */
FormResponseMessageField.prototype['email'] = undefined;

/**
 * Array of objects representing the response for a field of type select. Form and formResponse messages only.
 * @member {Array.<Object>} select
 */
FormResponseMessageField.prototype['select'] = undefined;

/**
 * The messageId for the form that this response belongs to.
 * @member {String} quotedMessageId
 */
FormResponseMessageField.prototype['quotedMessageId'] = undefined;


// Implement Field interface:
/**
 * The field type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type
 */
Field.prototype['type'] = undefined;
/**
 * The name of the field. Must be unique per form or formResponse.
 * @member {String} name
 */
Field.prototype['name'] = undefined;
/**
 * The label of the field. What the field is displayed as on Web Messenger.
 * @member {String} label
 */
Field.prototype['label'] = undefined;
/**
 * Specifies the response for a text field.
 * @member {String} text
 */
Field.prototype['text'] = undefined;
/**
 * Specifies the response for a email field.
 * @member {String} email
 */
Field.prototype['email'] = undefined;
/**
 * Array of objects representing the response for a field of type select. Form and formResponse messages only.
 * @member {Array.<Object>} select
 */
Field.prototype['select'] = undefined;
// Implement FormResponseMessageFieldAllOf interface:
/**
 * The messageId for the form that this response belongs to.
 * @member {String} quotedMessageId
 */
FormResponseMessageFieldAllOf.prototype['quotedMessageId'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FormResponseMessageField['TypeEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "select"
     * @const
     */
    "select": "select",

    /**
     * value: "text"
     * @const
     */
    "text": "text"
};



export default FormResponseMessageField;

