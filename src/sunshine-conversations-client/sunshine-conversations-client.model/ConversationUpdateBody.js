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
 * The ConversationUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody
 * @version 14.3.0
 */
class ConversationUpdateBody {
    /**
     * Constructs a new <code>ConversationUpdateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody
     */
    constructor() { 
        
        ConversationUpdateBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} The populated <code>ConversationUpdateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationUpdateBody();

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
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
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

}

/**
 * A friendly name for the conversation, may be displayed to the business or the user. 
 * @member {String} displayName
 */
ConversationUpdateBody.prototype['displayName'] = undefined;

/**
 * A short text describing the conversation.
 * @member {String} description
 */
ConversationUpdateBody.prototype['description'] = undefined;

/**
 * A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} iconUrl
 */
ConversationUpdateBody.prototype['iconUrl'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
ConversationUpdateBody.prototype['metadata'] = undefined;






export default ConversationUpdateBody;

