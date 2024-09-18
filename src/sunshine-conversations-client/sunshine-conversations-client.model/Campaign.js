/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.8.0
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
 * The Campaign model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Campaign
 * @version 13.0.0
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * The campaign the user interacted with (if applicable).
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign
     */
    constructor() { 
        
        Campaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the campaign.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the campaign.
     * @param {String} id The unique ID of the campaign.
     */
    setId(id) {
        this['id'] = id;
    }

}

/**
 * The unique ID of the campaign.
 * @member {String} id
 */
Campaign.prototype['id'] = undefined;






export default Campaign;

