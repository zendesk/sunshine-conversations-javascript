/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 15.0.1
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
 * The CarouselMessageDisplaySettings model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings
 * @version 15.0.1
 */
class CarouselMessageDisplaySettings {
    /**
     * Constructs a new <code>CarouselMessageDisplaySettings</code>.
     * Settings to adjust the carousel layout.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings
     */
    constructor() { 
        
        CarouselMessageDisplaySettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CarouselMessageDisplaySettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} The populated <code>CarouselMessageDisplaySettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarouselMessageDisplaySettings();

            if (data.hasOwnProperty('imageAspectRatio')) {
                obj['imageAspectRatio'] = ApiClient.convertToType(data['imageAspectRatio'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings.ImageAspectRatioEnum}
     */
    getImageAspectRatio() {
        return this.imageAspectRatio;
    }

    /**
     * Sets Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings.ImageAspectRatioEnum} imageAspectRatio Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
     */
    setImageAspectRatio(imageAspectRatio) {
        this['imageAspectRatio'] = imageAspectRatio;
    }

}

/**
 * Specifies how to display all carousel images. Valid values are horizontal (default) and square. Only supported in Facebook Messenger, Web Messenger, Android SDK and iOS SDK carousels.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings.ImageAspectRatioEnum} imageAspectRatio
 */
CarouselMessageDisplaySettings.prototype['imageAspectRatio'] = undefined;





/**
 * Allowed values for the <code>imageAspectRatio</code> property.
 * @enum {String}
 * @readonly
 */
CarouselMessageDisplaySettings['ImageAspectRatioEnum'] = {

    /**
     * value: "horizontal"
     * @const
     */
    "horizontal": "horizontal",

    /**
     * value: "square"
     * @const
     */
    "square": "square"
};



export default CarouselMessageDisplaySettings;

