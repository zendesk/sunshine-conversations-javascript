/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 10.0.1
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
import AuthorWebhook from './AuthorWebhook';
import Content from './Content';
import QuotedMessage from './QuotedMessage';
import Source from './Source';

/**
 * The MessageWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook
 * @version 10.0.1
 */
class MessageWebhook {
    /**
     * Constructs a new <code>MessageWebhook</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook
     */
    constructor() { 
        
        MessageWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook} The populated <code>MessageWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageWebhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('received')) {
                obj['received'] = ApiClient.convertToType(data['received'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = AuthorWebhook.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], Content);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], Source);
            }
            if (data.hasOwnProperty('quotedMessage')) {
                obj['quotedMessage'] = ApiClient.convertToType(data['quotedMessage'], QuotedMessage);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the message.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the message.
     * @param {String} id The unique ID of the message.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
     * @return {String}
     */
    getReceived() {
        return this.received;
    }

    /**
     * Sets A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
     * @param {String} received A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
     */
    setReceived(received) {
        this['received'] = received;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
     */
    setAuthor(author) {
        this['author'] = author;
    }
/**
     * Returns The content of the message.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Content}
     */
    getContent() {
        return this.content;
    }

    /**
     * Sets The content of the message.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} content The content of the message.
     */
    setContent(content) {
        this['content'] = content;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Source}
     */
    getSource() {
        return this.source;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Source} source
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * Returns The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage}
     */
    getQuotedMessage() {
        return this.quotedMessage;
    }

    /**
     * Sets The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} quotedMessage The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
     */
    setQuotedMessage(quotedMessage) {
        this['quotedMessage'] = quotedMessage;
    }
/**
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * @param {Object} metadata
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }
/**
     * Returns true if the message serves as a placeholder for one that has been deleted.
     * @return {Boolean}
     */
    getDeleted() {
        return this.deleted;
    }

    /**
     * Sets true if the message serves as a placeholder for one that has been deleted.
     * @param {Boolean} deleted true if the message serves as a placeholder for one that has been deleted.
     */
    setDeleted(deleted) {
        this['deleted'] = deleted;
    }

}

/**
 * The unique ID of the message.
 * @member {String} id
 */
MessageWebhook.prototype['id'] = undefined;

/**
 * A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
 * @member {String} received
 */
MessageWebhook.prototype['received'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
 */
MessageWebhook.prototype['author'] = undefined;

/**
 * The content of the message.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} content
 */
MessageWebhook.prototype['content'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Source} source
 */
MessageWebhook.prototype['source'] = undefined;

/**
 * The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} quotedMessage
 */
MessageWebhook.prototype['quotedMessage'] = undefined;

/**
 * @member {Object} metadata
 */
MessageWebhook.prototype['metadata'] = undefined;

/**
 * true if the message serves as a placeholder for one that has been deleted.
 * @member {Boolean} deleted
 */
MessageWebhook.prototype['deleted'] = undefined;






export default MessageWebhook;

