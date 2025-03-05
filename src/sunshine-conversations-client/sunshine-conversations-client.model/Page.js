/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.1
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
 * The Page model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Page
 * @version 15.0.1
 */
class Page {
    /**
     * Constructs a new <code>Page</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Page
     */
    constructor() { 
        
        Page.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Page();

            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('before')) {
                obj['before'] = ApiClient.convertToType(data['before'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both. 
     * @return {String}
     */
    getAfter() {
        return this.after;
    }

    /**
     * Sets A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both. 
     * @param {String} after A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both. 
     */
    setAfter(after) {
        this['after'] = after;
    }
/**
     * Returns A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both. 
     * @return {String}
     */
    getBefore() {
        return this.before;
    }

    /**
     * Sets A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both. 
     * @param {String} before A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both. 
     */
    setBefore(before) {
        this['before'] = before;
    }
/**
     * Returns The number of records to return. Does not apply to the `listMessages` endpoint.
     * minimum: 1
     * maximum: 100
     * @return {Number}
     */
    getSize() {
        return this.size;
    }

    /**
     * Sets The number of records to return. Does not apply to the `listMessages` endpoint.
     * @param {Number} size The number of records to return. Does not apply to the `listMessages` endpoint.
     */
    setSize(size) {
        this['size'] = size;
    }

}

/**
 * A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both. 
 * @member {String} after
 */
Page.prototype['after'] = undefined;

/**
 * A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both. 
 * @member {String} before
 */
Page.prototype['before'] = undefined;

/**
 * The number of records to return. Does not apply to the `listMessages` endpoint.
 * @member {Number} size
 * @default 25
 */
Page.prototype['size'] = 25;






export default Page;

