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

/**
 * The TicketClosed model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TicketClosed
 * @version 15.0.0
 */
class TicketClosed {
    /**
     * Constructs a new <code>TicketClosed</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TicketClosed
     * @param type {String} The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each `type` value will have a set of pre-defined, localized strings that describe the activity.
     */
    constructor(type) { 
        
        TicketClosed.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>TicketClosed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TicketClosed} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TicketClosed} The populated <code>TicketClosed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TicketClosed();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
        }
        return obj;
    }

/**
     * Returns The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each `type` value will have a set of pre-defined, localized strings that describe the activity.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each `type` value will have a set of pre-defined, localized strings that describe the activity.
     * @param {String} type The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each `type` value will have a set of pre-defined, localized strings that describe the activity.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns No additional data is supplied with the \"ticket:closed\" activity type at this time.
     * @return {Object.<String, Object>}
     */
    getData() {
        return this.data;
    }

    /**
     * Sets No additional data is supplied with the \"ticket:closed\" activity type at this time.
     * @param {Object.<String, Object>} data No additional data is supplied with the \"ticket:closed\" activity type at this time.
     */
    setData(data) {
        this['data'] = data;
    }

}

/**
 * The type of system activity that generated the message. The value of this field determines the dynamic content that is rendered to the end-user / agent when viewing this message. Each `type` value will have a set of pre-defined, localized strings that describe the activity.
 * @member {String} type
 * @default 'ticket:closed'
 */
TicketClosed.prototype['type'] = 'ticket:closed';

/**
 * No additional data is supplied with the \"ticket:closed\" activity type at this time.
 * @member {Object.<String, Object>} data
 */
TicketClosed.prototype['data'] = undefined;






export default TicketClosed;

