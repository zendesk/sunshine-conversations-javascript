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

/**
 * The ConversationListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter
 * @version 12.1.0
 */
class ConversationListFilter {
    /**
     * Constructs a new <code>ConversationListFilter</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter
     */
    constructor() { 
        
        ConversationListFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} The populated <code>ConversationListFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationListFilter();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The user's id. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The user's id. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userId The user's id. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userExternalId The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }

}

/**
 * The user's id. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userId
 */
ConversationListFilter.prototype['userId'] = undefined;

/**
 * The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userExternalId
 */
ConversationListFilter.prototype['userExternalId'] = undefined;






export default ConversationListFilter;

