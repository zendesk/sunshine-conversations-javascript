/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
import Integration from '../sunshine-conversations-client.model/Integration';
import IntegrationListFilter from '../sunshine-conversations-client.model/IntegrationListFilter';
import IntegrationListResponse from '../sunshine-conversations-client.model/IntegrationListResponse';
import IntegrationResponse from '../sunshine-conversations-client.model/IntegrationResponse';
import IntegrationUpdate from '../sunshine-conversations-client.model/IntegrationUpdate';
import Page from '../sunshine-conversations-client.model/Page';

/**
* Integrations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/IntegrationsApi
* @version 9.4.6
*/
export default class IntegrationsApi {

    /**
    * Constructs a new IntegrationsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/IntegrationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Integration
     * The Create Integration endpoint allows you to provision apps with front-end messaging channels. Selecting a `custom` integration allows the creation of webhooks.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    createIntegrationWithHttpInfo(appId, integration) {
      let postBody = integration;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createIntegration");
      }
      // verify the required parameter 'integration' is set
      if (integration === undefined || integration === null) {
        throw new Error("Missing the required parameter 'integration' when calling createIntegration");
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
      let returnType = IntegrationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Integration
     * The Create Integration endpoint allows you to provision apps with front-end messaging channels. Selecting a `custom` integration allows the creation of webhooks.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    createIntegration(appId, integration) {
      return this.createIntegrationWithHttpInfo(appId, integration)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Integration
     * Delete the specified integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteIntegrationWithHttpInfo(appId, integrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteIntegration");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteIntegration");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Integration
     * Delete the specified integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteIntegration(appId, integrationId) {
      return this.deleteIntegrationWithHttpInfo(appId, integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Integration
     * Get integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    getIntegrationWithHttpInfo(appId, integrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getIntegration");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getIntegration");
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
      let returnType = IntegrationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Integration
     * Get integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    getIntegration(appId, integrationId) {
      return this.getIntegrationWithHttpInfo(appId, integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Integrations
     * List available integrations. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/integrations?page[after]=5e1606762556d93e9c176f69&page[size]=10&filter[types]=custom,web ``` 
     * @param {String} appId Identifies the app.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} and HTTP response
     */
    listIntegrationsWithHttpInfo(appId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listIntegrations");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        'page': opts['page'],
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IntegrationListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Integrations
     * List available integrations. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/integrations?page[after]=5e1606762556d93e9c176f69&page[size]=10&filter[types]=custom,web ``` 
     * @param {String} appId Identifies the app.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse}
     */
    listIntegrations(appId, opts) {
      return this.listIntegrationsWithHttpInfo(appId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Integration
     * Allows you to update certain fields of existing integrations. If updating a specific property is not supported, you must delete the integration and re-create it with the new data.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} integrationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    updateIntegrationWithHttpInfo(appId, integrationId, integrationUpdate) {
      let postBody = integrationUpdate;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateIntegration");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling updateIntegration");
      }
      // verify the required parameter 'integrationUpdate' is set
      if (integrationUpdate === undefined || integrationUpdate === null) {
        throw new Error("Missing the required parameter 'integrationUpdate' when calling updateIntegration");
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
      let returnType = IntegrationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Integration
     * Allows you to update certain fields of existing integrations. If updating a specific property is not supported, you must delete the integration and re-create it with the new data.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} integrationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    updateIntegration(appId, integrationId, integrationUpdate) {
      return this.updateIntegrationWithHttpInfo(appId, integrationId, integrationUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
