/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
 * The ActivityTypes model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
 * @version 9.4.6
 */
class ActivityTypes {
    /**
     * Constructs a new <code>ActivityTypes</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
     */
    constructor() { 
        
        ActivityTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes} The populated <code>ActivityTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTypes();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns If the author type is `user`, only `conversation:read` is supported.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets If the author type is `user`, only `conversation:read` is supported.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum} type If the author type is `user`, only `conversation:read` is supported.
     */
    setType(type) {
        this['type'] = type;
    }

}

/**
 * If the author type is `user`, only `conversation:read` is supported.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes.TypeEnum} type
 */
ActivityTypes.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ActivityTypes['TypeEnum'] = {

    /**
     * value: "conversation:read"
     * @const
     */
    "conversation:read": "conversation:read",

    /**
     * value: "typing:start"
     * @const
     */
    "typing:start": "typing:start",

    /**
     * value: "typing:stop"
     * @const
     */
    "typing:stop": "typing:stop"
};



export default ActivityTypes;

