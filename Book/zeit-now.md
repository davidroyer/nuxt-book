# Zeit Now

> Everything referenced here is about using [Now V2](https://zeit.co/now).

There are 2 different ways to deploy.

1. Using Now CLI
2. Using a `now.json` file

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
