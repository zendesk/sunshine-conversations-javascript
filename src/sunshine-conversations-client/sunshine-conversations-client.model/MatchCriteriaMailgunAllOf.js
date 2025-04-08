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

/**
 * The MatchCriteriaMailgunAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
 * @version 15.3.0
 */
class MatchCriteriaMailgunAllOf {
    /**
     * Constructs a new <code>MatchCriteriaMailgunAllOf</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
     * @param address {String} The user’s email address.
     */
    constructor(address) { 
        
        MatchCriteriaMailgunAllOf.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>MatchCriteriaMailgunAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf} The populated <code>MatchCriteriaMailgunAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteriaMailgunAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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






export default MatchCriteriaMailgunAllOf;

