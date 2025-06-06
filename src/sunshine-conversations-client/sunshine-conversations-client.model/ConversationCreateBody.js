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
import ConversationType from './ConversationType';
import ParticipantSubSchema from './ParticipantSubSchema';

/**
 * The ConversationCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody
 * @version 15.5.1
 */
class ConversationCreateBody {
    /**
     * Constructs a new <code>ConversationCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} 
     */
    constructor(type) { 
        
        ConversationCreateBody.initialize(this, type);
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
     * Constructs a <code>ConversationCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} The populated <code>ConversationCreateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationCreateBody();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ConversationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [ParticipantSubSchema]);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The users participating in the conversation. For `personal` conversations, this field is required with a length of exactly 1. For `sdkGroup` conversations, must have a length less than or equal to 10. Can be omitted to have a conversation with no participants if the type is `sdkGroup`. 
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema>}
     */
    getParticipants() {
        return this.participants;
    }

    /**
     * Sets The users participating in the conversation. For `personal` conversations, this field is required with a length of exactly 1. For `sdkGroup` conversations, must have a length less than or equal to 10. Can be omitted to have a conversation with no participants if the type is `sdkGroup`. 
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema>} participants The users participating in the conversation. For `personal` conversations, this field is required with a length of exactly 1. For `sdkGroup` conversations, must have a length less than or equal to 10. Can be omitted to have a conversation with no participants if the type is `sdkGroup`. 
     */
    setParticipants(participants) {
        this['participants'] = participants;
    }
/**
     * Returns A friendly name for the conversation, may be displayed to the business or the user. 
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A friendly name for the conversation, may be displayed to the business or the user. 
     * @param {String} displayName A friendly name for the conversation, may be displayed to the business or the user. 
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns A short text describing the conversation.
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets A short text describing the conversation.
     * @param {String} description A short text describing the conversation.
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} iconUrl A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object.<String, Object>}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object.<String, Object>} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
 */
ConversationCreateBody.prototype['type'] = undefined;

/**
 * The users participating in the conversation. For `personal` conversations, this field is required with a length of exactly 1. For `sdkGroup` conversations, must have a length less than or equal to 10. Can be omitted to have a conversation with no participants if the type is `sdkGroup`. 
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema>} participants
 */
ConversationCreateBody.prototype['participants'] = undefined;

/**
 * A friendly name for the conversation, may be displayed to the business or the user. 
 * @member {String} displayName
 */
ConversationCreateBody.prototype['displayName'] = undefined;

/**
 * A short text describing the conversation.
 * @member {String} description
 */
ConversationCreateBody.prototype['description'] = undefined;

/**
 * A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} iconUrl
 */
ConversationCreateBody.prototype['iconUrl'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object.<String, Object>} metadata
 */
ConversationCreateBody.prototype['metadata'] = undefined;






export default ConversationCreateBody;

