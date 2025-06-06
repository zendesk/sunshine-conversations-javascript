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
 * The Error model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Error
 * @version 15.5.1
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Error
     */
    constructor() { 
        
        Error.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Error} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Error code used for classifying similar error types
     * @return {String}
     */
    getCode() {
        return this.code;
    }

    /**
     * Sets Error code used for classifying similar error types
     * @param {String} code Error code used for classifying similar error types
     */
    setCode(code) {
        this['code'] = code;
    }
/**
     * Returns Description of the error
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets Description of the error
     * @param {String} title Description of the error
     */
    setTitle(title) {
        this['title'] = title;
    }

}

/**
 * Error code used for classifying similar error types
 * @member {String} code
 */
Error.prototype['code'] = undefined;

/**
 * Description of the error
 * @member {String} title
 */
Error.prototype['title'] = undefined;






export default Error;

