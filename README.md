# Smooch Core

Smooch Core is the most basic for interaction possible for the [Smooch API](http://docs.smooch.io/rest). It wraps the public API in a convenient Javascript API.

This library is meant to be isomorphic, which means it can be used in the browser and server-side with Node.js. However, the webhooks API and the JWT utils are not available in the browser to reduce the bundle size. Those actions should not be done in the browser anyway.

## Installation
```bash
$ npm install smooch-core --save
```

## Usage

### In the browser (using browserify or webpack)

```js
var SmoochCore = require('smooch-core');

// using app token
var smoochCore = new SmoochCore({
    appToken: 'some-token'
});


// using generated JWT
var smoochCore = new SmoochCore({
    jwt: 'some-jwt'
});

// ...

smoochCore.appUsers.init(options).then(function(response) {
  // do something with the response.
});
```


### Server-side

```js
var SmoochCore = require('smooch-core');

// using app token
var smoochCore = new SmoochCore({
    appToken: 'some-token'
});


// using generated JWT
var smoochCore = new SmoochCore({
    jwt: 'some-jwt'
});

// using JWT components
// Only available server-side. NEVER put your keyId and secret
// in you client-side code.
var smoochCore = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    scope: 'appUser', // app or appUser
    userId: 'some-id' // not necessary if scope === 'app'
});

// ...

smoochCore.webhooks.get(id).then(function(response) {
  // do something with the response.
});

```

## API
This is an overview of what the library has to offer. A better documentation will be available soon.

| Module    | Method  | Endpoint |
|--------   |-------- |-------------|
| appUsers  | init    | [POST `/v1/init`](http://docs.smooch.io/rest/#init-beta)       |
|           | get     | [GET `/v1/appusers/:id`](http://docs.smooch.io/rest/#get-app-user)         |
|           | update  | [PUT `/v1/appusers/:id`](http://docs.smooch.io/rest/#update-app-user)         |
|           | trackEvent  | [POST `/v1/appusers/:id/events`](http://docs.smooch.io/rest/#track-event)         |
| conversations | get | [GET `/v1/appusers/:id/conversation`](http://docs.smooch.io/rest/#get-conversation) |
|  | sendMessage | [POST `/v1/appusers/:id/conversation/messages`](http://docs.smooch.io/rest/#post-message) |
| webhooks | list | [GET `/v1/webhooks`](http://docs.smooch.io/rest/#list-webhook) |
|  | create | [POST `/v1/webhooks`](http://docs.smooch.io/rest/#create-webhook) |
|  | get | [GET `/v1/webhooks/:id`](http://docs.smooch.io/rest/#get-webhook) |
|  | update | [PUT `/v1/webhooks/:id`](http://docs.smooch.io/rest/#update-webhook) |
|  | delete | [DELETE `/v1/webhooks/:id`](http://docs.smooch.io/rest/#delete-webhook) |
