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
import AuthorWebhook from './AuthorWebhook';
import SourceWebhook from './SourceWebhook';

/**
 * The ActivityAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf
 * @version 15.2.0
 */
class ActivityAllOf {
    /**
     * Constructs a new <code>ActivityAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf
     */
    constructor() { 
        
        ActivityAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf} The populated <code>ActivityAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityAllOf();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWebhook);
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = AuthorWebhook.constructFromObject(data['author']);
            }
        }
        return obj;
    }

/**
     * Returns The source of the activity.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the activity.
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
     */
    setAuthor(author) {
        this['author'] = author;
    }

}

/**
 * The source of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
ActivityAllOf.prototype['source'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
 */
ActivityAllOf.prototype['author'] = undefined;






export default ActivityAllOf;

