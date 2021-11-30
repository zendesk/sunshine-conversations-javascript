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
import ActivityPostAllOf from './ActivityPostAllOf';
import ActivityTypes from './ActivityTypes';
import Author from './Author';

/**
 * The ActivityPost model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost
 * @version 9.5.7
 */
class ActivityPost {
    /**
     * Constructs a new <code>ActivityPost</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
     * @param author {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The author of the activity.
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum} If the author type is `user`, only `conversation:read` is supported.
     */
    constructor(author, type) { 
        ActivityPostAllOf.initialize(this);ActivityTypes.initialize(this);
        ActivityPost.initialize(this, author, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, type) { 
        obj['author'] = author;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ActivityPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} The populated <code>ActivityPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityPost();
            ActivityPostAllOf.constructFromObject(data, obj);
            ActivityTypes.constructFromObject(data, obj);

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], Author);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The author of the activity.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * Sets The author of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the activity.
     */
    setAuthor(author) {
        this['author'] = author;
    }
/**
     * Returns If the author type is `user`, only `conversation:read` is supported.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets If the author type is `user`, only `conversation:read` is supported.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum} type If the author type is `user`, only `conversation:read` is supported.
     */
    setType(type) {
        this['type'] = type;
    }

}

/**
 * The author of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author
 */
ActivityPost.prototype['author'] = undefined;

/**
 * If the author type is `user`, only `conversation:read` is supported.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum} type
 */
ActivityPost.prototype['type'] = undefined;


// Implement ActivityPostAllOf interface:
/**
 * The author of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author
 */
ActivityPostAllOf.prototype['author'] = undefined;
// Implement ActivityTypes interface:
/**
 * If the author type is `user`, only `conversation:read` is supported.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum} type
 */
ActivityTypes.prototype['type'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ActivityPost['TypeEnum'] = {

    /**
     * value: "conversation:read"
     * @const
     */
    "conversation:read": "conversation:read",

    /**
     * value: "typing:start"
     * @const
     */
    "typing:start": "typing:start",

    /**
     * value: "typing:stop"
     * @const
     */
    "typing:stop": "typing:stop"
};



export default ActivityPost;

