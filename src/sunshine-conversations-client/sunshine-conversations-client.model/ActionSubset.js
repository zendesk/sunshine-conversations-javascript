/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.1.0
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
import Buy from './Buy';
import ExtraChannelOptions from './ExtraChannelOptions';
import Link from './Link';
import Postback from './Postback';
import Webview from './Webview';

/**
 * The ActionSubset model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset
 * @version 14.1.0
 */
class ActionSubset {
    /**
     * Constructs a new <code>ActionSubset</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Buy
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Link
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Postback
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Webview
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param amount {Number} The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param uri {String} The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param payload {String} The payload of a postback or reply button.
     * @param fallback {String} The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    constructor(type, text, amount, uri, payload, fallback) { 
        Buy.initialize(this, type, text, amount);Link.initialize(this, type, uri, text);Postback.initialize(this, type, text, payload);Webview.initialize(this, type, uri, text, fallback);
        ActionSubset.initialize(this, type, text, amount, uri, payload, fallback);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, amount, uri, payload, fallback) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['amount'] = amount;
        obj['uri'] = uri;
        obj['payload'] = payload;
        obj['fallback'] = fallback;
    }

    /**
     * Constructs a <code>ActionSubset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset} The populated <code>ActionSubset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionSubset();
            Buy.constructFromObject(data, obj);
            Link.constructFromObject(data, obj);
            Postback.constructFromObject(data, obj);
            Webview.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('extraChannelOptions')) {
                obj['extraChannelOptions'] = ExtraChannelOptions.constructFromObject(data['extraChannelOptions']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('fallback')) {
                obj['fallback'] = ApiClient.convertToType(data['fallback'], 'String');
            }
            if (data.hasOwnProperty('openOnReceive')) {
                obj['openOnReceive'] = ApiClient.convertToType(data['openOnReceive'], 'Boolean');
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
/**
     * Returns The webview URI. This is the URI that will open in the webview when clicking the button.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param {String} uri The webview URI. This is the URI that will open in the webview when clicking the button.
     */
    setUri(uri) {
        this['uri'] = uri;
    }
/**
     * Returns Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @return {Boolean}
     */
    getDefault() {
        return this.default;
    }

    /**
     * Sets Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @param {Boolean} _default Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     */
    setDefault(_default) {
        this['default'] = _default;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions}
     */
    getExtraChannelOptions() {
        return this.extraChannelOptions;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
     */
    setExtraChannelOptions(extraChannelOptions) {
        this['extraChannelOptions'] = extraChannelOptions;
    }
/**
     * Returns The payload of a postback or reply button.
     * @return {String}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * Sets The payload of a postback or reply button.
     * @param {String} payload The payload of a postback or reply button.
     */
    setPayload(payload) {
        this['payload'] = payload;
    }
/**
     * Returns The size to display a webview. Used for actions of type webview.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset.SizeEnum}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The size to display a webview. Used for actions of type webview.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset.SizeEnum} size The size to display a webview. Used for actions of type webview.
     */
    setSize(size) {
        this['size'] = size;
    }
/**
     * Returns The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @return {String}
     */
    getFallback() {
        return this.fallback;
    }

    /**
     * Sets The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @param {String} fallback The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    setFallback(fallback) {
        this['fallback'] = fallback;
    }
/**
     * Returns Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @return {Boolean}
     */
    getOpenOnReceive() {
        return this.openOnReceive;
    }

    /**
     * Sets Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @param {Boolean} openOnReceive Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     */
    setOpenOnReceive(openOnReceive) {
        this['openOnReceive'] = openOnReceive;
    }

}

/**
 * The type of action.
 * @member {String} type
 */
ActionSubset.prototype['type'] = undefined;

/**
 * The button text.
 * @member {String} text
 */
ActionSubset.prototype['text'] = undefined;

/**
 * The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
 * @member {Number} amount
 */
ActionSubset.prototype['amount'] = undefined;

/**
 * An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
 * @member {String} currency
 */
ActionSubset.prototype['currency'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
ActionSubset.prototype['metadata'] = undefined;

/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
ActionSubset.prototype['uri'] = undefined;

/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
ActionSubset.prototype['default'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
ActionSubset.prototype['extraChannelOptions'] = undefined;

/**
 * The payload of a postback or reply button.
 * @member {String} payload
 */
ActionSubset.prototype['payload'] = undefined;

/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset.SizeEnum} size
 */
ActionSubset.prototype['size'] = undefined;

/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
ActionSubset.prototype['fallback'] = undefined;

/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
ActionSubset.prototype['openOnReceive'] = undefined;


// Implement Buy interface:
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
// Implement Link interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'link'
 */
Link.prototype['type'] = 'link';
/**
 * The action URI. This is the link that will be used in the clients when clicking the button.
 * @member {String} uri
 */
Link.prototype['uri'] = undefined;
/**
 * The button text.
 * @member {String} text
 */
Link.prototype['text'] = undefined;
/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Link.prototype['default'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Link.prototype['metadata'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Link.prototype['extraChannelOptions'] = undefined;
// Implement Postback interface:
/**
 * The type of action.
 * @member {String} type
 * @default 'postback'
 */
Postback.prototype['type'] = 'postback';
/**
 * The button text.
 * @member {String} text
 */
Postback.prototype['text'] = undefined;
/**
 * The payload of a postback or reply button.
 * @member {String} payload
 */
Postback.prototype['payload'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Postback.prototype['metadata'] = undefined;
// Implement Webview interface:
/**
 * The type of action.
 * @member {String} type
 */
Webview.prototype['type'] = undefined;
/**
 * The webview URI. This is the URI that will open in the webview when clicking the button.
 * @member {String} uri
 */
Webview.prototype['uri'] = undefined;
/**
 * The button text.
 * @member {String} text
 */
Webview.prototype['text'] = undefined;
/**
 * Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
 * @member {Boolean} default
 */
Webview.prototype['default'] = undefined;
/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
Webview.prototype['metadata'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
 */
Webview.prototype['extraChannelOptions'] = undefined;
/**
 * The size to display a webview. Used for actions of type webview.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum} size
 */
Webview.prototype['size'] = undefined;
/**
 * The fallback uri for channels that don’t support webviews. Used for actions of type webview.
 * @member {String} fallback
 */
Webview.prototype['fallback'] = undefined;
/**
 * Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
 * @member {Boolean} openOnReceive
 */
Webview.prototype['openOnReceive'] = undefined;



/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
ActionSubset['SizeEnum'] = {

    /**
     * value: "compact"
     * @const
     */
    "compact": "compact",

    /**
     * value: "tall"
     * @const
     */
    "tall": "tall",

    /**
     * value: "full"
     * @const
     */
    "full": "full"
};



export default ActionSubset;

