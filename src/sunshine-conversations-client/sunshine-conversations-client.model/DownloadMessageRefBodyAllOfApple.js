/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.2.0
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
import DownloadMessageRefBodyAllOfAppleInteractiveDataRef from './DownloadMessageRefBodyAllOfAppleInteractiveDataRef';

/**
 * The DownloadMessageRefBodyAllOfApple model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple
 * @version 15.2.0
 */
class DownloadMessageRefBodyAllOfApple {
    /**
     * Constructs a new <code>DownloadMessageRefBodyAllOfApple</code>.
     * The message ref returned by Apple.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple
     * @param interactiveDataRef {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfAppleInteractiveDataRef} 
     */
    constructor(interactiveDataRef) { 
        
        DownloadMessageRefBodyAllOfApple.initialize(this, interactiveDataRef);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, interactiveDataRef) { 
        obj['interactiveDataRef'] = interactiveDataRef;
    }

    /**
     * Constructs a <code>DownloadMessageRefBodyAllOfApple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple} The populated <code>DownloadMessageRefBodyAllOfApple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadMessageRefBodyAllOfApple();

            if (data.hasOwnProperty('interactiveDataRef')) {
                obj['interactiveDataRef'] = DownloadMessageRefBodyAllOfAppleInteractiveDataRef.constructFromObject(data['interactiveDataRef']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfAppleInteractiveDataRef}
     */
    getInteractiveDataRef() {
        return this.interactiveDataRef;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfAppleInteractiveDataRef} interactiveDataRef
     */
    setInteractiveDataRef(interactiveDataRef) {
        this['interactiveDataRef'] = interactiveDataRef;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfAppleInteractiveDataRef} interactiveDataRef
 */
DownloadMessageRefBodyAllOfApple.prototype['interactiveDataRef'] = undefined;






export default DownloadMessageRefBodyAllOfApple;

