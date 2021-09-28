/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
import ExtraChannelOptionsMessenger from './ExtraChannelOptionsMessenger';

/**
 * The ExtraChannelOptions model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions
 * @version 9.4.6
 */
class ExtraChannelOptions {
    /**
     * Constructs a new <code>ExtraChannelOptions</code>.
     * Extra options to pass directly to the channel API.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions
     */
    constructor() { 
        
        ExtraChannelOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtraChannelOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} The populated <code>ExtraChannelOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtraChannelOptions();

            if (data.hasOwnProperty('messenger')) {
                obj['messenger'] = ExtraChannelOptionsMessenger.constructFromObject(data['messenger']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger}
     */
    getMessenger() {
        return this.messenger;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} messenger
     */
    setMessenger(messenger) {
        this['messenger'] = messenger;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} messenger
 */
ExtraChannelOptions.prototype['messenger'] = undefined;






export default ExtraChannelOptions;

