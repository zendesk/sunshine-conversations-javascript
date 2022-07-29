/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.11.0
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
 * The LocationMessageLocation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation
 * @version 9.11.0
 */
class LocationMessageLocation {
    /**
     * Constructs a new <code>LocationMessageLocation</code>.
     * Information about the location.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation
     */
    constructor() { 
        
        LocationMessageLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationMessageLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} The populated <code>LocationMessageLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationMessageLocation();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A string representing the address of the location.
     * @return {String}
     */
    getAddress() {
        return this.address;
    }

    /**
     * Sets A string representing the address of the location.
     * @param {String} address A string representing the address of the location.
     */
    setAddress(address) {
        this['address'] = address;
    }
/**
     * Returns A string representing the name of the location.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets A string representing the name of the location.
     * @param {String} name A string representing the name of the location.
     */
    setName(name) {
        this['name'] = name;
    }

}

/**
 * A string representing the address of the location.
 * @member {String} address
 */
LocationMessageLocation.prototype['address'] = undefined;

/**
 * A string representing the name of the location.
 * @member {String} name
 */
LocationMessageLocation.prototype['name'] = undefined;






export default LocationMessageLocation;

