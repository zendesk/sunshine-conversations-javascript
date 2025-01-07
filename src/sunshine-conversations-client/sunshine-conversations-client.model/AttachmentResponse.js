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
import AttachmentSchema from './AttachmentSchema';

/**
 * The AttachmentResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse
 * @version 14.3.1
 */
class AttachmentResponse {
    /**
     * Constructs a new <code>AttachmentResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse
     */
    constructor() { 
        
        AttachmentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} The populated <code>AttachmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentResponse();

            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ApiClient.convertToType(data['attachment'], AttachmentSchema);
            }
        }
        return obj;
    }

/**
     * Returns The uploaded attachment object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema}
     */
    getAttachment() {
        return this.attachment;
    }

    /**
     * Sets The uploaded attachment object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} attachment The uploaded attachment object.
     */
    setAttachment(attachment) {
        this['attachment'] = attachment;
    }

}

/**
 * The uploaded attachment object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} attachment
 */
AttachmentResponse.prototype['attachment'] = undefined;






export default AttachmentResponse;

