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

import ApiClient from "../ApiClient";
import ErrorResponse from '../sunshine-conversations-client.model/ErrorResponse';
import WebhookBody from '../sunshine-conversations-client.model/WebhookBody';
import WebhookCreateBody from '../sunshine-conversations-client.model/WebhookCreateBody';
import WebhookListResponse from '../sunshine-conversations-client.model/WebhookListResponse';
import WebhookResponse from '../sunshine-conversations-client.model/WebhookResponse';

/**
* Webhooks service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/WebhooksApi
* @version 15.0.1
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/WebhooksApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Webhook
     * Creates a new webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} webhookCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    createWebhookWithHttpInfo(appId, integrationId, webhookCreateBody) {
      let postBody = webhookCreateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createWebhook");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling createWebhook");
      }
      // verify the required parameter 'webhookCreateBody' is set
      if (webhookCreateBody === undefined || webhookCreateBody === null) {
        throw new Error("Missing the required parameter 'webhookCreateBody' when calling createWebhook");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
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
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Webhook
     * Creates a new webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} webhookCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    createWebhook(appId, integrationId, webhookCreateBody) {
      return this.createWebhookWithHttpInfo(appId, integrationId, webhookCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Webhook
     * Deletes the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteWebhookWithHttpInfo(appId, integrationId, webhookId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteWebhook");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteWebhook");
      }
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhook");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
        'webhookId': webhookId
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
        '/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Webhook
     * Deletes the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteWebhook(appId, integrationId, webhookId) {
      return this.deleteWebhookWithHttpInfo(appId, integrationId, webhookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Webhook
     * Gets the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    getWebhookWithHttpInfo(appId, integrationId, webhookId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getWebhook");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getWebhook");
      }
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhook");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
        'webhookId': webhookId
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
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Webhook
     * Gets the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    getWebhook(appId, integrationId, webhookId) {
      return this.getWebhookWithHttpInfo(appId, integrationId, webhookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Webhooks
     * Lists all webhooks for a given Sunshine Conversations Connect integration or custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} and HTTP response
     */
    listWebhooksWithHttpInfo(appId, integrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listWebhooks");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling listWebhooks");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
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
      let returnType = WebhookListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Webhooks
     * Lists all webhooks for a given Sunshine Conversations Connect integration or custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse}
     */
    listWebhooks(appId, integrationId) {
      return this.listWebhooksWithHttpInfo(appId, integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Webhook
     * Updates the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} webhookBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    updateWebhookWithHttpInfo(appId, integrationId, webhookId, webhookBody) {
      let postBody = webhookBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateWebhook");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateWebhook");
      }
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhook");
      }
      // verify the required parameter 'webhookBody' is set
      if (webhookBody === undefined || webhookBody === null) {
        throw new Error("Missing the required parameter 'webhookBody' when calling updateWebhook");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
        'webhookId': webhookId
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
      let returnType = WebhookResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/webhooks/{webhookId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Webhook
     * Updates the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} webhookBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    updateWebhook(appId, integrationId, webhookId, webhookBody) {
      return this.updateWebhookWithHttpInfo(appId, integrationId, webhookId, webhookBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
