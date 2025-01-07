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
import MessageOverridePayload from './MessageOverridePayload';

/**
 * The MessageOverrideWhatsapp model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp
 * @version 14.3.0
 */
class MessageOverrideWhatsapp {
    /**
     * Constructs a new <code>MessageOverrideWhatsapp</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp
     */
    constructor() { 
        
        MessageOverrideWhatsapp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverrideWhatsapp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp} The populated <code>MessageOverrideWhatsapp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverrideWhatsapp();

            if (data.hasOwnProperty('whatsapp')) {
                obj['whatsapp'] = MessageOverridePayload.constructFromObject(data['whatsapp']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getWhatsapp() {
        return this.whatsapp;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} whatsapp
     */
    setWhatsapp(whatsapp) {
        this['whatsapp'] = whatsapp;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} whatsapp
 */
MessageOverrideWhatsapp.prototype['whatsapp'] = undefined;






export default MessageOverrideWhatsapp;

