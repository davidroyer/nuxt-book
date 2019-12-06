# Static Site Generation

Here is an example assuming we are using the `@nuxtjs/axios` module. We can't use it inside the
`nuxt.config.js` file though so we just the normal version of `axios` there
generating routes since it's
already a project dependency via this module.

!!! info FYI
The code & concept of generating routes is generally the same regardless of the HTTP
client you are using though.
!!!

This example is assuming we have a dynamic route file of `posts/_id.vue`.

## Basic Example - A Single Dynamic Route Type

**`posts/_id.vue`**

```js
export default {
  async asyncData({ app, params }) {
    const post = await app.$axios.$get(`posts/${params.id}`);
    return { post };
  }
};
```

**In `nuxt.config.js`**

```js
import axios from "axios";

export default {
  generate: {
    async routes() {
      const { data } = await axios.get("https://json-api.now.sh/posts");
      return data.map(post => `posts/${post.id}`);
    }
  }
};
```

## Advanced Example - Multiple Dynamic Routes Types

```js
export default {
  generate: {
    async routes() {
      const baseURL = "https://demo1.wpapi.app/wp-json/wp/v2";
      const Endpoints = ["posts", "authors", "products"];
      let routesArray = [];

      for (const endpoint of Endpoints) {
        const { data } = await axios.get(`${baseURL}/${endpoint}`);
        const endpointRoutes = data.map(item => `/${endpoint}/${item.id}`);
        routesArray.push(...endpointRoutes);
      }

      return routesArray;
    }
  }
};
```

!!! warning IMPORTANT
This code will only work if the path of the route matches the path of the API call.
!!!

## Using The `payload` Option

If you have a lot of routes being processed though then you might want to you
the `payload` option referenced
[here](https://nuxtjs.org/api/configuration-generate#speeding-up-dynamic-route-generation-with-code-payload-code-)
in the Nuxt.js docs.

Here is what that would look like:

```js
async routes() {
    const { data } = await axios.get('https://json-api.now.sh/posts')

    return data.map((post) => {
        route: `posts/${post.id}`,
        payload: post
    })
}
```

**However**, we also need to update our file corresponding to this dynamic
route.

For this example, we'd need to `posts/_id.vue`:

```js
async asyncData ({ params, payload }) {
  if (payload) return { post: payload }
  else return { post: await app.$axios.$get(`posts/${params.id}`) }
}
```
