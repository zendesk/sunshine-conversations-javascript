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
import ActionSubset from './ActionSubset';
import Item from './Item';

/**
 * The ListMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
 * @version 15.5.1
 */
class ListMessage {
    /**
     * Constructs a new <code>ListMessage</code>.
     * List messages are a vertically scrollable set of items that may each contain text, an image, and message actions. Not all messaging channels fully support list messages. * Facebook Messenger and WeChat have native support. * For LINE and our Android, iOS and Web SDK, Sunshine Conversations converts list messages to carousel. * On WhatsApp, Telegram and Twitter, Sunshine Conversations converts list messages to multiple rich messages. * On all other platforms, Sunshine Conversations converts list messages to raw text. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    constructor(type, items) { 
        
        ListMessage.initialize(this, type, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, items) { 
        obj['type'] = type;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ListMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage} The populated <code>ListMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('blockChatInput')) {
                obj['blockChatInput'] = ApiClient.convertToType(data['blockChatInput'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [ActionSubset]);
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
     * Returns When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user's ability to send messages in the conversation.
     * @return {Boolean}
     */
    getBlockChatInput() {
        return this.blockChatInput;
    }

    /**
     * Sets When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user's ability to send messages in the conversation.
     * @param {Boolean} blockChatInput When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user's ability to send messages in the conversation.
     */
    setBlockChatInput(blockChatInput) {
        this['blockChatInput'] = blockChatInput;
    }
/**
     * Returns An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>}
     */
    getItems() {
        return this.items;
    }

    /**
     * Sets An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    setItems(items) {
        this['items'] = items;
    }
/**
     * Returns An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>}
     */
    getActions() {
        return this.actions;
    }

    /**
     * Sets An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     */
    setActions(actions) {
        this['actions'] = actions;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'list'
 */
ListMessage.prototype['type'] = 'list';

/**
 * When set to true, the chat input will be disabled on supported client implementations when the message is the most recent one in the history. Can be used for guided flows or to temporarily disable the user's ability to send messages in the conversation.
 * @member {Boolean} blockChatInput
 */
ListMessage.prototype['blockChatInput'] = undefined;

/**
 * An array of objects representing the items associated with the message. Only present in carousel and list type messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items
 */
ListMessage.prototype['items'] = undefined;

/**
 * An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions
 */
ListMessage.prototype['actions'] = undefined;






export default ListMessage;

