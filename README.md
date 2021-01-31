# @helperdiscord/dsc.gg

<p align="center">
  <a href="https://npmjs.com/@helperdiscord/dsc.gg"><img src="https://img.shields.io/npm/v/@helperdiscord/dsc.gg.svg" alt="NPM Package Version"></a>
  <a href="https://npmjs.com/@helperdiscord/dsc.gg"><img src="https://img.shields.io/github/languages/code-size/helperdiscord/dsc.gg.svg" alt="Size"></a>
</p>

A node js wrapper for dsc.gg

To use this package, you need to create a developer app <a href="https://dsc.gg/developers/dashboard">here</a> and grab the API token. This token is required for all API requests.


## Install instructions

Install with NPM

`npm install @helperdiscord/dsc.gg`

Install with Yarn

`yarn install @helperdiscord/dsc.gg`

---


## Getting Started

**Initilize the @helperdiscord/dsc.gg client**

```js
const { Client } = require("@helperdiscord/dsc.gg");

const client = new Client("Your API token")
```


## Client Functions

**Fetch information on a dsc.gg link**

```js
const link = await client.getLink('link_ending')
```

**Fetch information on a dsc.gg user**

```js
const user = await client.getUser('user_id')
```

**Fetch a dsc.gg user's links**

```js
const links = await client.getUserLinks('user_id')
```

**Fetch the top dsc.gg links**

```js
const top_links = await client.getTopLinks()
```

**Search for dsc.gg links**

```js
const results = await client.searchLinks('search_query', {
    type: 'bot', //optional - can be bot, server, or template
    limit: 10, //optional - limit the # of results that will be returned
})
```

**Create a dsc.gg link**

```js
const response = await client.createLink('link_ending', {
    type: 'server', //this can be server, bot, template or link
    redirect: 'something', //the redirect of the link
    unlisted: false, //true or false
    password: 'some_password', //optional - exclude this for no password
    meta: {
        title: 'some embed title', //optional
        description: 'some embed description', //optional
        image: 'some image url' //optional
    }
})
```

**Update a dsc.gg link**

```js
const response = await client.updateLink('link_ending', {
    type: 'server', //this can be server, bot, template or link
    redirect: 'something', //the redirect of the link
    unlisted: false, //true or false
    password: 'some_password', //optional - exclude this for no password
    meta: {
        title: 'some embed title', //optional
        description: 'some embed description', //optional
        image: 'some image url' //optional
    }
})
```

**Delete a dsc.gg link**

```js
const response = await client.deleteLink('link_ending')
```


# Full Example

**Search for links from a given input**
```js
const {Client} = require('./dist/index');
const c = new Client('token');
(async () => {
  const r = await c.searchLinks('helper', {type: 'bot'});
  console.log(r);
})();
```