/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.5.1
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
 * The MessagebirdAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf
 * @version 15.5.1
 */
class MessagebirdAllOf {
    /**
     * Constructs a new <code>MessagebirdAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf
     * @param accessKey {String} The public API key of your MessageBird account.
     * @param signingKey {String} The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param originator {String} Sunshine Conversations will receive all messages sent to this phone number.
     */
    constructor(accessKey, signingKey, originator) { 
        
        MessagebirdAllOf.initialize(this, accessKey, signingKey, originator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessKey, signingKey, originator) { 
        obj['accessKey'] = accessKey;
        obj['signingKey'] = signingKey;
        obj['originator'] = originator;
    }

    /**
     * Constructs a <code>MessagebirdAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf} The populated <code>MessagebirdAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessagebirdAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('accessKey')) {
                obj['accessKey'] = ApiClient.convertToType(data['accessKey'], 'String');
            }
            if (data.hasOwnProperty('signingKey')) {
                obj['signingKey'] = ApiClient.convertToType(data['signingKey'], 'String');
            }
            if (data.hasOwnProperty('originator')) {
                obj['originator'] = ApiClient.convertToType(data['originator'], 'String');
            }
            if (data.hasOwnProperty('webhookSecret')) {
                obj['webhookSecret'] = ApiClient.convertToType(data['webhookSecret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     * @param {String} type To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The public API key of your MessageBird account.
     * @return {String}
     */
    getAccessKey() {
        return this.accessKey;
    }

    /**
     * Sets The public API key of your MessageBird account.
     * @param {String} accessKey The public API key of your MessageBird account.
     */
    setAccessKey(accessKey) {
        this['accessKey'] = accessKey;
    }
/**
     * Returns The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @return {String}
     */
    getSigningKey() {
        return this.signingKey;
    }

    /**
     * Sets The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param {String} signingKey The signing key of your MessageBird account. Used to validate the webhooks' origin.
     */
    setSigningKey(signingKey) {
        this['signingKey'] = signingKey;
    }
/**
     * Returns Sunshine Conversations will receive all messages sent to this phone number.
     * @return {String}
     */
    getOriginator() {
        return this.originator;
    }

    /**
     * Sets Sunshine Conversations will receive all messages sent to this phone number.
     * @param {String} originator Sunshine Conversations will receive all messages sent to this phone number.
     */
    setOriginator(originator) {
        this['originator'] = originator;
    }
/**
     * Returns The secret that is used to configure webhooks in MessageBird.
     * @return {String}
     */
    getWebhookSecret() {
        return this.webhookSecret;
    }

    /**
     * Sets The secret that is used to configure webhooks in MessageBird.
     * @param {String} webhookSecret The secret that is used to configure webhooks in MessageBird.
     */
    setWebhookSecret(webhookSecret) {
        this['webhookSecret'] = webhookSecret;
    }

}

/**
 * To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s `_id` and `webhookSecret`, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: - Create a new Call HTTP endpoint with SMS flow. - Select your desired SMS number for Incoming SMS. - Click on Forward to URL and set its method to POST. - Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  `https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}` - Select application/json for the Set Content-Type header field. - Save and publish your changes. 
 * @member {String} type
 * @default 'messagebird'
 */
MessagebirdAllOf.prototype['type'] = 'messagebird';

/**
 * The public API key of your MessageBird account.
 * @member {String} accessKey
 */
MessagebirdAllOf.prototype['accessKey'] = undefined;

/**
 * The signing key of your MessageBird account. Used to validate the webhooks' origin.
 * @member {String} signingKey
 */
MessagebirdAllOf.prototype['signingKey'] = undefined;

/**
 * Sunshine Conversations will receive all messages sent to this phone number.
 * @member {String} originator
 */
MessagebirdAllOf.prototype['originator'] = undefined;

/**
 * The secret that is used to configure webhooks in MessageBird.
 * @member {String} webhookSecret
 */
MessagebirdAllOf.prototype['webhookSecret'] = undefined;






export default MessagebirdAllOf;

