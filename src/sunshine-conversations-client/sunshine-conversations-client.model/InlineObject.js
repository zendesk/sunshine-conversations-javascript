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

/**
 * The InlineObject model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/InlineObject
 * @version 15.2.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/InlineObject
     * @param code {String} The authorization code received via /oauth/authorize
     * @param grantType {String} Must be set to the string `authorization_code`
     * @param clientId {String} Your integration’s unique identifier
     * @param clientSecret {String} Your integration’s secret
     */
    constructor(code, grantType, clientId, clientSecret) { 
        
        InlineObject.initialize(this, code, grantType, clientId, clientSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, grantType, clientId, clientSecret) { 
        obj['code'] = code;
        obj['grant_type'] = grantType;
        obj['client_id'] = clientId;
        obj['client_secret'] = clientSecret;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/InlineObject} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The authorization code received via /oauth/authorize
     * @return {String}
     */
    getCode() {
        return this.code;
    }

    /**
     * Sets The authorization code received via /oauth/authorize
     * @param {String} code The authorization code received via /oauth/authorize
     */
    setCode(code) {
        this['code'] = code;
    }
/**
     * Returns Must be set to the string `authorization_code`
     * @return {String}
     */
    getGrantType() {
        return this.grant_type;
    }

    /**
     * Sets Must be set to the string `authorization_code`
     * @param {String} grantType Must be set to the string `authorization_code`
     */
    setGrantType(grantType) {
        this['grant_type'] = grantType;
    }
/**
     * Returns Your integration’s unique identifier
     * @return {String}
     */
    getClientId() {
        return this.client_id;
    }

    /**
     * Sets Your integration’s unique identifier
     * @param {String} clientId Your integration’s unique identifier
     */
    setClientId(clientId) {
        this['client_id'] = clientId;
    }
/**
     * Returns Your integration’s secret
     * @return {String}
     */
    getClientSecret() {
        return this.client_secret;
    }

    /**
     * Sets Your integration’s secret
     * @param {String} clientSecret Your integration’s secret
     */
    setClientSecret(clientSecret) {
        this['client_secret'] = clientSecret;
    }

}

/**
 * The authorization code received via /oauth/authorize
 * @member {String} code
 */
InlineObject.prototype['code'] = undefined;

/**
 * Must be set to the string `authorization_code`
 * @member {String} grant_type
 */
InlineObject.prototype['grant_type'] = undefined;

/**
 * Your integration’s unique identifier
 * @member {String} client_id
 */
InlineObject.prototype['client_id'] = undefined;

/**
 * Your integration’s secret
 * @member {String} client_secret
 */
InlineObject.prototype['client_secret'] = undefined;






export default InlineObject;

