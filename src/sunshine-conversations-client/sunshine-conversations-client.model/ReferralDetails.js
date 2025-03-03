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
 * The ReferralDetails model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails
 * @version 14.4.0
 */
class ReferralDetails {
    /**
     * Constructs a new <code>ReferralDetails</code>.
     * Nested object containing additional information.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails
     */
    constructor() { 
        
        ReferralDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferralDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ReferralDetails} The populated <code>ReferralDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferralDetails();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('adId')) {
                obj['adId'] = ApiClient.convertToType(data['adId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The source of the referral - MESSENGER_CODE, ADS etc…
     * @return {String}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the referral - MESSENGER_CODE, ADS etc…
     * @param {String} source The source of the referral - MESSENGER_CODE, ADS etc…
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * Returns The type of referral, typically OPEN-THREAD.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of referral, typically OPEN-THREAD.
     * @param {String} type The type of referral, typically OPEN-THREAD.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns If the referral came from an ad, this field will be present with the ad’s Id.
     * @return {String}
     */
    getAdId() {
        return this.adId;
    }

    /**
     * Sets If the referral came from an ad, this field will be present with the ad’s Id.
     * @param {String} adId If the referral came from an ad, this field will be present with the ad’s Id.
     */
    setAdId(adId) {
        this['adId'] = adId;
    }

}

/**
 * The source of the referral - MESSENGER_CODE, ADS etc…
 * @member {String} source
 */
ReferralDetails.prototype['source'] = undefined;

/**
 * The type of referral, typically OPEN-THREAD.
 * @member {String} type
 */
ReferralDetails.prototype['type'] = undefined;

/**
 * If the referral came from an ad, this field will be present with the ad’s Id.
 * @member {String} adId
 */
ReferralDetails.prototype['adId'] = undefined;






export default ReferralDetails;

