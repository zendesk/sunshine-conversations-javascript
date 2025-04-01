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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import Status from './Status';
import ViberAllOf from './ViberAllOf';

/**
 * The Viber model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Viber
 * @version 15.2.0
 */
class Viber {
    /**
     * Constructs a new <code>Viber</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Viber
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     * @param token {String} Viber Public Account token.
     */
    constructor(type, token) { 
        Integration.initialize(this, type);ViberAllOf.initialize(this, token);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Viber.initialize(this, type, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Viber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Viber} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Viber} The populated <code>Viber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Viber();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            ViberAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponder')) {
                obj['defaultResponder'] = DefaultResponderDefaultResponder.constructFromObject(data['defaultResponder']);
            }
        }
        return obj;
    }

/**
     * Returns To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Viber Public Account token.
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * Sets Viber Public Account token.
     * @param {String} token Viber Public Account token.
     */
    setToken(token) {
        this['token'] = token;
    }
/**
     * Returns Unique URI of the Viber account.
     * @return {String}
     */
    getUri() {
        return this.uri;
    }

    /**
     * Sets Unique URI of the Viber account.
     * @param {String} uri Unique URI of the Viber account.
     */
    setUri(uri) {
        this['uri'] = uri;
    }
/**
     * Returns Unique ID of the Viber account.
     * @return {String}
     */
    getAccountId() {
        return this.accountId;
    }

    /**
     * Sets Unique ID of the Viber account.
     * @param {String} accountId Unique ID of the Viber account.
     */
    setAccountId(accountId) {
        this['accountId'] = accountId;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     */
    setDefaultResponderId(defaultResponderId) {
        this['defaultResponderId'] = defaultResponderId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder}
     */
    getDefaultResponder() {
        return this.defaultResponder;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
     */
    setDefaultResponder(defaultResponder) {
        this['defaultResponder'] = defaultResponder;
    }

}

/**
 * To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'viber'
 */
Viber.prototype['type'] = 'viber';

/**
 * Viber Public Account token.
 * @member {String} token
 */
Viber.prototype['token'] = undefined;

/**
 * Unique URI of the Viber account.
 * @member {String} uri
 */
Viber.prototype['uri'] = undefined;

/**
 * Unique ID of the Viber account.
 * @member {String} accountId
 */
Viber.prototype['accountId'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Viber.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Viber.prototype['defaultResponder'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement ViberAllOf interface:
/**
 * To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'viber'
 */
ViberAllOf.prototype['type'] = 'viber';
/**
 * Viber Public Account token.
 * @member {String} token
 */
ViberAllOf.prototype['token'] = undefined;
/**
 * Unique URI of the Viber account.
 * @member {String} uri
 */
ViberAllOf.prototype['uri'] = undefined;
/**
 * Unique ID of the Viber account.
 * @member {String} accountId
 */
ViberAllOf.prototype['accountId'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;




export default Viber;

