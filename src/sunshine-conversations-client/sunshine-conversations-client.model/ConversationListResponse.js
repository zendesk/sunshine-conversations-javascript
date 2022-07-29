/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.11.0
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
import Conversation from './Conversation';
import Links from './Links';
import Meta from './Meta';

/**
 * The ConversationListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse
 * @version 9.11.0
 */
class ConversationListResponse {
    /**
     * Constructs a new <code>ConversationListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse
     */
    constructor() { 
        
        ConversationListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse} The populated <code>ConversationListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationListResponse();

            if (data.hasOwnProperty('conversations')) {
                obj['conversations'] = ApiClient.convertToType(data['conversations'], [Conversation]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

/**
     * Returns List of returned conversations.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation>}
     */
    getConversations() {
        return this.conversations;
    }

    /**
     * Sets List of returned conversations.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation>} conversations List of returned conversations.
     */
    setConversations(conversations) {
        this['conversations'] = conversations;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
     */
    getMeta() {
        return this.meta;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta) {
        this['meta'] = meta;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
     */
    getLinks() {
        return this.links;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links) {
        this['links'] = links;
    }

}

/**
 * List of returned conversations.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation>} conversations
 */
ConversationListResponse.prototype['conversations'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
 */
ConversationListResponse.prototype['meta'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
 */
ConversationListResponse.prototype['links'] = undefined;






export default ConversationListResponse;

