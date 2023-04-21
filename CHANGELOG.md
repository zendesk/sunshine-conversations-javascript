# Changelog

## [9.14.0] - 2023-04-10

### Added

-   Added a new `identities` read only property on the user object.

## [9.13.0] - 2023-03-30

### Added

-   Added a new `proactiveMessaging` creation reason for the `conversation:create` webhook event.
-   Added a `campaign` object to the `source` object of the following webhook events:
    -   `conversation:create`
    -   `conversation:message`
    -   `conversation:postback`
    -   `conversation:referral`

## [9.12.0] - 2022-08-30

-   The Switchboard `passControl` action is now idempotent if either the target `switchboardIntegration` is specified explicitly by its `id` or `name`, or the `next` keyword is used for the `switchboardIntegration` field, and the invoking integration can be identified by its [OAuth token](https://docs.smooch.io/guide/oauth/#redirect-and-acquiring-an-oauth-token) or [Custom Integration API Key](https://docs.smooch.io/rest/#tag/CustomIntegrationApiKeys) credentials. Duplicate passControl actions using the `next` keyword and their metadata are disregarded.
-   For more information, see [Switchboard passControl](https://docs.smooch.io/guide/switchboard/#pass-control).

## [9.11.0] - 2022-07-28

### Added

-   Added `conversation:referral` event.
    This currently fires when a user is referred to an existing conversation.

## [9.10.0] - 2022-07-19

### Added

-   Added a new `unblocked` reason for the `client:update` webhook event.

## [9.9.0] - 2022-07-12

### Added

-   Added new `appLocalizationEnabled` parameter to app settings.

## [9.8.0] - 2022-06-29

### Added

-   `metadata` property now appear in the `conversation` object in webhook events

## [9.7.1] - 2022-05-17

### Fixed

-   Fixed the page query parameter handling in the javascript api client.

## [9.7.0] - 2022-05-05

### Added

-   Added a `releaseControl` action endpoint to the Switchboard Actions API.

## [9.6.0] - 2022-03-23

### Added

-   Added `user:update` event. This event currently fires when an anonymous user is converted to an authenticated user.
-   Added missing `reason` in the `user:merge` webhook payload example.

## [9.5.9] - 2022-01-07

-   Added missing User-Agent header to JS client library.

## [9.5.8] - 2022-01-04

-   Added missing pageId and pageName properties on Messenger integration.

## [9.5.7] - 2021-11-30

-   Dependencies security update; JS wrapper not affected.

## [9.4.7] - 2021-11-04

-   Removed unused NPM dependency due to security warning.

## [9.4.6] - 2021-09-23

-   Added channel linking events
-   Added `canUserSeeConversationList` in the `web` integration
-   Updated RESTeasy to the latest version

## [9.4.5] - 2021-08-23

-   Added page[before|after|size] query parameter constraints.

## [9.4.4] - 2021-04-12

### Added

-   Added `messagingServiceSid` field when creating a Twilio integration that will use Messaging Services.

## [9.4.3] - 2021-02-16

### Fixed

-   Fixed: query `Page1` instead of `Page` being used in the v2 List Messages API
-   Fixed: property `displayName` should not be `nullable` in v2 App Key API

## [9.4.2] - 2021-01-06

### Added

-   Added `phoneNumber` to the `integration` whatsapp response
-   Added a message type `template` in the Post Message API

### Changed

-   Removed `channelId` and `channelSecret` as required fields when creating a LINE integration

### Fixed

-   Fixed: property `messageSchema` should be `schema` in v2 Post Message API

## [9.4.1] - 2020-12-16

### Changed

-   Changed the limit of the `select` field options from 20 to 100

## [9.4.0] - 2020-12-15

### Added

-   Added a new user profile field `locale`

## [9.3.0] - 2020-11-18

### Added

-   Added a new optional field `altText` to the [message schema](https://docs.smooch.io/rest/#operation/postMessage) when sending an image or a file

## [9.2.0] - 2020-11-16

### Added

-   Added support for Instagram Direct

## [9.1.0] - 2020-11-11

### Added

-   Added Sunshine Conversations Connect and Oauth endpoints

### Changed

-   Changed the `mediaUrl` field to be required for `file` and `image` messages
-   Changed coordinates fields to be required in `location` messages

### Fixed

-   Fixed the HTTP method used for `/attachments/cookie` from POST to GET
-   Fixed the comment headers in the models having a long description

## [9.0.1] - 2020-10-19

### Added

-   Added `messageSchema` property to the `POST /messages` endpoint for [whatsapp template messages](https://docs.smooch.io/guide/whatsapp/#post-message-api)

### Changed

-   Renamed `canUserCreateConversation` to `canUserCreateMoreConversations` in the Android/Ios integrations

## [9.0.0] - 2020-10-01

### Added

-   API wrappers for the v2 Sunshine Conversations API
