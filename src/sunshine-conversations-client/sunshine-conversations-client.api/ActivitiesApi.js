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

import ApiClient from "../ApiClient";
import ActivityPost from '../sunshine-conversations-client.model/ActivityPost';

/**
* Activities service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ActivitiesApi
* @version 15.5.1
*/
export default class ActivitiesApi {

    /**
    * Constructs a new ActivitiesApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ActivitiesApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Post Activity
     * Notify Sunshine Conversations of different conversation activities. Supported activity types are: * Typing activity * Conversation read event 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} activityPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    postActivityWithHttpInfo(appId, conversationId, activityPost) {
      let postBody = activityPost;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling postActivity");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling postActivity");
      }
      // verify the required parameter 'activityPost' is set
      if (activityPost === undefined || activityPost === null) {
        throw new Error("Missing the required parameter 'activityPost' when calling postActivity");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/activity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post Activity
     * Notify Sunshine Conversations of different conversation activities. Supported activity types are: * Typing activity * Conversation read event 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} activityPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    postActivity(appId, conversationId, activityPost) {
      return this.postActivityWithHttpInfo(appId, conversationId, activityPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
