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

/**
 * The ParticipantLeaveBodyUserId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId
 * @version 15.5.1
 */
class ParticipantLeaveBodyUserId {
    /**
     * Constructs a new <code>ParticipantLeaveBodyUserId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId
     */
    constructor() { 
        
        ParticipantLeaveBodyUserId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantLeaveBodyUserId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId} The populated <code>ParticipantLeaveBodyUserId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantLeaveBodyUserId();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @param {String} userId The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     */
    setUserId(userId) {
        this['userId'] = userId;
    }

}

/**
 * The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userId
 */
ParticipantLeaveBodyUserId.prototype['userId'] = undefined;






export default ParticipantLeaveBodyUserId;

