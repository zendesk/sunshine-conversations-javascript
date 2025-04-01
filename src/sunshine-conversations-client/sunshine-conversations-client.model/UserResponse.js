/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.2.0
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
 * The UserResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserResponse
 * @version 15.2.0
 */
class UserResponse {
    /**
     * Constructs a new <code>UserResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse
     */
    constructor() { 
        
        UserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
        }
        return obj;
    }

/**
     * Returns The user.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user.
     */
    setUser(user) {
        this['user'] = user;
    }

}

/**
 * The user.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
UserResponse.prototype['user'] = undefined;






export default UserResponse;

