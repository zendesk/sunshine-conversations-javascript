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
import MatchCriteriaBase from './MatchCriteriaBase';
import MatchCriteriaMessagebirdAllOf from './MatchCriteriaMessagebirdAllOf';

/**
 * The MatchCriteriaMessagebird model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird
 * @version 14.3.0
 */
class MatchCriteriaMessagebird {
    /**
     * Constructs a new <code>MatchCriteriaMessagebird</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebirdAllOf
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    constructor(type, integrationId, phoneNumber) { 
        MatchCriteriaBase.initialize(this, type, integrationId);MatchCriteriaMessagebirdAllOf.initialize(this, phoneNumber);
        MatchCriteriaMessagebird.initialize(this, type, integrationId, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, integrationId, phoneNumber) { 
        obj['type'] = type;
        obj['integrationId'] = integrationId;
        obj['phoneNumber'] = phoneNumber;
    }

    /**
     * Constructs a <code>MatchCriteriaMessagebird</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird} The populated <code>MatchCriteriaMessagebird</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteriaMessagebird();
            MatchCriteriaBase.constructFromObject(data, obj);
            MatchCriteriaMessagebirdAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The channel type.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The ID of the integration to link. Must match the provided type.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration to link. Must match the provided type.
     * @param {String} integrationId The ID of the integration to link. Must match the provided type.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @return {Boolean}
     */
    getPrimary() {
        return this.primary;
    }

    /**
     * Sets Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @param {Boolean} primary Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     */
    setPrimary(primary) {
        this['primary'] = primary;
    }
/**
     * Returns The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @return {String}
     */
    getPhoneNumber() {
        return this.phoneNumber;
    }

    /**
     * Sets The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @param {String} phoneNumber The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    setPhoneNumber(phoneNumber) {
        this['phoneNumber'] = phoneNumber;
    }

}

/**
 * The channel type.
 * @member {String} type
 * @default 'messagebird'
 */
MatchCriteriaMessagebird.prototype['type'] = 'messagebird';

/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMessagebird.prototype['integrationId'] = undefined;

/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMessagebird.prototype['primary'] = true;

/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaMessagebird.prototype['phoneNumber'] = undefined;


// Implement MatchCriteriaBase interface:
/**
 * The channel type.
 * @member {String} type
 */
MatchCriteriaBase.prototype['type'] = undefined;
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaBase.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaBase.prototype['primary'] = true;
// Implement MatchCriteriaMessagebirdAllOf interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'messagebird'
 */
MatchCriteriaMessagebirdAllOf.prototype['type'] = 'messagebird';
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaMessagebirdAllOf.prototype['phoneNumber'] = undefined;




export default MatchCriteriaMessagebird;

