/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.3.0
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
import LocationMessageCoordinates from './LocationMessageCoordinates';
import LocationMessageLocation from './LocationMessageLocation';

/**
 * The LocationMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
 * @version 12.3.0
 */
class LocationMessage {
    /**
     * Constructs a new <code>LocationMessage</code>.
     * A location type message includes the coordinates (latitude and longitude) of a location and an optional location object which can include the name and address of the location. Typically sent in response to a Location Request.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
     * @param type {String} The type of message.
     * @param coordinates {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} 
     */
    constructor(type, coordinates) { 
        
        LocationMessage.initialize(this, type, coordinates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, coordinates) { 
        obj['type'] = type;
        obj['coordinates'] = coordinates;
    }

    /**
     * Constructs a <code>LocationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage} The populated <code>LocationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('coordinates')) {
                obj['coordinates'] = LocationMessageCoordinates.constructFromObject(data['coordinates']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = LocationMessageLocation.constructFromObject(data['location']);
            }
        }
        return obj;
    }

/**
     * Returns The type of message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The fallback text message used when location messages are not supported by the channel.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The fallback text message used when location messages are not supported by the channel.
     * @param {String} text The fallback text message used when location messages are not supported by the channel.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates}
     */
    getCoordinates() {
        return this.coordinates;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
     */
    setCoordinates(coordinates) {
        this['coordinates'] = coordinates;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation}
     */
    getLocation() {
        return this.location;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
     */
    setLocation(location) {
        this['location'] = location;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'location'
 */
LocationMessage.prototype['type'] = 'location';

/**
 * The fallback text message used when location messages are not supported by the channel.
 * @member {String} text
 */
LocationMessage.prototype['text'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
 */
LocationMessage.prototype['coordinates'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
 */
LocationMessage.prototype['location'] = undefined;






export default LocationMessage;

