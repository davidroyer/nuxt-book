---
# description: Meta description for Plugins page.
---

# Plugins

I prefer to be able to directly access my plugin on the `context` instead of
having to do `context.app.$myPlugin`.

## Example

```js
import GoTrue from "gotrue-js"

const auth = new GoTrue({
  APIUrl: process.env.NETLIFY_IDENTITY_URL,
  audience: "",
  setCookie: true
})

export default (ctx, inject) => {
  ctx.auth = auth
  inject("auth", auth)
}
```

This creates much cleaner code in my opinion because I can have some nice
desctucturing to pull out my plugin of the context.

**For example:**

```js
export default async ({ identity }) => {
  if (process.client) {
    const user = await identity.currentUser()
    context.store.dispatch("nuxtClientInit", user)
  }
}
```
