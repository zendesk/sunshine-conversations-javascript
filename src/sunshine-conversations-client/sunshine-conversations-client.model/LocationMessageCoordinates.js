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
 * The LocationMessageCoordinates model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates
 * @version 14.3.0
 */
class LocationMessageCoordinates {
    /**
     * Constructs a new <code>LocationMessageCoordinates</code>.
     * The coordinates of the location.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates
     * @param lat {Number} Global latitude.
     * @param _long {Number} Global longitude.
     */
    constructor(lat, _long) { 
        
        LocationMessageCoordinates.initialize(this, lat, _long);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lat, _long) { 
        obj['lat'] = lat;
        obj['long'] = _long;
    }

    /**
     * Constructs a <code>LocationMessageCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} The populated <code>LocationMessageCoordinates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationMessageCoordinates();

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('long')) {
                obj['long'] = ApiClient.convertToType(data['long'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Global latitude.
     * @return {Number}
     */
    getLat() {
        return this.lat;
    }

    /**
     * Sets Global latitude.
     * @param {Number} lat Global latitude.
     */
    setLat(lat) {
        this['lat'] = lat;
    }
/**
     * Returns Global longitude.
     * @return {Number}
     */
    getLong() {
        return this.long;
    }

    /**
     * Sets Global longitude.
     * @param {Number} _long Global longitude.
     */
    setLong(_long) {
        this['long'] = _long;
    }

}

/**
 * Global latitude.
 * @member {Number} lat
 */
LocationMessageCoordinates.prototype['lat'] = undefined;

/**
 * Global longitude.
 * @member {Number} long
 */
LocationMessageCoordinates.prototype['long'] = undefined;






export default LocationMessageCoordinates;

