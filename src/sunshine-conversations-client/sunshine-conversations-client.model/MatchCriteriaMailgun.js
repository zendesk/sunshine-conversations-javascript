/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.1.0
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
import MatchCriteriaMailgunAllOf from './MatchCriteriaMailgunAllOf';

/**
 * The MatchCriteriaMailgun model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
 * @version 14.1.0
 */
class MatchCriteriaMailgun {
    /**
     * Constructs a new <code>MatchCriteriaMailgun</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param address {String} The user’s email address.
     */
    constructor(type, integrationId, address) { 
        MatchCriteriaBase.initialize(this, type, integrationId);MatchCriteriaMailgunAllOf.initialize(this, address);
        MatchCriteriaMailgun.initialize(this, type, integrationId, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, integrationId, address) { 
        obj['type'] = type;
        obj['integrationId'] = integrationId;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>MatchCriteriaMailgun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun} The populated <code>MatchCriteriaMailgun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteriaMailgun();
            MatchCriteriaBase.constructFromObject(data, obj);
            MatchCriteriaMailgunAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
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
     * Returns The user’s email address.
     * @return {String}
     */
    getAddress() {
        return this.address;
    }

    /**
     * Sets The user’s email address.
     * @param {String} address The user’s email address.
     */
    setAddress(address) {
        this['address'] = address;
    }
/**
     * Returns May be specified to set the subject for the outgoing email.
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets May be specified to set the subject for the outgoing email.
     * @param {String} subject May be specified to set the subject for the outgoing email.
     */
    setSubject(subject) {
        this['subject'] = subject;
    }

}

/**
 * The channel type.
 * @member {String} type
 * @default 'mailgun'
 */
MatchCriteriaMailgun.prototype['type'] = 'mailgun';

/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMailgun.prototype['integrationId'] = undefined;

/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMailgun.prototype['primary'] = true;

/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteriaMailgun.prototype['address'] = undefined;

/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteriaMailgun.prototype['subject'] = 'New message from {appName}';


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
// Implement MatchCriteriaMailgunAllOf interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'mailgun'
 */
MatchCriteriaMailgunAllOf.prototype['type'] = 'mailgun';
/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteriaMailgunAllOf.prototype['address'] = undefined;
/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteriaMailgunAllOf.prototype['subject'] = 'New message from {appName}';




export default MatchCriteriaMailgun;

