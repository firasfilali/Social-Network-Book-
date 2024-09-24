/**
 * OpenApi specification - Firas
 * OpenApi documentation for Spring Security
 *
 * The version of the OpenAPI document: 1.0
 * Contact: firas.fileli@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FeedbackResponse model module.
 * @module model/FeedbackResponse
 * @version 1.0
 */
class FeedbackResponse {
    /**
     * Constructs a new <code>FeedbackResponse</code>.
     * @alias module:model/FeedbackResponse
     */
    constructor() { 
        
        FeedbackResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeedbackResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedbackResponse} obj Optional instance to populate.
     * @return {module:model/FeedbackResponse} The populated <code>FeedbackResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeedbackResponse();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('ownFeedback')) {
                obj['ownFeedback'] = ApiClient.convertToType(data['ownFeedback'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeedbackResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeedbackResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}



/**
 * @member {Number} note
 */
FeedbackResponse.prototype['note'] = undefined;

/**
 * @member {String} comment
 */
FeedbackResponse.prototype['comment'] = undefined;

/**
 * @member {Boolean} ownFeedback
 */
FeedbackResponse.prototype['ownFeedback'] = undefined;






export default FeedbackResponse;

