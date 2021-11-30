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
import InlineObject from '../sunshine-conversations-client.model/InlineObject';

/**
* OAuthEndpoints service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/OAuthEndpointsApi
* @version 9.5.7
*/
export default class OAuthEndpointsApi {

    /**
    * Constructs a new OAuthEndpointsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/OAuthEndpointsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Authorize
     * This endpoint begins the OAuth flow. It relies on a browser session for authentication. If the user is not logged in to Sunshine Conversations they will be redirected to the login page. If the user has many apps, they will first be prompted to select the one they wish to integrate with. They will then be presented with an Allow/Deny dialog, describing details of the access your integration is requesting.
     * @param {String} clientId Your integration’s unique identifier
     * @param {String} responseType For now the only acceptable value is code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.state You may pass in any arbitrary string value here which will be returned to you along with the code via browser redirect.
     * @param {String} opts.redirectUri You may pass in a redirect_uri to determine which URI the response is redirected to. This URI must be contained in the list configured by your integration. If this option is not passed, the first URI present in the list will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    authorizeWithHttpInfo(clientId, responseType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling authorize");
      }
      // verify the required parameter 'responseType' is set
      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling authorize");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_id': clientId,
        'response_type': responseType,
        'state': opts['state'],
        'redirect_uri': opts['redirectUri']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth/authorize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Authorize
     * This endpoint begins the OAuth flow. It relies on a browser session for authentication. If the user is not logged in to Sunshine Conversations they will be redirected to the login page. If the user has many apps, they will first be prompted to select the one they wish to integrate with. They will then be presented with an Allow/Deny dialog, describing details of the access your integration is requesting.
     * @param {String} clientId Your integration’s unique identifier
     * @param {String} responseType For now the only acceptable value is code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.state You may pass in any arbitrary string value here which will be returned to you along with the code via browser redirect.
     * @param {String} opts.redirectUri You may pass in a redirect_uri to determine which URI the response is redirected to. This URI must be contained in the list configured by your integration. If this option is not passed, the first URI present in the list will be used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    authorize(clientId, responseType, opts) {
      return this.authorizeWithHttpInfo(clientId, responseType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Token
     * This endpoint is used to exchange an authorization code for an access token. It should only be used in server-to-server calls.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/InlineObject} inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getTokenWithHttpInfo(inlineObject) {
      let postBody = inlineObject;
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling getToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Token
     * This endpoint is used to exchange an authorization code for an access token. It should only be used in server-to-server calls.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/InlineObject} inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getToken(inlineObject) {
      return this.getTokenWithHttpInfo(inlineObject)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Revoke Access
     * This endpoint is used to revoke your integration’s access to the user’s Sunshine Conversations app. Revoking access means your integration will no longer be able to interact with the app, and any webhooks the integration had previously configured will be removed.  Calling this endpoint is equivalent to the user removing your integration manually in the Sunshine Conversations web app. Your integration’s `removeUrl` (if configured) will also be called when an integration is removed in this way. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    revokeAccessWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
        '/oauth/authorization', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Revoke Access
     * This endpoint is used to revoke your integration’s access to the user’s Sunshine Conversations app. Revoking access means your integration will no longer be able to interact with the app, and any webhooks the integration had previously configured will be removed.  Calling this endpoint is equivalent to the user removing your integration manually in the Sunshine Conversations web app. Your integration’s `removeUrl` (if configured) will also be called when an integration is removed in this way. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    revokeAccess() {
      return this.revokeAccessWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
