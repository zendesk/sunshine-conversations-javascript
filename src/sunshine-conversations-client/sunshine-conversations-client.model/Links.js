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

/**
 * The Links model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Links
 * @version 14.4.0
 */
class Links {
    /**
     * Constructs a new <code>Links</code>.
     * Previous and next page links, if they exist.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Links
     */
    constructor() { 
        
        Links.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Links</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} The populated <code>Links</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Links();

            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A link to the previous page. Not specified if there are no previous pages.
     * @return {String}
     */
    getPrev() {
        return this.prev;
    }

    /**
     * Sets A link to the previous page. Not specified if there are no previous pages.
     * @param {String} prev A link to the previous page. Not specified if there are no previous pages.
     */
    setPrev(prev) {
        this['prev'] = prev;
    }
/**
     * Returns A link to the next page. Not specified if there are no subsequent pages.
     * @return {String}
     */
    getNext() {
        return this.next;
    }

    /**
     * Sets A link to the next page. Not specified if there are no subsequent pages.
     * @param {String} next A link to the next page. Not specified if there are no subsequent pages.
     */
    setNext(next) {
        this['next'] = next;
    }

}

/**
 * A link to the previous page. Not specified if there are no previous pages.
 * @member {String} prev
 */
Links.prototype['prev'] = undefined;

/**
 * A link to the next page. Not specified if there are no subsequent pages.
 * @member {String} next
 */
Links.prototype['next'] = undefined;






export default Links;

