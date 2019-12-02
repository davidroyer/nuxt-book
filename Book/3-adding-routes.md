---
title: 3. Adding Routes
---

# Adding Additional Routes via Pages Directory

We want 4 pages for our project:

1. Home Page
2. About Page
3. Posts Page

Since we already have `index.vue` inside the `pages` directory, we're good for our home page but need to create the remaining three routes.

Do this by creating the following files inside the `pages` directory:

- `about.vue`
- `about.vue`
- `posts.vue`

While we didn't need to create an `index.vue`, we will be editing it. We are going to give each page the bare-minimum because we do not want to distract ourselves with matters outside the scope of this book. However, we will be adding to these pages as we move through this chapter and begin integrating additional functionality.

## The Routes

Create and setup the following files listed below.

### Home Page (index)

Place the following in `index.vue`:

```vue
<template>
  <div>
    <h1 class="title">Home Page</h1>
    <b-button variant="primary" @click="modalShow = !modalShow">
      Open Modal
    </b-button>
    <b-modal v-model="modalShow" title="Nuxt Quickstart">
      <p class="my-4">Some modal content here...</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    modalShow: false
  })
};
</script>
```

### About Page

Place the following in `about.vue`:

```vue
<template>
  <div>
    <h1 class="title">About Page</h1>
    <p>This is where you would put some content about the project</p>
  </div>
</template>
```

### Posts Page

Place the following in `admin.vue`:

```vue
<template>
  <div>
    <h1 class="title">Posts Page</h1>
    <p>Your posts go here</p>
  </div>
</template>
```

## Adding Navigation

Now that we have multiple routes for our project, we need to setup navigation to test our routing by navigation between them.

We want our navigation to always be visible which means it needs to exist in our layout.

For right now, we'll place our navigation in `default.vue` file which exists inside the `layouts` directory.

At the time of this writing, the template for `default.vue` only consists of the following:

```vue
<template>
  <div>
    <nuxt />
  </div>
</template>
```

We're going to place our navigation above the `<nuxt/>` component which results in our template for `default.vue` being:

<!-- TODO: Need to update this example code to newer version -->

```vue
<template>
  <div>
    <nav>
      <b-nav>
        <b-nav-item exact to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/admin">Admin</b-nav-item>
      </b-nav>
    </nav>
    <nuxt />
  </div>
</template>
```

### Understanding Our Navigation

We are using components provided by the BootstrapVue library. Nuxt provides the `nuxt-link` component which is often used for routing in Nuxt.js applications. It basically functions just as `router-link` from VueRouter though.

With that in place as well as our newly created routes, we can now test navigating between routes by running our project in dev mode:

```bash
yarn dev
```

If everything was setup correctly, you should be able to navigate between your 3 routes.
