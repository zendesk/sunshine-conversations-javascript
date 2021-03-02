# Smooch Core

Smooch Core is the most basic for interaction possible for the [Smooch API](http://docs.smooch.io/rest). It wraps the public API in a convenient Javascript API.

This library is meant to be used server-side with Node.js.

## Installation

```bash
$ npm install smooch-core --save
```

## Contributing

If a method is missing please file an Issue, or better yet make a PR!

# Smooch API Version

The Smooch API offers multiple [versions](https://docs.smooch.io/guide/versioning/). Each release of this project targets one and only one Smooch API version. If you depend on an older version of the Smooch API, you may need to use an older release of this library. Use the table below as your guide:

| Smooch API version                                                                        | `smooch-core` version to use |
| ----------------------------------------------------------------------------------------- | ---------------------------- |
| `v1.1` [Upgrade guide](https://docs.smooch.io/guide/versioning/#upgrading-to-v11-from-v1) | `8.0.0` or newer             |
| `v1`                                                                                      | `7.*` or older               |

## Usage

```js
var SmoochCore = require('smooch-core');

// using generated JWT
var smooch = new SmoochCore({
    jwt: 'some-jwt'
});

// using JWT components
var smooch = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    scope: 'appUser', // account, app, or appUser
    userId: 'some-id' // only required for appUser scope
});

// ...

smooch.webhooks.get(id).then(function(response) {
    // do something with the response.
});
```

#### Usage with a proxy

If you need to use a proxy, you can use one of the [many](https://www.npmjs.com/package/socks-proxy-agent) [proxies](https://www.npmjs.com/package/http-proxy-agent) [available](https://www.npmjs.com/package/https-proxy-agent), as long as it an `http.Agent` implementation. You only need to pass the agent when creating the SmoochCore instance.

```js
var SmoochCore = require('smooch-core');
var SocksProxyAgent = require('socks-proxy-agent');
var proxy = process.env.http_proxy || 'socks://localhost:8123';
var agent = new SocksProxyAgent(proxy);

var smooch = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    httpAgent: agent
});
```

## Testing new additions

If you've just added some new APIs and would like to test them locally before pushing your changes, do the following.

1. `npm run build`
2. Create a simple `Node.js` script
3. Import the built SDK
4. Test it

Example:

```javascript
const Smooch = require('../smooch-core-js-private/lib/smooch');

const smooch = new Smooch({
    keyId: '<redacted>',
    secret: '<redacted>',
    scope: 'account'
});

(async () => {
    console.log(await smooch.apps.list());
})();
```

## API

Below is a list of methods included in Smooch Core. For comprehensive documentation of Smooch Core and its methods see Smooch's [REST API docs](https://docs.smooch.io/rest/).

For more detailed information and example usage of each of the following methods, click on the method's :link: icon.

| Method                                 | Description                                                                                                                                |                                         Link                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------------------------: |
| **appUsers Module**                    |                                                                                                                                            |                                                                                       |
| `appUsers.get`                         | Get a specific appUser.                                                                                                                    |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-user)           |
| `appUsers.update`                      | Update an appUser’s basic profile information and specify custom profile data.                                                             |         [:link:](https://docs.smooch.io/rest/v1/?javascript#update-app-user)          |
| `appUsers.delete`                      | Delete an appUser.                                                                                                                         |         [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-app-user)          |
| `appUsers.deleteProfile`               | Delete an appUser’s profile.                                                                                                               |     [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-app-user-profile)      |
| `appUsers.create`                      | Pre-create an appUser object before that appUser runs your app for the first time.                                                         |       [:link:](https://docs.smooch.io/rest/v1/?javascript#pre-create-app-user)        |
| `appUsers.linkChannel`                 | Link appUser to continue conversation on his/her preferred channel.                                                                        |     [:link:](https://docs.smooch.io/rest/v1/?javascript#link-app-user-to-channel)     |
| `appUsers.unlinkChannel`               | Remove the specified channel from the appUser’s clients.                                                                                   |   [:link:](https://docs.smooch.io/rest/v1/?javascript#unlink-app-user-from-channel)   |
| `appUsers.getMessages`                 | Get the specified appUser’s conversation history.                                                                                          |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-messages)           |
| `appUsers.resetUnreadCount`            | Reset the unread count of the conversation to 0.                                                                                           |        [:link:](https://docs.smooch.io/rest/v1/?javascript#reset-unread-count)        |
| `appUsers.typingActivity`              | Notify Smooch when an app maker starts or stops typing a response.                                                                         |         [:link:](https://docs.smooch.io/rest/v1/?javascript#typing-activity)          |
| `appUsers.sendMessage`                 | Post a message to or from the appUser.                                                                                                     |           [:link:](https://docs.smooch.io/rest/v1/?javascript#post-message)           |
| `appUsers.deleteMessage`               | Delete a single message.                                                                                                                   |      [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-single-message)       |
| `appUsers.deleteMessages`              | Clears the message history for an appUser, permanently deleting all messages.                                                              |       [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-all-messages)        |
| `appUsers.getChannels`                 | Get all of the appUser’s channel entity Ids.                                                                                               |  [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-user-channel-entities)   |
| `appUsers.getBusinessSystems`          | Get all the business systems to which an appUser’s conversation is connected.                                                              | [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-user-business-system-ids) |
| `appUsers.getAuthCode`                 | Get auth code.                                                                                                                             |          [:link:](https://docs.smooch.io/rest/v1/?javascript#get-auth-code)           |
| `appUsers.getLinkRequests`             | Generate a transfer URL for a given channel type.                                                                                          |         [:link:](https://docs.smooch.io/rest/v1/?javascript#get-link-request)         |
| `appUsers.mergeUsers`                  | Force the merge of two specific users, when the business has determined that they represent the same person                                |           [:link:](https://docs.smooch.io/rest/v1/?javascript#merge-users)            |
| **menu Module**                        |                                                                                                                                            |                                                                                       |
| `menu.get`                             | Get the specified app’s menu.                                                                                                              |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-menu)           |
| `menu.configure`                       | Configure the specified app’s menu.                                                                                                        |         [:link:](https://docs.smooch.io/rest/v1/?javascript#update-app-menu)          |
| `menu.remove`                          | Remove the specified app’s menu.                                                                                                           |         [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-app-menu)          |
| **webhooks Module**                    |                                                                                                                                            |                                                                                       |
| `webhooks.list`                        | List all webhooks configured for a given app.                                                                                              |          [:link:](https://docs.smooch.io/rest/v1/?javascript#list-webhooks)           |
| `webhooks.create`                      | Create a webhook for the specified app.                                                                                                    |          [:link:](https://docs.smooch.io/rest/v1/?javascript#create-webhook)          |
| `webhooks.get`                         | Get individual webhooks.                                                                                                                   |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-webhook)            |
| `webhooks.update`                      | Update existing webhooks.                                                                                                                  |          [:link:](https://docs.smooch.io/rest/v1/?javascript#update-webhook)          |
| `webhooks.delete`                      | Delete specified webhook.                                                                                                                  |          [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-webhook)          |
| **apps Module**                        |                                                                                                                                            |                                                                                       |
| `apps.create`                          | Create a new app.                                                                                                                          |            [:link:](https://docs.smooch.io/rest/v1/?javascript#create-app)            |
| `apps.list`                            | List all configured apps.                                                                                                                  |            [:link:](https://docs.smooch.io/rest/v1/?javascript#list-apps)             |
| `apps.get`                             | Get the specified app.                                                                                                                     |             [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app)              |
| `apps.delete`                          | Delete the specified app, including all its enabled integrations.                                                                          |            [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-app)            |
| `apps.getSdkIds`                       | Retrieve the IDs of the three SDK integrations (`android`, `ios`, and `web`) for the specified app, to be used when initializing the SDKs. |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-sdk-ids)            |
| `apps.keys.create`                     | Create a secret key for the specified app.                                                                                                 |          [:link:](https://docs.smooch.io/rest/v1/?javascript#create-app-key)          |
| `apps.keys.list`                       | List all secret keys for the sepcified app.                                                                                                |          [:link:](https://docs.smooch.io/rest/v1/?javascript#list-app-keys)           |
| `apps.keys.get`                        | Get a secret key.                                                                                                                          |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-key)            |
| `apps.keys.delete`                     | Delete a secret key.                                                                                                                       |          [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-app-key)          |
| `apps.keys.getJwt`                     | Get an app-scoped JWT signed using the requested keyId/secret pair.                                                                        |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-app-jwt)            |
| **integrations Module**                |                                                                                                                                            |                                                                                       |
| `integrations.create`                  | Create a new integration.                                                                                                                  |        [:link:](https://docs.smooch.io/rest/v1/?javascript#create-integration)        |
| `integrations.list`                    | List all integrations for a given app.                                                                                                     |        [:link:](https://docs.smooch.io/rest/v1/?javascript#list-integrations)         |
| `integrations.get`                     | Return the specified integration.                                                                                                          |         [:link:](https://docs.smooch.io/rest/v1/?javascript#get-integration)          |
| `integrations.update`                  | Update the specified integration.                                                                                                          |        [:link:](https://docs.smooch.io/rest/v1/?javascript#update-integration)        |
| `integrations.delete`                  | Delete the specified integration.                                                                                                          |        [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-integration)        |
| `integrations.menu.get`                | Get the specified integration’s menu.                                                                                                      |       [:link:](https://docs.smooch.io/rest/v1/?javascript#get-integration-menu)       |
| `integrations.menu.update`             | Update the specified integration’s menu.                                                                                                   |     [:link:](https://docs.smooch.io/rest/v1/?javascript#update-integration-menu)      |
| `integrations.menu.delete`             | Delete the specified integration's menu.                                                                                                   |     [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-integration-menu)      |
| `integrations.messageTemplates.create` | Create a message template for the specified WhatsApp integration.                                                                          |     [:link:](https://docs.smooch.io/rest/v1/?javascript#create-message-template)      |
| `integrations.messageTemplates.list`   | List message templates for the specified WhatsApp integration.                                                                             |      [:link:](https://docs.smooch.io/rest/v1/?javascript#list-message-templates)      |
| `integrations.messageTemplates.delete` | Delete a message template for the specified WhatsApp integration.                                                                          |     [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-message-template)      |
| `integrations.profile.get`             | Get the specified integration’s profile.                                                                                                   |     [:link:](https://docs.smooch.io/rest/v1/?javascript#get-integration-profile)      |
| `integrations.profile.update`          | Update the specified integration’s profile.                                                                                                |    [:link:](https://docs.smooch.io/rest/v1/?javascript#update-integration-profile)    |
| `integrations.profile.photo.upload`    | Upload a photo to be used for the the specified integration’s profile.                                                                     | [:link:](https://docs.smooch.io/rest/v1/?javascript#update-integration-profile-photo) |
| **deployments Module**                 |                                                                                                                                            |                                                                                       |
| `deployments.create`                   | Create a new deployment.                                                                                                                   |        [:link:](https://docs.smooch.io/rest/v1/?javascript#create-deployment)         |
| `deployments.activate`                 | Activate the phone number of the deployment.                                                                                               |       [:link:](https://docs.smooch.io/rest/v1/?javascript#activate-deployment)        |
| `deployments.confirmCode`              | Confirm the phone number of the deployment.                                                                                                |           [:link:](https://docs.smooch.io/rest/v1/?javascript#confirm-code)           |
| `deployments.get`                      | Return the specified deployment.                                                                                                           |          [:link:](https://docs.smooch.io/rest/v1/?javascript#get-deployment)          |
| `deployments.list`                     | List all configured deployments.                                                                                                           |         [:link:](https://docs.smooch.io/rest/v1/?javascript#list-deployments)         |
| `deployments.delete`                   | Delete the specified deployment.                                                                                                           |        [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-deployment)         |
| **serviceAccounts Module**             |                                                                                                                                            |                                                                                       |
| `serviceAccounts.create`               | Create a new service account.                                                                                                              |      [:link:](https://docs.smooch.io/rest/v1/?javascript#create-service-account)      |
| `serviceAccounts.list`                 | List all service accounts.                                                                                                                 |      [:link:](https://docs.smooch.io/rest/v1/?javascript#list-service-accounts)       |
| `serviceAccounts.get`                  | Get the specified service account.                                                                                                         |       [:link:](https://docs.smooch.io/rest/v1/?javascript#get-service-account)        |
| `serviceAccounts.delete`               | Delete the specified service account.                                                                                                      |      [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-service-account)      |
| `serviceAccounts.keys.create`          | Create a secret key for the specified service account.                                                                                     |    [:link:](https://docs.smooch.io/rest/v1/?javascript#create-service-account-key)    |
| `serviceAccounts.keys.list`            | List all secret keys for the specified service account.                                                                                    |    [:link:](https://docs.smooch.io/rest/v1/?javascript#list-service-account-keys)     |
| `serviceAccounts.keys.get`             | Get a specified secret key for the specified service account.                                                                              |     [:link:](https://docs.smooch.io/rest/v1/?javascript#get-service-account-key)      |
| `serviceAccounts.keys.delete`          | Delete a specified secret key for the specified service account.                                                                           |    [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-service-account-key)    |
| `serviceAccounts.keys.getJwt`          | Get an account-scoped JWT signed using the requested keyId/secret pair.                                                                    |     [:link:](https://docs.smooch.io/rest/v1/?javascript#get-service-account-jwt)      |
| **attachments Module**                 |                                                                                                                                            |                                                                                       |
| `attachments.create`                   | Upload an attachment to Smooch to use in future messages.                                                                                  |        [:link:](https://docs.smooch.io/rest/v1/?javascript#upload-attachment)         |
| `attachments.delete`                   | Remove an attachment uploaded to Smooch                                                                                                    |        [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-attachment)         |
| **templates Module**                   |                                                                                                                                            |                                                                                       |
| `templates.create`                     | Create a new template.                                                                                                                     |         [:link:](https://docs.smooch.io/rest/v1/?javascript#create-template)          |
| `templates.list`                       | List all templates for a given app.                                                                                                        |          [:link:](https://docs.smooch.io/rest/v1/?javascript#list-templates)          |
| `templates.get`                        | Return the specified template.                                                                                                             |           [:link:](https://docs.smooch.io/rest/v1/?javascript#get-template)           |
| `templates.update`                     | Update the specified template.                                                                                                             |         [:link:](https://docs.smooch.io/rest/v1/?javascript#update-template)          |
| `templates.delete`                     | Delete the specified template.                                                                                                             |         [:link:](https://docs.smooch.io/rest/v1/?javascript#delete-template)          |
| **notifications Module**               |                                                                                                                                            |                                                                                       |
| `notifications.postNotification`       | Send a notification.                                                                                                                       |        [:link:](https://docs.smooch.io/rest/v1/?javascript#post-notification)         |

## Deployment

Deployment is automated. When you merge to master, the current version in package.json will be automatically released to the public and published on npm.

Steps:

-   Update the version
    -   `npm version major|minor|patch`
-   PR to master
-   Merge

## Copyright and license

Copyright 2018 Zendesk, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
