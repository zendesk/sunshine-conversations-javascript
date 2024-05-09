/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.0
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
 * The Buy model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Buy
 * @version 12.5.0
 */
class Buy {
    /**
     * Constructs a new <code>Buy</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Buy
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param amount {Number} The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    constructor(type, text, amount) { 
        
        Buy.initialize(this, type, text, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, amount) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>Buy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Buy} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Buy} The populated <code>Buy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Buy();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The type of action.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The button text.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @return {Number}
     */
    getAmount() {
        return this.amount;
    }

    /**
     * Sets The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param {Number} amount The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    setAmount(amount) {
        this['amount'] = amount;
    }
/**
     * Returns An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @return {String}
     */
    getCurrency() {
        return this.currency;
    }

    /**
     * Sets An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @param {String} currency An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     */
    setCurrency(currency) {
        this['currency'] = currency;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The type of action.
 * @member {String} type
 * @default 'buy'
 */
Buy.prototype['type'] = 'buy';

/**
 * The button text.
 * @member {String} text
 */
Buy.prototype['text'] = undefined;

/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
Buy.prototype['amount'] = undefined;

/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
Buy.prototype['currency'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Buy.prototype['metadata'] = undefined;






export default Buy;

