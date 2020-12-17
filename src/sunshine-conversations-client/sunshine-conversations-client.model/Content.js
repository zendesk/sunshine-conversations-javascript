/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.0
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
import ActionSubset from './ActionSubset';
import CarouselMessage from './CarouselMessage';
import CarouselMessageDisplaySettings from './CarouselMessageDisplaySettings';
import Field from './Field';
import FileMessage from './FileMessage';
import FormMessage from './FormMessage';
import FormResponseMessage from './FormResponseMessage';
import ImageMessage from './ImageMessage';
import Item from './Item';
import ListMessage from './ListMessage';
import LocationMessage from './LocationMessage';
import LocationMessageCoordinates from './LocationMessageCoordinates';
import LocationMessageLocation from './LocationMessageLocation';
import TextMessage from './TextMessage';

/**
 * The Content model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Content
 * @version 9.4.1
 */
class Content {
    /**
     * Constructs a new <code>Content</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Content
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param mediaUrl {String} The URL for media, such as an image, attached to the message.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} Array of field objects that contain the submitted fields.
     * @param coordinates {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} 
     */
    constructor(type, items, mediaUrl, fields, coordinates) { 
        TextMessage.initialize(this, type);CarouselMessage.initialize(this, type, items);FileMessage.initialize(this, type, mediaUrl);FormMessage.initialize(this, type, fields);FormResponseMessage.initialize(this, type, fields);ImageMessage.initialize(this, type, mediaUrl);ListMessage.initialize(this, type, items);LocationMessage.initialize(this, type, coordinates);
        Content.initialize(this, type, items, mediaUrl, fields, coordinates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, items, mediaUrl, fields, coordinates) { 
        obj['type'] = type;
        obj['items'] = items;
        obj['mediaUrl'] = mediaUrl;
        obj['fields'] = fields;
        obj['coordinates'] = coordinates;
    }

    /**
     * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} The populated <code>Content</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Content();
            TextMessage.constructFromObject(data, obj);
            CarouselMessage.constructFromObject(data, obj);
            FileMessage.constructFromObject(data, obj);
            FormMessage.constructFromObject(data, obj);
            FormResponseMessage.constructFromObject(data, obj);
            ImageMessage.constructFromObject(data, obj);
            ListMessage.constructFromObject(data, obj);
            LocationMessage.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [ActionSubset]);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('displaySettings')) {
                obj['displaySettings'] = CarouselMessageDisplaySettings.constructFromObject(data['displaySettings']);
            }
            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
            if (data.hasOwnProperty('mediaSize')) {
                obj['mediaSize'] = ApiClient.convertToType(data['mediaSize'], 'Number');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('altText')) {
                obj['altText'] = ApiClient.convertToType(data['altText'], 'String');
            }
            if (data.hasOwnProperty('blockChatInput')) {
                obj['blockChatInput'] = ApiClient.convertToType(data['blockChatInput'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [Field]);
            }
            if (data.hasOwnProperty('textFallback')) {
                obj['textFallback'] = ApiClient.convertToType(data['textFallback'], 'String');
            }
            if (data.hasOwnProperty('coordinates')) {
                obj['coordinates'] = LocationMessageCoordinates.constructFromObject(data['coordinates']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = LocationMessageLocation.constructFromObject(data['location']);
            }
        }
        return obj;
    }

/**
     * Returns The type of message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The fallback text message used when location messages are not supported by the channel.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The fallback text message used when location messages are not supported by the channel.
     * @param {String} text The fallback text message used when location messages are not supported by the channel.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>}
     */
    getActions() {
        return this.actions;
    }

    /**
     * Sets An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     */
    setActions(actions) {
        this['actions'] = actions;
    }
/**
     * Returns An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>}
     */
    getItems() {
        return this.items;
    }

    /**
     * Sets An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    setItems(items) {
        this['items'] = items;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings}
     */
    getDisplaySettings() {
        return this.displaySettings;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
     */
    setDisplaySettings(displaySettings) {
        this['displaySettings'] = displaySettings;
    }
/**
     * Returns The URL for media, such as an image, attached to the message.
     * @return {String}
     */
    getMediaUrl() {
        return this.mediaUrl;
    }

    /**
     * Sets The URL for media, such as an image, attached to the message.
     * @param {String} mediaUrl The URL for media, such as an image, attached to the message.
     */
    setMediaUrl(mediaUrl) {
        this['mediaUrl'] = mediaUrl;
    }
/**
     * Returns The size of the media.
     * @return {Number}
     */
    getMediaSize() {
        return this.mediaSize;
    }

    /**
     * Sets The size of the media.
     * @param {Number} mediaSize The size of the media.
     */
    setMediaSize(mediaSize) {
        this['mediaSize'] = mediaSize;
    }
/**
     * Returns The media type of the file.
     * @return {String}
     */
    getMediaType() {
        return this.mediaType;
    }

    /**
     * Sets The media type of the file.
     * @param {String} mediaType The media type of the file.
     */
    setMediaType(mediaType) {
        this['mediaType'] = mediaType;
    }
/**
     * Returns An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     * @return {String}
     */
    getAltText() {
        return this.altText;
    }

    /**
     * Sets An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     * @param {String} altText An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     */
    setAltText(altText) {
        this['altText'] = altText;
    }
/**
     * Returns true if the message should block the chat input on Web Messenger. form message only.
     * @return {Boolean}
     */
    getBlockChatInput() {
        return this.blockChatInput;
    }

    /**
     * Sets true if the message should block the chat input on Web Messenger. form message only.
     * @param {Boolean} blockChatInput true if the message should block the chat input on Web Messenger. form message only.
     */
    setBlockChatInput(blockChatInput) {
        this['blockChatInput'] = blockChatInput;
    }
/**
     * Returns Array of field objects that contain the submitted fields.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
     */
    getFields() {
        return this.fields;
    }

    /**
     * Sets Array of field objects that contain the submitted fields.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields Array of field objects that contain the submitted fields.
     */
    setFields(fields) {
        this['fields'] = fields;
    }
/**
     * Returns A string containing the `label: value` of all fields, each separated by a newline character.
     * @return {String}
     */
    getTextFallback() {
        return this.textFallback;
    }

    /**
     * Sets A string containing the `label: value` of all fields, each separated by a newline character.
     * @param {String} textFallback A string containing the `label: value` of all fields, each separated by a newline character.
     */
    setTextFallback(textFallback) {
        this['textFallback'] = textFallback;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates}
     */
    getCoordinates() {
        return this.coordinates;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
     */
    setCoordinates(coordinates) {
        this['coordinates'] = coordinates;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation}
     */
    getLocation() {
        return this.location;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
     */
    setLocation(location) {
        this['location'] = location;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'location'
 */
Content.prototype['type'] = 'location';

/**
 * The fallback text message used when location messages are not supported by the channel.
 * @member {String} text
 */
Content.prototype['text'] = undefined;

/**
 * An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions
 */
Content.prototype['actions'] = undefined;

/**
 * An array of objects representing the items associated with the message. Only present in carousel and list type messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items
 */
Content.prototype['items'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
 */
Content.prototype['displaySettings'] = undefined;

/**
 * The URL for media, such as an image, attached to the message.
 * @member {String} mediaUrl
 */
Content.prototype['mediaUrl'] = undefined;

/**
 * The size of the media.
 * @member {Number} mediaSize
 */
Content.prototype['mediaSize'] = undefined;

/**
 * The media type of the file.
 * @member {String} mediaType
 */
Content.prototype['mediaType'] = undefined;

/**
 * An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
Content.prototype['altText'] = undefined;

/**
 * true if the message should block the chat input on Web Messenger. form message only.
 * @member {Boolean} blockChatInput
 */
Content.prototype['blockChatInput'] = undefined;

/**
 * Array of field objects that contain the submitted fields.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields
 */
Content.prototype['fields'] = undefined;

/**
 * A string containing the `label: value` of all fields, each separated by a newline character.
 * @member {String} textFallback
 */
Content.prototype['textFallback'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
 */
Content.prototype['coordinates'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
 */
Content.prototype['location'] = undefined;


// Implement TextMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'text'
 */
TextMessage.prototype['type'] = 'text';
/**
 * The text content of the message. Optional only if actions are provided.
 * @member {String} text
 */
TextMessage.prototype['text'] = undefined;
/**
 * Array of message actions.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions
 */
TextMessage.prototype['actions'] = undefined;
// Implement CarouselMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'carousel'
 */
CarouselMessage.prototype['type'] = 'carousel';
/**
 * The fallback text message used when carousel messages are not supported by the channel.
 * @member {String} text
 */
CarouselMessage.prototype['text'] = undefined;
/**
 * An array of objects representing the items associated with the message. Only present in carousel and list type messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items
 */
CarouselMessage.prototype['items'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
 */
CarouselMessage.prototype['displaySettings'] = undefined;
// Implement FileMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'file'
 */
FileMessage.prototype['type'] = 'file';
/**
 * The URL for media, such as an image, attached to the message.
 * @member {String} mediaUrl
 */
FileMessage.prototype['mediaUrl'] = undefined;
/**
 * The size of the media.
 * @member {Number} mediaSize
 */
FileMessage.prototype['mediaSize'] = undefined;
/**
 * The media type of the file.
 * @member {String} mediaType
 */
FileMessage.prototype['mediaType'] = undefined;
/**
 * An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
FileMessage.prototype['altText'] = undefined;
/**
 * The text content of the message.
 * @member {String} text
 */
FileMessage.prototype['text'] = undefined;
// Implement FormMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'form'
 */
FormMessage.prototype['type'] = 'form';
/**
 * true if the message should block the chat input on Web Messenger. form message only.
 * @member {Boolean} blockChatInput
 */
FormMessage.prototype['blockChatInput'] = undefined;
/**
 * An array of objects representing fields associated with the message. Only present in form and formResponse messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields
 */
FormMessage.prototype['fields'] = undefined;
// Implement FormResponseMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'formResponse'
 */
FormResponseMessage.prototype['type'] = 'formResponse';
/**
 * Array of field objects that contain the submitted fields.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields
 */
FormResponseMessage.prototype['fields'] = undefined;
/**
 * A string containing the `label: value` of all fields, each separated by a newline character.
 * @member {String} textFallback
 */
FormResponseMessage.prototype['textFallback'] = undefined;
// Implement ImageMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'image'
 */
ImageMessage.prototype['type'] = 'image';
/**
 * The URL for media, such as an image, attached to the message.
 * @member {String} mediaUrl
 */
ImageMessage.prototype['mediaUrl'] = undefined;
/**
 * An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
ImageMessage.prototype['altText'] = undefined;
/**
 * The text content of the message. Optional only if actions are provided.
 * @member {String} text
 */
ImageMessage.prototype['text'] = undefined;
/**
 * Array of message actions.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions
 */
ImageMessage.prototype['actions'] = undefined;
// Implement ListMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'list'
 */
ListMessage.prototype['type'] = 'list';
/**
 * An array of objects representing the items associated with the message. Only present in carousel and list type messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items
 */
ListMessage.prototype['items'] = undefined;
/**
 * An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions
 */
ListMessage.prototype['actions'] = undefined;
// Implement LocationMessage interface:
/**
 * The type of message.
 * @member {String} type
 * @default 'location'
 */
LocationMessage.prototype['type'] = 'location';
/**
 * The fallback text message used when location messages are not supported by the channel.
 * @member {String} text
 */
LocationMessage.prototype['text'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
 */
LocationMessage.prototype['coordinates'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
 */
LocationMessage.prototype['location'] = undefined;




export default Content;

