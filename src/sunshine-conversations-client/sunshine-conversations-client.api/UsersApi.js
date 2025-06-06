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
import SyncUserBody from '../sunshine-conversations-client.model/SyncUserBody';
import UserCreateBody from '../sunshine-conversations-client.model/UserCreateBody';
import UserResponse from '../sunshine-conversations-client.model/UserResponse';
import UserUpdateBody from '../sunshine-conversations-client.model/UserUpdateBody';

/**
* Users service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/UsersApi
* @version 15.5.1
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/UsersApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create User
     * Creates a new user.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} userCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    createUserWithHttpInfo(appId, userCreateBody) {
      let postBody = userCreateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createUser");
      }
      // verify the required parameter 'userCreateBody' is set
      if (userCreateBody === undefined || userCreateBody === null) {
        throw new Error("Missing the required parameter 'userCreateBody' when calling createUser");
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create User
     * Creates a new user.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} userCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    createUser(appId, userCreateBody) {
      return this.createUserWithHttpInfo(appId, userCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete User
     * Delete a user, its clients and its conversation history. The user is considered completely deleted once the `user:delete` webhook is fired. To only delete a user’s personal information, see [Delete User Personal Information](#operation/deleteUserPersonalInformation).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteUserWithHttpInfo(appId, userIdOrExternalId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteUser");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling deleteUser");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
        '/v2/apps/{appId}/users/{userIdOrExternalId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete User
     * Delete a user, its clients and its conversation history. The user is considered completely deleted once the `user:delete` webhook is fired. To only delete a user’s personal information, see [Delete User Personal Information](#operation/deleteUserPersonalInformation).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteUser(appId, userIdOrExternalId) {
      return this.deleteUserWithHttpInfo(appId, userIdOrExternalId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete User Personal Information
     * Delete a user’s personal information. Calling this API will clear `givenName`, `surname`, `email` and `avatarUrl` and every custom property for the specified user. For every client owned by the user, it will also clear `displayName`, `avatarUrl` and any channel specific information stored in the info and raw fields. Calling this API doesn’t delete the user’s conversation history. To fully delete the user, see [Delete User](#operation/deleteUser).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    deleteUserPersonalInformationWithHttpInfo(appId, userIdOrExternalId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteUserPersonalInformation");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling deleteUserPersonalInformation");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}/personalinformation', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete User Personal Information
     * Delete a user’s personal information. Calling this API will clear `givenName`, `surname`, `email` and `avatarUrl` and every custom property for the specified user. For every client owned by the user, it will also clear `displayName`, `avatarUrl` and any channel specific information stored in the info and raw fields. Calling this API doesn’t delete the user’s conversation history. To fully delete the user, see [Delete User](#operation/deleteUser).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    deleteUserPersonalInformation(appId, userIdOrExternalId) {
      return this.deleteUserPersonalInformationWithHttpInfo(appId, userIdOrExternalId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User
     * Fetches an individual user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    getUserWithHttpInfo(appId, userIdOrExternalId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getUser");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling getUser");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User
     * Fetches an individual user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    getUser(appId, userIdOrExternalId) {
      return this.getUserWithHttpInfo(appId, userIdOrExternalId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Synchronize User
     * Synchronize a messaging user with its core Zendesk user counterpart. Messaging users are separate objects linked to a core Zendesk user record by `zendeskId`. It is possible for changes to be made to the core Zendesk user record in a way that causes the messaging user to fall out of sync. The core Zendesk user might have their primary email changed, for example. This endpoint can be used to update the messaging user with the `profile.givenName`, `profile.surname`, `externalId`, and primary email identity of its core Zendesk user counterpart.<br/><br/>It is also possible for two Zendesk users to be merged. In such a case, this API can be used to apply that merger on the messaging side. The surviving Zendesk user id can be specified via the `survivingZendeskId` parameter of the request body, and the outgoing `zendeskId` is specified in the request path. <aside class=\"notice\">Only the primary email identity of the core Zendesk user will be synchronized, and it will be set on the identities array, not in the profile.</aside> <br/> <aside class=\"notice\">In some circumstances, a single call to this API might produce changes on more than one messaging user. If the externalId or email being synchronized already exists on a different messaging user within the account, the conflict will be resolved by merging those messaging users together, if possible. If a conflicting messaging user is already linked to a core Zendesk user by zendeskId it cannot be merged. In this case, the conflicting externalId or email will instead be removed and reassigned to the messaging user that is being synchronized.</aside>
     * @param {String} appId Identifies the app.
     * @param {String} zendeskId The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API. 
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SyncUserBody} opts.syncUserBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    syncUserWithHttpInfo(appId, zendeskId, opts) {
      opts = opts || {};
      let postBody = opts['syncUserBody'];
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling syncUser");
      }
      // verify the required parameter 'zendeskId' is set
      if (zendeskId === undefined || zendeskId === null) {
        throw new Error("Missing the required parameter 'zendeskId' when calling syncUser");
      }

      let pathParams = {
        'appId': appId,
        'zendeskId': zendeskId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{zendeskId}/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Synchronize User
     * Synchronize a messaging user with its core Zendesk user counterpart. Messaging users are separate objects linked to a core Zendesk user record by `zendeskId`. It is possible for changes to be made to the core Zendesk user record in a way that causes the messaging user to fall out of sync. The core Zendesk user might have their primary email changed, for example. This endpoint can be used to update the messaging user with the `profile.givenName`, `profile.surname`, `externalId`, and primary email identity of its core Zendesk user counterpart.<br/><br/>It is also possible for two Zendesk users to be merged. In such a case, this API can be used to apply that merger on the messaging side. The surviving Zendesk user id can be specified via the `survivingZendeskId` parameter of the request body, and the outgoing `zendeskId` is specified in the request path. <aside class=\"notice\">Only the primary email identity of the core Zendesk user will be synchronized, and it will be set on the identities array, not in the profile.</aside> <br/> <aside class=\"notice\">In some circumstances, a single call to this API might produce changes on more than one messaging user. If the externalId or email being synchronized already exists on a different messaging user within the account, the conflict will be resolved by merging those messaging users together, if possible. If a conflicting messaging user is already linked to a core Zendesk user by zendeskId it cannot be merged. In this case, the conflicting externalId or email will instead be removed and reassigned to the messaging user that is being synchronized.</aside>
     * @param {String} appId Identifies the app.
     * @param {String} zendeskId The ID that links a messaging user to its core Zendesk user counterpart. This ID can be used to fetch the core user record via the Zendesk Support API. 
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SyncUserBody} opts.syncUserBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    syncUser(appId, zendeskId, opts) {
      return this.syncUserWithHttpInfo(appId, zendeskId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update User
     * Updates a user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} userUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    updateUserWithHttpInfo(appId, userIdOrExternalId, userUpdateBody) {
      let postBody = userUpdateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateUser");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling updateUser");
      }
      // verify the required parameter 'userUpdateBody' is set
      if (userUpdateBody === undefined || userUpdateBody === null) {
        throw new Error("Missing the required parameter 'userUpdateBody' when calling updateUser");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
      let returnType = UserResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update User
     * Updates a user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} userUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    updateUser(appId, userIdOrExternalId, userUpdateBody) {
      return this.updateUserWithHttpInfo(appId, userIdOrExternalId, userUpdateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
