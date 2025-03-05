/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.1
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
import Client from './Client';
import Device from './Device';

/**
 * The Source model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Source
 * @version 15.0.1
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * The source of the message.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Source
     * @param type {String} An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     */
    constructor(type) { 
        
        Source.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Source} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('originalMessageId')) {
                obj['originalMessageId'] = ApiClient.convertToType(data['originalMessageId'], 'String');
            }
            if (data.hasOwnProperty('originalMessageTimestamp')) {
                obj['originalMessageTimestamp'] = ApiClient.convertToType(data['originalMessageTimestamp'], 'String');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], Client);
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], Device);
            }
        }
        return obj;
    }

/**
     * Returns An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     * @param {String} type An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Identifier indicating which integration the message was sent from. For user messages only.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets Identifier indicating which integration the message was sent from. For user messages only.
     * @param {String} integrationId Identifier indicating which integration the message was sent from. For user messages only.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Message identifier assigned by the originating channel.
     * @return {String}
     */
    getOriginalMessageId() {
        return this.originalMessageId;
    }

    /**
     * Sets Message identifier assigned by the originating channel.
     * @param {String} originalMessageId Message identifier assigned by the originating channel.
     */
    setOriginalMessageId(originalMessageId) {
        this['originalMessageId'] = originalMessageId;
    }
/**
     * Returns A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when the third party channel received the message.
     * @return {String}
     */
    getOriginalMessageTimestamp() {
        return this.originalMessageTimestamp;
    }

    /**
     * Sets A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when the third party channel received the message.
     * @param {String} originalMessageTimestamp A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when the third party channel received the message.
     */
    setOriginalMessageTimestamp(originalMessageTimestamp) {
        this['originalMessageTimestamp'] = originalMessageTimestamp;
    }
/**
     * Returns The client from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getClient() {
        return this.client;
    }

    /**
     * Sets The client from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The client from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     */
    setClient(client) {
        this['client'] = client;
    }
/**
     * Returns The device from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device}
     */
    getDevice() {
        return this.device;
    }

    /**
     * Sets The device from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device The device from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
     */
    setDevice(device) {
        this['device'] = device;
    }

}

/**
 * An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
 * @member {String} type
 */
Source.prototype['type'] = undefined;

/**
 * Identifier indicating which integration the message was sent from. For user messages only.
 * @member {String} integrationId
 */
Source.prototype['integrationId'] = undefined;

/**
 * Message identifier assigned by the originating channel.
 * @member {String} originalMessageId
 */
Source.prototype['originalMessageId'] = undefined;

/**
 * A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when the third party channel received the message.
 * @member {String} originalMessageTimestamp
 */
Source.prototype['originalMessageTimestamp'] = undefined;

/**
 * The client from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
 */
Source.prototype['client'] = undefined;

/**
 * The device from which the user authored the message or activity, if applicable. This field is not applicable in API responses, it is used only in webhook payloads if the `includeFullSource` option is enabled.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device
 */
Source.prototype['device'] = undefined;






export default Source;

