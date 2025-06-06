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
import User from './User';

/**
 * The UserMergeEventAllOfPayloadMergedUsers model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers
 * @version 15.5.1
 */
class UserMergeEventAllOfPayloadMergedUsers {
    /**
     * Constructs a new <code>UserMergeEventAllOfPayloadMergedUsers</code>.
     * Contains information about the users that were merged together.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers
     */
    constructor() { 
        
        UserMergeEventAllOfPayloadMergedUsers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMergeEventAllOfPayloadMergedUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} The populated <code>UserMergeEventAllOfPayloadMergedUsers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMergeEventAllOfPayloadMergedUsers();

            if (data.hasOwnProperty('surviving')) {
                obj['surviving'] = ApiClient.convertToType(data['surviving'], User);
            }
            if (data.hasOwnProperty('discarded')) {
                obj['discarded'] = ApiClient.convertToType(data['discarded'], User);
            }
        }
        return obj;
    }

/**
     * Returns The user that now represents the merged user object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getSurviving() {
        return this.surviving;
    }

    /**
     * Sets The user that now represents the merged user object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} surviving The user that now represents the merged user object.
     */
    setSurviving(surviving) {
        this['surviving'] = surviving;
    }
/**
     * Returns The user that was unified into the surviving user object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getDiscarded() {
        return this.discarded;
    }

    /**
     * Sets The user that was unified into the surviving user object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} discarded The user that was unified into the surviving user object.
     */
    setDiscarded(discarded) {
        this['discarded'] = discarded;
    }

}

/**
 * The user that now represents the merged user object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} surviving
 */
UserMergeEventAllOfPayloadMergedUsers.prototype['surviving'] = undefined;

/**
 * The user that was unified into the surviving user object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} discarded
 */
UserMergeEventAllOfPayloadMergedUsers.prototype['discarded'] = undefined;






export default UserMergeEventAllOfPayloadMergedUsers;

