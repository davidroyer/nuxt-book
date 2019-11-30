---
title: 2. Architecture
---

# Project Architecture

Viewing our project, NuxtStrap, in an editor shows various files and folders already created.

You'll even see that inside each directory is a README providing helpful information about that directory.

Inside `nuxt.config.js` you'll see a property called `modules` that is an Array. By choosing BootstrapVue as our custom UI framework, it's already setup and ready for us to use.

::: tip Note
It's important to understand that we could have just as easily set BootstrapVue ourselves inside the plugins directory. We could have created a file called `bs-vue.js` (or whatever we wanted), put the following code inside and registered it as a plugin in `nuxt.config.js`.
:::

```js
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
```

This trivial step is taken care of though by using the module.
