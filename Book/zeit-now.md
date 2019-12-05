# Zeit Now

> Everything referenced here is about using [Now V2](https://zeit.co/now).

There are 2 different ways to deploy.

1. Using Now CLI
2. Using a `now.json` file

```bash
yarn install
```

## Important Commands

### Deploy

```bash
now --prod
```

## Universal Apps

The `@nuxtjs/now-builder` can be used which is referenced in the [Nuxt
docs](https://nuxtjs.org/faq/now-deployment/).

I had to add the following to the project's `package.json` file though.

```json
{
  "engines": {
    "node": "10.x"
  }
}
```

## Environmental Variables

### Step 1: Set The Secret Key

```bash
now secret api-key ApiKeyValue123
```

### Step 2: Setup `env` variables in `now.json`

**`now.json`**

```json
{
  "version": 2,

  "build": {
    "env": {
      "API_KEY": "@api_key"
    }
  }
}
```

### Step 3: Add this to `nuxt.config.js`

```js
export default {
  env: {
    API_KEY: process.env.API_KEY
  }
};
```

!!! info FYI
The format for using the secret via the `NOW CLI` is as follows:

```bash
now secret add [name] [value]
```

The **[value]** is the secret value you are wanting to keep private.
!!!
