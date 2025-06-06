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
import ErrorResponse from '../sunshine-conversations-client.model/ErrorResponse';
import SwitchboardIntegrationCreateBody from '../sunshine-conversations-client.model/SwitchboardIntegrationCreateBody';
import SwitchboardIntegrationListResponse from '../sunshine-conversations-client.model/SwitchboardIntegrationListResponse';
import SwitchboardIntegrationResponse from '../sunshine-conversations-client.model/SwitchboardIntegrationResponse';
import SwitchboardIntegrationUpdateBody from '../sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody';

/**
* SwitchboardIntegrations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardIntegrationsApi
* @version 15.5.1
*/
export default class SwitchboardIntegrationsApi {

    /**
    * Constructs a new SwitchboardIntegrationsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardIntegrationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Switchboard Integration
     * Create a switchboard integration.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} switchboardIntegrationCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} and HTTP response
     */
    createSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationCreateBody) {
      let postBody = switchboardIntegrationCreateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling createSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardIntegrationCreateBody' is set
      if (switchboardIntegrationCreateBody === undefined || switchboardIntegrationCreateBody === null) {
        throw new Error("Missing the required parameter 'switchboardIntegrationCreateBody' when calling createSwitchboardIntegration");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId
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
      let returnType = SwitchboardIntegrationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Switchboard Integration
     * Create a switchboard integration.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} switchboardIntegrationCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse}
     */
    createSwitchboardIntegration(appId, switchboardId, switchboardIntegrationCreateBody) {
      return this.createSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Switchboard Integration
     * Deletes the switchboard integration. If the deleted switchboard integration had an active status for some conversations, the default switchboard integration will replace it. Note that it is forbidden to delete a switchboard integration if it's the default one (a new one must be chosen first) or if another switchboard integration's `nextSwitchboardIntegrationId` refers to it. The integration that was linked to the deleted switchboard integration will start receiving all conversation events, regardless of the switchboard status.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling deleteSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardIntegrationId' is set
      if (switchboardIntegrationId === undefined || switchboardIntegrationId === null) {
        throw new Error("Missing the required parameter 'switchboardIntegrationId' when calling deleteSwitchboardIntegration");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId,
        'switchboardIntegrationId': switchboardIntegrationId
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
        '/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Switchboard Integration
     * Deletes the switchboard integration. If the deleted switchboard integration had an active status for some conversations, the default switchboard integration will replace it. Note that it is forbidden to delete a switchboard integration if it's the default one (a new one must be chosen first) or if another switchboard integration's `nextSwitchboardIntegrationId` refers to it. The integration that was linked to the deleted switchboard integration will start receiving all conversation events, regardless of the switchboard status.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId) {
      return this.deleteSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Switchboard Integrations
     * Lists all switchboard integrations linked to the switchboard. 
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} and HTTP response
     */
    listSwitchboardIntegrationsWithHttpInfo(appId, switchboardId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listSwitchboardIntegrations");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling listSwitchboardIntegrations");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId
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
      let returnType = SwitchboardIntegrationListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Switchboard Integrations
     * Lists all switchboard integrations linked to the switchboard. 
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse}
     */
    listSwitchboardIntegrations(appId, switchboardId) {
      return this.listSwitchboardIntegrationsWithHttpInfo(appId, switchboardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Switchboard Integration
     * Updates a switchboard integration record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} switchboardIntegrationUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} and HTTP response
     */
    updateSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationId, switchboardIntegrationUpdateBody) {
      let postBody = switchboardIntegrationUpdateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling updateSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardIntegrationId' is set
      if (switchboardIntegrationId === undefined || switchboardIntegrationId === null) {
        throw new Error("Missing the required parameter 'switchboardIntegrationId' when calling updateSwitchboardIntegration");
      }
      // verify the required parameter 'switchboardIntegrationUpdateBody' is set
      if (switchboardIntegrationUpdateBody === undefined || switchboardIntegrationUpdateBody === null) {
        throw new Error("Missing the required parameter 'switchboardIntegrationUpdateBody' when calling updateSwitchboardIntegration");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId,
        'switchboardIntegrationId': switchboardIntegrationId
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
      let returnType = SwitchboardIntegrationResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards/{switchboardId}/switchboardIntegrations/{switchboardIntegrationId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Switchboard Integration
     * Updates a switchboard integration record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} switchboardIntegrationUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse}
     */
    updateSwitchboardIntegration(appId, switchboardId, switchboardIntegrationId, switchboardIntegrationUpdateBody) {
      return this.updateSwitchboardIntegrationWithHttpInfo(appId, switchboardId, switchboardIntegrationId, switchboardIntegrationUpdateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
