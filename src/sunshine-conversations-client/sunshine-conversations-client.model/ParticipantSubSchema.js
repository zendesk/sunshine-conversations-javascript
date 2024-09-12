/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.8.0
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
import ParticipantWithUserExternalId from './ParticipantWithUserExternalId';
import ParticipantWithUserId from './ParticipantWithUserId';

/**
 * The ParticipantSubSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema
 * @version 12.8.0
 */
class ParticipantSubSchema {
    /**
     * Constructs a new <code>ParticipantSubSchema</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserExternalId
     */
    constructor() { 
        ParticipantWithUserId.initialize(this);ParticipantWithUserExternalId.initialize(this);
        ParticipantSubSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantSubSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantSubSchema} The populated <code>ParticipantSubSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantSubSchema();
            ParticipantWithUserId.constructFromObject(data, obj);
            ParticipantWithUserExternalId.constructFromObject(data, obj);

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('subscribeSDKClient')) {
                obj['subscribeSDKClient'] = ApiClient.convertToType(data['subscribeSDKClient'], 'Boolean');
            }
            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userId The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     * @return {Boolean}
     */
    getSubscribeSDKClient() {
        return this.subscribeSDKClient;
    }

    /**
     * Sets When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     * @param {Boolean} subscribeSDKClient When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     */
    setSubscribeSDKClient(subscribeSDKClient) {
        this['subscribeSDKClient'] = subscribeSDKClient;
    }
/**
     * Returns The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userExternalId The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }

}

/**
 * The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userId
 */
ParticipantSubSchema.prototype['userId'] = undefined;

/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantSubSchema.prototype['subscribeSDKClient'] = undefined;

/**
 * The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userExternalId
 */
ParticipantSubSchema.prototype['userExternalId'] = undefined;


// Implement ParticipantWithUserId interface:
/**
 * The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userId
 */
ParticipantWithUserId.prototype['userId'] = undefined;
/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantWithUserId.prototype['subscribeSDKClient'] = undefined;
// Implement ParticipantWithUserExternalId interface:
/**
 * The `externalId` of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
 * @member {String} userExternalId
 */
ParticipantWithUserExternalId.prototype['userExternalId'] = undefined;
/**
 * When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
 * @member {Boolean} subscribeSDKClient
 */
ParticipantWithUserExternalId.prototype['subscribeSDKClient'] = undefined;




export default ParticipantSubSchema;

