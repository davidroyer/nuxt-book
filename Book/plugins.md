---
# description: Meta description for Plugins page.
---

# Plugins

```js
export default (ctx, inject) => {
  ctx.auth = auth;
  inject("auth", auth);

  ctx.fireApp = fireApp;
  inject("fireApp", fireApp);
};
```
