/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.1.0
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
 * The AppSubSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema
 * @version 15.1.0
 */
class AppSubSchema {
    /**
     * Constructs a new <code>AppSubSchema</code>.
     * The app that triggered the events.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema
     */
    constructor() { 
        
        AppSubSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppSubSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema} The populated <code>AppSubSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppSubSchema();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the app.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the app.
     * @param {String} id The unique ID of the app.
     */
    setId(id) {
        this['id'] = id;
    }

}

/**
 * The unique ID of the app.
 * @member {String} id
 */
AppSubSchema.prototype['id'] = undefined;






export default AppSubSchema;

