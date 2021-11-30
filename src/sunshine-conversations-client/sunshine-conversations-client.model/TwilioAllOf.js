/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
 * The TwilioAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf
 * @version 9.5.7
 */
class TwilioAllOf {
    /**
     * Constructs a new <code>TwilioAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf
     * @param accountSid {String} Twilio Account SID.
     * @param authToken {String} Twilio Auth Token.
     */
    constructor(accountSid, authToken) { 
        
        TwilioAllOf.initialize(this, accountSid, authToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountSid, authToken) { 
        obj['accountSid'] = accountSid;
        obj['authToken'] = authToken;
    }

    /**
     * Constructs a <code>TwilioAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf} The populated <code>TwilioAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwilioAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accountSid')) {
                obj['accountSid'] = ApiClient.convertToType(data['accountSid'], 'String');
            }
            if (data.hasOwnProperty('authToken')) {
                obj['authToken'] = ApiClient.convertToType(data['authToken'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberSid')) {
                obj['phoneNumberSid'] = ApiClient.convertToType(data['phoneNumberSid'], 'String');
            }
            if (data.hasOwnProperty('messagingServiceSid')) {
                obj['messagingServiceSid'] = ApiClient.convertToType(data['messagingServiceSid'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Twilio Account SID.
     * @return {String}
     */
    getAccountSid() {
        return this.accountSid;
    }

    /**
     * Sets Twilio Account SID.
     * @param {String} accountSid Twilio Account SID.
     */
    setAccountSid(accountSid) {
        this['accountSid'] = accountSid;
    }
/**
     * Returns Twilio Auth Token.
     * @return {String}
     */
    getAuthToken() {
        return this.authToken;
    }

    /**
     * Sets Twilio Auth Token.
     * @param {String} authToken Twilio Auth Token.
     */
    setAuthToken(authToken) {
        this['authToken'] = authToken;
    }
/**
     * Returns SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @return {String}
     */
    getPhoneNumberSid() {
        return this.phoneNumberSid;
    }

    /**
     * Sets SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @param {String} phoneNumberSid SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     */
    setPhoneNumberSid(phoneNumberSid) {
        this['phoneNumberSid'] = phoneNumberSid;
    }
/**
     * Returns SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @return {String}
     */
    getMessagingServiceSid() {
        return this.messagingServiceSid;
    }

    /**
     * Sets SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     * @param {String} messagingServiceSid SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
     */
    setMessagingServiceSid(messagingServiceSid) {
        this['messagingServiceSid'] = messagingServiceSid;
    }

}

/**
 * To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'twilio'
 */
TwilioAllOf.prototype['type'] = 'twilio';

/**
 * Twilio Account SID.
 * @member {String} accountSid
 */
TwilioAllOf.prototype['accountSid'] = undefined;

/**
 * Twilio Auth Token.
 * @member {String} authToken
 */
TwilioAllOf.prototype['authToken'] = undefined;

/**
 * SID for specific phone number. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} phoneNumberSid
 */
TwilioAllOf.prototype['phoneNumberSid'] = undefined;

/**
 * SID for specific messaging service. One of `messagingServiceSid` or `phoneNumberSid` must be provided when creating a Twilio integration.
 * @member {String} messagingServiceSid
 */
TwilioAllOf.prototype['messagingServiceSid'] = undefined;






export default TwilioAllOf;

