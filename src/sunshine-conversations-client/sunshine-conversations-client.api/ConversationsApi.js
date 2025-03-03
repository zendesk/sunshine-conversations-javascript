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
import ConversationCreateBody from '../sunshine-conversations-client.model/ConversationCreateBody';
import ConversationListFilter from '../sunshine-conversations-client.model/ConversationListFilter';
import ConversationListResponse from '../sunshine-conversations-client.model/ConversationListResponse';
import ConversationResponse from '../sunshine-conversations-client.model/ConversationResponse';
import ConversationUpdateBody from '../sunshine-conversations-client.model/ConversationUpdateBody';
import DownloadMessageRefBody from '../sunshine-conversations-client.model/DownloadMessageRefBody';
import DownloadMessageRefBodyAllOf from '../sunshine-conversations-client.model/DownloadMessageRefBodyAllOf';
import ErrorResponse from '../sunshine-conversations-client.model/ErrorResponse';
import Page from '../sunshine-conversations-client.model/Page';

/**
* Conversations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ConversationsApi
* @version 14.4.0
*/
export default class ConversationsApi {

    /**
    * Constructs a new ConversationsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ConversationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Conversation
     * Create a conversation for the specified user(s).
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} conversationCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    createConversationWithHttpInfo(appId, conversationCreateBody) {
      let postBody = conversationCreateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createConversation");
      }
      // verify the required parameter 'conversationCreateBody' is set
      if (conversationCreateBody === undefined || conversationCreateBody === null) {
        throw new Error("Missing the required parameter 'conversationCreateBody' when calling createConversation");
      }

      let pathParams = {
        'appId': appId
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
      let returnType = ConversationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Conversation
     * Create a conversation for the specified user(s).
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} conversationCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    createConversation(appId, conversationCreateBody) {
      return this.createConversationWithHttpInfo(appId, conversationCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Conversation
     * Delete an entire conversation record, along with its messages and attachments. Note that the default conversation cannot be deleted, but the messages contained [can be](#deleteAllMessages).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteConversationWithHttpInfo(appId, conversationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteConversation");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling deleteConversation");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Conversation
     * Delete an entire conversation record, along with its messages and attachments. Note that the default conversation cannot be deleted, but the messages contained [can be](#deleteAllMessages).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteConversation(appId, conversationId) {
      return this.deleteConversationWithHttpInfo(appId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download Message Ref
     * When a third party channel provides a reference of a data, this API can be used to download the reference and fetch the full data. Currently, only apple channel is supported.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody} downloadMessageRefBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    downloadMessageRefWithHttpInfo(appId, conversationId, downloadMessageRefBody) {
      let postBody = downloadMessageRefBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling downloadMessageRef");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling downloadMessageRef");
      }
      // verify the required parameter 'downloadMessageRefBody' is set
      if (downloadMessageRefBody === undefined || downloadMessageRefBody === null) {
        throw new Error("Missing the required parameter 'downloadMessageRefBody' when calling downloadMessageRef");
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
        '/v2/apps/{appId}/conversations/{conversationId}/download', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download Message Ref
     * When a third party channel provides a reference of a data, this API can be used to download the reference and fetch the full data. Currently, only apple channel is supported.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody} downloadMessageRefBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    downloadMessageRef(appId, conversationId, downloadMessageRefBody) {
      return this.downloadMessageRefWithHttpInfo(appId, conversationId, downloadMessageRefBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Conversation
     * Fetches an individual conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    getConversationWithHttpInfo(appId, conversationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getConversation");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling getConversation");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Conversation
     * Fetches an individual conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    getConversation(appId, conversationId) {
      return this.getConversationWithHttpInfo(appId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Conversations
     * Lists all conversations that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/conversations?filter[userId]=42589ad070d43be9b00ff7e5 ``` 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} filter Contains parameters for filtering the results.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse} and HTTP response
     */
    listConversationsWithHttpInfo(appId, filter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listConversations");
      }
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling listConversations");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'page': opts['page'],
        'filter': filter
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConversationListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Conversations
     * Lists all conversations that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/conversations?filter[userId]=42589ad070d43be9b00ff7e5 ``` 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} filter Contains parameters for filtering the results.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse}
     */
    listConversations(appId, filter, opts) {
      return this.listConversationsWithHttpInfo(appId, filter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Conversation
     * Updates a conversation record.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} conversationUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    updateConversationWithHttpInfo(appId, conversationId, conversationUpdateBody) {
      let postBody = conversationUpdateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateConversation");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling updateConversation");
      }
      // verify the required parameter 'conversationUpdateBody' is set
      if (conversationUpdateBody === undefined || conversationUpdateBody === null) {
        throw new Error("Missing the required parameter 'conversationUpdateBody' when calling updateConversation");
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
      let returnType = ConversationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Conversation
     * Updates a conversation record.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} conversationUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    updateConversation(appId, conversationId, conversationUpdateBody) {
      return this.updateConversationWithHttpInfo(appId, conversationId, conversationUpdateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
