/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
 * The AppleMessageOverridePayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload
 * @version 14.3.1
 */
class AppleMessageOverridePayload {
    /**
     * Constructs a new <code>AppleMessageOverridePayload</code>.
     * The exact payload to send to the channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload
     */
    constructor() { 
        
        AppleMessageOverridePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppleMessageOverridePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload} The populated <code>AppleMessageOverridePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppleMessageOverridePayload();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], Object);
            }
            if (data.hasOwnProperty('withCapabilities')) {
                obj['withCapabilities'] = ApiClient.convertToType(data['withCapabilities'], ['String']);
            }
        }
        return obj;
    }

/**
     * @return {Object}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {Object} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }
/**
     * Returns List of capabilities needed for the override message to be received by the end user.   `LIST` : for list picker; `TIME` : for time picker; `FORM` : for form; `QUICK` : for quick reply; `AUTH2` : for authentication 
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload.WithCapabilitiesEnum>}
     */
    getWithCapabilities() {
        return this.withCapabilities;
    }

    /**
     * Sets List of capabilities needed for the override message to be received by the end user.   `LIST` : for list picker; `TIME` : for time picker; `FORM` : for form; `QUICK` : for quick reply; `AUTH2` : for authentication 
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload.WithCapabilitiesEnum>} withCapabilities List of capabilities needed for the override message to be received by the end user.   `LIST` : for list picker; `TIME` : for time picker; `FORM` : for form; `QUICK` : for quick reply; `AUTH2` : for authentication 
     */
    setWithCapabilities(withCapabilities) {
        this['withCapabilities'] = withCapabilities;
    }

}

/**
 * @member {Object} payload
 */
AppleMessageOverridePayload.prototype['payload'] = undefined;

/**
 * List of capabilities needed for the override message to be received by the end user.   `LIST` : for list picker; `TIME` : for time picker; `FORM` : for form; `QUICK` : for quick reply; `AUTH2` : for authentication 
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppleMessageOverridePayload.WithCapabilitiesEnum>} withCapabilities
 */
AppleMessageOverridePayload.prototype['withCapabilities'] = undefined;





/**
 * Allowed values for the <code>withCapabilities</code> property.
 * @enum {String}
 * @readonly
 */
AppleMessageOverridePayload['WithCapabilitiesEnum'] = {

    /**
     * value: "LIST"
     * @const
     */
    "LIST": "LIST",

    /**
     * value: "TIME"
     * @const
     */
    "TIME": "TIME",

    /**
     * value: "FORM"
     * @const
     */
    "FORM": "FORM",

    /**
     * value: "QUICK"
     * @const
     */
    "QUICK": "QUICK",

    /**
     * value: "AUTH2"
     * @const
     */
    "AUTH2": "AUTH2"
};



export default AppleMessageOverridePayload;

