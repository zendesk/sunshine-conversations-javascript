/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.3.0
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
import DownloadMessageRefBodyAllOfApple from './DownloadMessageRefBodyAllOfApple';

/**
 * The DownloadMessageRefBodyAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf
 * @version 15.3.0
 */
class DownloadMessageRefBodyAllOf {
    /**
     * Constructs a new <code>DownloadMessageRefBodyAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf
     */
    constructor() { 
        
        DownloadMessageRefBodyAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DownloadMessageRefBodyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf} The populated <code>DownloadMessageRefBodyAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadMessageRefBodyAllOf();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('apple')) {
                obj['apple'] = DownloadMessageRefBodyAllOfApple.constructFromObject(data['apple']);
            }
        }
        return obj;
    }

/**
     * Returns The id of the user.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user.
     * @param {String} userId The id of the user.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple}
     */
    getApple() {
        return this.apple;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple} apple
     */
    setApple(apple) {
        this['apple'] = apple;
    }

}

/**
 * The id of the user.
 * @member {String} userId
 */
DownloadMessageRefBodyAllOf.prototype['userId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple} apple
 */
DownloadMessageRefBodyAllOf.prototype['apple'] = undefined;






export default DownloadMessageRefBodyAllOf;

