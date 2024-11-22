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
import ConversationTruncated from './ConversationTruncated';
import Referral from './Referral';
import SourceWithCampaignWebhook from './SourceWithCampaignWebhook';
import User from './User';

/**
 * The ConversationReferralEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationReferralEventAllOfPayload
 * @version 14.1.0
 */
class ConversationReferralEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationReferralEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReferralEventAllOfPayload
     */
    constructor() { 
        
        ConversationReferralEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationReferralEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReferralEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationReferralEventAllOfPayload} The populated <code>ConversationReferralEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationReferralEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWithCampaignWebhook);
            }
            if (data.hasOwnProperty('referral')) {
                obj['referral'] = ApiClient.convertToType(data['referral'], Referral);
            }
        }
        return obj;
    }

/**
     * Returns The conversation a user lands in after being referred. See the <a href=\"https://docs.smooch.io/guide/conversation-referrals/\">conversation referrals</a> guide for more details.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation a user lands in after being referred. See the <a href=\"https://docs.smooch.io/guide/conversation-referrals/\">conversation referrals</a> guide for more details.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation a user lands in after being referred. See the <a href=\"https://docs.smooch.io/guide/conversation-referrals/\">conversation referrals</a> guide for more details.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The user associated with the conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user associated with the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user associated with the conversation.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns The source of the referral.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the referral.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source The source of the referral.
     */
    setSource(source) {
        this['source'] = source;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral}
     */
    getReferral() {
        return this.referral;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} referral
     */
    setReferral(referral) {
        this['referral'] = referral;
    }

}

/**
 * The conversation a user lands in after being referred. See the <a href=\"https://docs.smooch.io/guide/conversation-referrals/\">conversation referrals</a> guide for more details.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationReferralEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user associated with the conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
ConversationReferralEventAllOfPayload.prototype['user'] = undefined;

/**
 * The source of the referral.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source
 */
ConversationReferralEventAllOfPayload.prototype['source'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} referral
 */
ConversationReferralEventAllOfPayload.prototype['referral'] = undefined;






export default ConversationReferralEventAllOfPayload;

