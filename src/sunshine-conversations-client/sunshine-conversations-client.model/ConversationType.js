/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.1.0
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
* Enum class ConversationType.
* @enum {}
* @readonly
*/
export default class ConversationType {
    
        /**
         * value: "personal"
         * @const
         */
        "personal" = "personal";

    
        /**
         * value: "sdkGroup"
         * @const
         */
        "sdkGroup" = "sdkGroup";

    

    /**
    * Returns a <code>ConversationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} The enum <code>ConversationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

