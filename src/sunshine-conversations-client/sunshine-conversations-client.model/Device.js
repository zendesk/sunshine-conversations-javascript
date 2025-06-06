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
 * The Device model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Device
 * @version 15.5.1
 */
class Device {
    /**
     * Constructs a new <code>Device</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Device
     */
    constructor() { 
        
        Device.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} The populated <code>Device</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Device();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('lastSeen')) {
                obj['lastSeen'] = ApiClient.convertToType(data['lastSeen'], 'String');
            }
            if (data.hasOwnProperty('pushNotificationToken')) {
                obj['pushNotificationToken'] = ApiClient.convertToType(data['pushNotificationToken'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], {'String': Object});
            }
            if (data.hasOwnProperty('appVersion')) {
                obj['appVersion'] = ApiClient.convertToType(data['appVersion'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the device.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the device.
     * @param {String} id The unique ID of the device.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns The type of integration that the device represents.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of integration that the device represents.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.TypeEnum} type The type of integration that the device represents.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns A unique identifier for the device, generated client-side by the SDK.
     * @return {String}
     */
    getGuid() {
        return this.guid;
    }

    /**
     * Sets A unique identifier for the device, generated client-side by the SDK.
     * @param {String} guid A unique identifier for the device, generated client-side by the SDK.
     */
    setGuid(guid) {
        this['guid'] = guid;
    }
/**
     * Returns The id of the client to which this device is associated.
     * @return {String}
     */
    getClientId() {
        return this.clientId;
    }

    /**
     * Sets The id of the client to which this device is associated.
     * @param {String} clientId The id of the client to which this device is associated.
     */
    setClientId(clientId) {
        this['clientId'] = clientId;
    }
/**
     * Returns The device status. Indicates if the device will receive push notifications or not.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets The device status. Indicates if the device will receive push notifications or not.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.StatusEnum} status The device status. Indicates if the device will receive push notifications or not.
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns The ID of the integration that the device was created for.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration that the device was created for.
     * @param {String} integrationId The ID of the integration that the device was created for.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
     * @return {String}
     */
    getLastSeen() {
        return this.lastSeen;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
     * @param {String} lastSeen A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
     */
    setLastSeen(lastSeen) {
        this['lastSeen'] = lastSeen;
    }
/**
     * Returns The token used for push notifications on Android and iOS devices.
     * @return {String}
     */
    getPushNotificationToken() {
        return this.pushNotificationToken;
    }

    /**
     * Sets The token used for push notifications on Android and iOS devices.
     * @param {String} pushNotificationToken The token used for push notifications on Android and iOS devices.
     */
    setPushNotificationToken(pushNotificationToken) {
        this['pushNotificationToken'] = pushNotificationToken;
    }
/**
     * Returns A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
     * @return {Object.<String, Object>}
     */
    getInfo() {
        return this.info;
    }

    /**
     * Sets A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
     * @param {Object.<String, Object>} info A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
     */
    setInfo(info) {
        this['info'] = info;
    }
/**
     * Returns Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
     * @return {String}
     */
    getAppVersion() {
        return this.appVersion;
    }

    /**
     * Sets Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
     * @param {String} appVersion Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
     */
    setAppVersion(appVersion) {
        this['appVersion'] = appVersion;
    }

}

/**
 * The unique ID of the device.
 * @member {String} id
 */
Device.prototype['id'] = undefined;

/**
 * The type of integration that the device represents.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.TypeEnum} type
 */
Device.prototype['type'] = undefined;

/**
 * A unique identifier for the device, generated client-side by the SDK.
 * @member {String} guid
 */
Device.prototype['guid'] = undefined;

/**
 * The id of the client to which this device is associated.
 * @member {String} clientId
 */
Device.prototype['clientId'] = undefined;

/**
 * The device status. Indicates if the device will receive push notifications or not.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.StatusEnum} status
 */
Device.prototype['status'] = undefined;

/**
 * The ID of the integration that the device was created for.
 * @member {String} integrationId
 */
Device.prototype['integrationId'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
 * @member {String} lastSeen
 */
Device.prototype['lastSeen'] = undefined;

/**
 * The token used for push notifications on Android and iOS devices.
 * @member {String} pushNotificationToken
 */
Device.prototype['pushNotificationToken'] = undefined;

/**
 * A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
 * @member {Object.<String, Object>} info
 */
Device.prototype['info'] = undefined;

/**
 * Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
 * @member {String} appVersion
 */
Device.prototype['appVersion'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Device['TypeEnum'] = {

    /**
     * value: "android"
     * @const
     */
    "android": "android",

    /**
     * value: "ios"
     * @const
     */
    "ios": "ios",

    /**
     * value: "web"
     * @const
     */
    "web": "web"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Device['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default Device;

