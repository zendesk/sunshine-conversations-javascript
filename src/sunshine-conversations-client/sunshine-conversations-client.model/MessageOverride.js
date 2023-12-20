/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.1.0
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
import MessageOverrideApple from './MessageOverrideApple';
import MessageOverrideLine from './MessageOverrideLine';
import MessageOverrideMessenger from './MessageOverrideMessenger';
import MessageOverridePayload from './MessageOverridePayload';
import MessageOverrideWhatsapp from './MessageOverrideWhatsapp';

/**
 * The MessageOverride model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride
 * @version 12.1.0
 */
class MessageOverride {
    /**
     * Constructs a new <code>MessageOverride</code>.
     * A raw payload containing a message that is sent directly to a channel. Messages for [Apple Business Chat](https://docs.smooch.io/guide/apple-business-chat/#passthrough-api), [Line](https://docs.smooch.io/guide/line/#passthrough-api), [Messenger](https://docs.smooch.io/guide/facebook-messenger/#passthrough-api), [Whatsapp](https://docs.smooch.io/guide/whatsapp/#passthrough-api) channels are supported.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideWhatsapp
     */
    constructor() { 
        MessageOverrideApple.initialize(this);MessageOverrideLine.initialize(this);MessageOverrideMessenger.initialize(this);MessageOverrideWhatsapp.initialize(this);
        MessageOverride.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverride</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} The populated <code>MessageOverride</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverride();
            MessageOverrideApple.constructFromObject(data, obj);
            MessageOverrideLine.constructFromObject(data, obj);
            MessageOverrideMessenger.constructFromObject(data, obj);
            MessageOverrideWhatsapp.constructFromObject(data, obj);

            if (data.hasOwnProperty('apple')) {
                obj['apple'] = MessageOverridePayload.constructFromObject(data['apple']);
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = MessageOverridePayload.constructFromObject(data['line']);
            }
            if (data.hasOwnProperty('messenger')) {
                obj['messenger'] = MessageOverridePayload.constructFromObject(data['messenger']);
            }
            if (data.hasOwnProperty('whatsapp')) {
                obj['whatsapp'] = MessageOverridePayload.constructFromObject(data['whatsapp']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getApple() {
        return this.apple;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
     */
    setApple(apple) {
        this['apple'] = apple;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getLine() {
        return this.line;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
     */
    setLine(line) {
        this['line'] = line;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getMessenger() {
        return this.messenger;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
     */
    setMessenger(messenger) {
        this['messenger'] = messenger;
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
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
 */
MessageOverride.prototype['apple'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
 */
MessageOverride.prototype['line'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
 */
MessageOverride.prototype['messenger'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} whatsapp
 */
MessageOverride.prototype['whatsapp'] = undefined;


// Implement MessageOverrideApple interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
 */
MessageOverrideApple.prototype['apple'] = undefined;
// Implement MessageOverrideLine interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
 */
MessageOverrideLine.prototype['line'] = undefined;
// Implement MessageOverrideMessenger interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
 */
MessageOverrideMessenger.prototype['messenger'] = undefined;
// Implement MessageOverrideWhatsapp interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} whatsapp
 */
MessageOverrideWhatsapp.prototype['whatsapp'] = undefined;




export default MessageOverride;

