/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.4.0
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
import ErrorResponse from '../sunshine-conversations-client.model/ErrorResponse';
import Page from '../sunshine-conversations-client.model/Page';
import ParticipantJoinBody from '../sunshine-conversations-client.model/ParticipantJoinBody';
import ParticipantLeaveBody from '../sunshine-conversations-client.model/ParticipantLeaveBody';
import ParticipantListResponse from '../sunshine-conversations-client.model/ParticipantListResponse';
import ParticipantResponse from '../sunshine-conversations-client.model/ParticipantResponse';
import ParticipantSubSchema from '../sunshine-conversations-client.model/ParticipantSubSchema';

/**
* Participants service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ParticipantsApi
* @version 14.4.0
*/
export default class ParticipantsApi {

    /**
    * Constructs a new ParticipantsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ParticipantsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Join Conversation
     * Adds a user to a conversation using either their userId or userExternalId. The endpoint only supports adding a participant to a sdkGroup conversation. 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} participantJoinBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse} and HTTP response
     */
    joinConversationWithHttpInfo(appId, conversationId, participantJoinBody) {
      let postBody = participantJoinBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling joinConversation");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling joinConversation");
      }
      // verify the required parameter 'participantJoinBody' is set
      if (participantJoinBody === undefined || participantJoinBody === null) {
        throw new Error("Missing the required parameter 'participantJoinBody' when calling joinConversation");
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
      let returnType = ParticipantResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/join', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Join Conversation
     * Adds a user to a conversation using either their userId or userExternalId. The endpoint only supports adding a participant to a sdkGroup conversation. 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} participantJoinBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse}
     */
    joinConversation(appId, conversationId, participantJoinBody) {
      return this.joinConversationWithHttpInfo(appId, conversationId, participantJoinBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Leave Conversation
     * Removes a user from a conversation using either their userId, userExternalId, or participantId. 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} participantLeaveBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    leaveConversationWithHttpInfo(appId, conversationId, participantLeaveBody) {
      let postBody = participantLeaveBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling leaveConversation");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling leaveConversation");
      }
      // verify the required parameter 'participantLeaveBody' is set
      if (participantLeaveBody === undefined || participantLeaveBody === null) {
        throw new Error("Missing the required parameter 'participantLeaveBody' when calling leaveConversation");
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
        '/v2/apps/{appId}/conversations/{conversationId}/leave', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Leave Conversation
     * Removes a user from a conversation using either their userId, userExternalId, or participantId. 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} participantLeaveBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    leaveConversation(appId, conversationId, participantLeaveBody) {
      return this.leaveConversationWithHttpInfo(appId, conversationId, participantLeaveBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Participants
     * Lists all the participants of a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/conversations/:conversationId/participants?page[before]=26508c10541a4b0ff472e5e2 ``` 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} and HTTP response
     */
    listParticipantsWithHttpInfo(appId, conversationId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listParticipants");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling listParticipants");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ParticipantListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/participants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Participants
     * Lists all the participants of a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/conversations/:conversationId/participants?page[before]=26508c10541a4b0ff472e5e2 ``` 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse}
     */
    listParticipants(appId, conversationId, opts) {
      return this.listParticipantsWithHttpInfo(appId, conversationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
