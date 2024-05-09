/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.5.0
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
 * The LocationRequest model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest
 * @version 12.5.0
 */
class LocationRequest {
    /**
     * Constructs a new <code>LocationRequest</code>.
     * A location request action will prompt the user to share their location.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest
     * @param type {String} The type of action.
     * @param text {String} The button text.
     */
    constructor(type, text) { 
        
        LocationRequest.initialize(this, type, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text) { 
        obj['type'] = type;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>LocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationRequest} The populated <code>LocationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationRequest();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The type of action.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The button text.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The type of action.
 * @member {String} type
 * @default 'locationRequest'
 */
LocationRequest.prototype['type'] = 'locationRequest';

/**
 * The button text.
 * @member {String} text
 */
LocationRequest.prototype['text'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
LocationRequest.prototype['metadata'] = undefined;






export default LocationRequest;

