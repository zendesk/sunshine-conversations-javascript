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
import Device from './Device';

/**
 * The DeviceListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse
 * @version 15.5.1
 */
class DeviceListResponse {
    /**
     * Constructs a new <code>DeviceListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse
     */
    constructor() { 
        
        DeviceListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DeviceListResponse} The populated <code>DeviceListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceListResponse();

            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [Device]);
            }
        }
        return obj;
    }

/**
     * Returns List of returned devices.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Device>}
     */
    getDevices() {
        return this.devices;
    }

    /**
     * Sets List of returned devices.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Device>} devices List of returned devices.
     */
    setDevices(devices) {
        this['devices'] = devices;
    }

}

/**
 * List of returned devices.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Device>} devices
 */
DeviceListResponse.prototype['devices'] = undefined;






export default DeviceListResponse;

