/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.4.0
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
import Error from './Error';

/**
 * The ErrorResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ErrorResponse
 * @version 14.4.0
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ErrorResponse
     */
    constructor() { 
        
        ErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ErrorResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }

/**
     * Returns List of errors that occurred.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Error>}
     */
    getErrors() {
        return this.errors;
    }

    /**
     * Sets List of errors that occurred.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Error>} errors List of errors that occurred.
     */
    setErrors(errors) {
        this['errors'] = errors;
    }

}

/**
 * List of errors that occurred.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Error>} errors
 */
ErrorResponse.prototype['errors'] = undefined;






export default ErrorResponse;

