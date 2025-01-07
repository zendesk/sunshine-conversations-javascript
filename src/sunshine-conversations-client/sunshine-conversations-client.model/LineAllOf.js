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

/**
 * The LineAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
 * @version 14.3.1
 */
class LineAllOf {
    /**
     * Constructs a new <code>LineAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
     */
    constructor() { 
        
        LineAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LineAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf} The populated <code>LineAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineAllOf();

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

}

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






export default LineAllOf;

