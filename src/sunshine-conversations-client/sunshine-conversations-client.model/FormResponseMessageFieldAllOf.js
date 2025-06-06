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

/**
 * The FormResponseMessageFieldAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageFieldAllOf
 * @version 15.5.1
 */
class FormResponseMessageFieldAllOf {
    /**
     * Constructs a new <code>FormResponseMessageFieldAllOf</code>.
     * Properties that can be expected to receive inside a form response message field. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageFieldAllOf
     */
    constructor() { 
        
        FormResponseMessageFieldAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormResponseMessageFieldAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageFieldAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessageFieldAllOf} The populated <code>FormResponseMessageFieldAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormResponseMessageFieldAllOf();

            if (data.hasOwnProperty('quotedMessageId')) {
                obj['quotedMessageId'] = ApiClient.convertToType(data['quotedMessageId'], 'String');
            }
        }
        return obj;
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
 * The messageId for the form that this response belongs to.
 * @member {String} quotedMessageId
 */
FormResponseMessageFieldAllOf.prototype['quotedMessageId'] = undefined;






export default FormResponseMessageFieldAllOf;

