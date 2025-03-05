/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.0
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
import LineAllOf from './LineAllOf';
import Status from './Status';

/**
 * The Line model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Line
 * @version 15.0.0
 */
class Line {
    /**
     * Constructs a new <code>Line</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Line
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
     */
    constructor(type) { 
        Integration.initialize(this, type);LineAllOf.initialize(this);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Line.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Line</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Line} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Line} The populated <code>Line</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Line();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            LineAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('channelId')) {
                obj['channelId'] = ApiClient.convertToType(data['channelId'], 'String');
            }
            if (data.hasOwnProperty('channelSecret')) {
                obj['channelSecret'] = ApiClient.convertToType(data['channelSecret'], 'String');
            }
            if (data.hasOwnProperty('channelAccessToken')) {
                obj['channelAccessToken'] = ApiClient.convertToType(data['channelAccessToken'], 'String');
            }
            if (data.hasOwnProperty('serviceCode')) {
                obj['serviceCode'] = ApiClient.convertToType(data['serviceCode'], 'String');
            }
            if (data.hasOwnProperty('switcherSecret')) {
                obj['switcherSecret'] = ApiClient.convertToType(data['switcherSecret'], 'String');
            }
            if (data.hasOwnProperty('qrCodeUrl')) {
                obj['qrCodeUrl'] = ApiClient.convertToType(data['qrCodeUrl'], 'String');
            }
            if (data.hasOwnProperty('lineId')) {
                obj['lineId'] = ApiClient.convertToType(data['lineId'], 'String');
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
     * Returns For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
     * @param {String} type For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns LINE Channel ID. Can be omitted along with `channelSecret` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     * @return {String}
     */
    getChannelId() {
        return this.channelId;
    }

    /**
     * Sets LINE Channel ID. Can be omitted along with `channelSecret` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     * @param {String} channelId LINE Channel ID. Can be omitted along with `channelSecret` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     */
    setChannelId(channelId) {
        this['channelId'] = channelId;
    }
/**
     * Returns LINE Channel Secret. Can be omitted along with `channelId` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     * @return {String}
     */
    getChannelSecret() {
        return this.channelSecret;
    }

    /**
     * Sets LINE Channel Secret. Can be omitted along with `channelId` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     * @param {String} channelSecret LINE Channel Secret. Can be omitted along with `channelId` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
     */
    setChannelSecret(channelSecret) {
        this['channelSecret'] = channelSecret;
    }
/**
     * Returns LINE Channel Access Token.
     * @return {String}
     */
    getChannelAccessToken() {
        return this.channelAccessToken;
    }

    /**
     * Sets LINE Channel Access Token.
     * @param {String} channelAccessToken LINE Channel Access Token.
     */
    setChannelAccessToken(channelAccessToken) {
        this['channelAccessToken'] = channelAccessToken;
    }
/**
     * Returns LINE Service Code.
     * @return {String}
     */
    getServiceCode() {
        return this.serviceCode;
    }

    /**
     * Sets LINE Service Code.
     * @param {String} serviceCode LINE Service Code.
     */
    setServiceCode(serviceCode) {
        this['serviceCode'] = serviceCode;
    }
/**
     * Returns LINE Switcher Secret.
     * @return {String}
     */
    getSwitcherSecret() {
        return this.switcherSecret;
    }

    /**
     * Sets LINE Switcher Secret.
     * @param {String} switcherSecret LINE Switcher Secret.
     */
    setSwitcherSecret(switcherSecret) {
        this['switcherSecret'] = switcherSecret;
    }
/**
     * Returns URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
     * @return {String}
     */
    getQrCodeUrl() {
        return this.qrCodeUrl;
    }

    /**
     * Sets URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
     * @param {String} qrCodeUrl URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
     */
    setQrCodeUrl(qrCodeUrl) {
        this['qrCodeUrl'] = qrCodeUrl;
    }
/**
     * Returns LINE Basic ID. Is automatically set when qrCodeUrl is updated.
     * @return {String}
     */
    getLineId() {
        return this.lineId;
    }

    /**
     * Sets LINE Basic ID. Is automatically set when qrCodeUrl is updated.
     * @param {String} lineId LINE Basic ID. Is automatically set when qrCodeUrl is updated.
     */
    setLineId(lineId) {
        this['lineId'] = lineId;
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
 * For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
 * @member {String} type
 * @default 'line'
 */
Line.prototype['type'] = 'line';

/**
 * LINE Channel ID. Can be omitted along with `channelSecret` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
 * @member {String} channelId
 */
Line.prototype['channelId'] = undefined;

/**
 * LINE Channel Secret. Can be omitted along with `channelId` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
 * @member {String} channelSecret
 */
Line.prototype['channelSecret'] = undefined;

/**
 * LINE Channel Access Token.
 * @member {String} channelAccessToken
 */
Line.prototype['channelAccessToken'] = undefined;

/**
 * LINE Service Code.
 * @member {String} serviceCode
 */
Line.prototype['serviceCode'] = undefined;

/**
 * LINE Switcher Secret.
 * @member {String} switcherSecret
 */
Line.prototype['switcherSecret'] = undefined;

/**
 * URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
 * @member {String} qrCodeUrl
 */
Line.prototype['qrCodeUrl'] = undefined;

/**
 * LINE Basic ID. Is automatically set when qrCodeUrl is updated.
 * @member {String} lineId
 */
Line.prototype['lineId'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Line.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Line.prototype['defaultResponder'] = undefined;


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
// Implement LineAllOf interface:
/**
 * For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: `https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}`. 
 * @member {String} type
 * @default 'line'
 */
LineAllOf.prototype['type'] = 'line';
/**
 * LINE Channel ID. Can be omitted along with `channelSecret` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
 * @member {String} channelId
 */
LineAllOf.prototype['channelId'] = undefined;
/**
 * LINE Channel Secret. Can be omitted along with `channelId` to integrate LINE to setup a webhook before receiving the `channelId` and `channelSecret` back from LINE.
 * @member {String} channelSecret
 */
LineAllOf.prototype['channelSecret'] = undefined;
/**
 * LINE Channel Access Token.
 * @member {String} channelAccessToken
 */
LineAllOf.prototype['channelAccessToken'] = undefined;
/**
 * LINE Service Code.
 * @member {String} serviceCode
 */
LineAllOf.prototype['serviceCode'] = undefined;
/**
 * LINE Switcher Secret.
 * @member {String} switcherSecret
 */
LineAllOf.prototype['switcherSecret'] = undefined;
/**
 * URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
 * @member {String} qrCodeUrl
 */
LineAllOf.prototype['qrCodeUrl'] = undefined;
/**
 * LINE Basic ID. Is automatically set when qrCodeUrl is updated.
 * @member {String} lineId
 */
LineAllOf.prototype['lineId'] = undefined;
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




export default Line;

