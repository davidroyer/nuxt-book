---
title: 5. Assets
---

# Setting Up Assets

Any assets such as images, css, scss, ect., that you want being processed through Webpack go inside the `assets` directory.

If you there are items you do NOT wish to run through Webpack then you should place them in the `static` directory. This will simply be copied over to the proper directory when Nuxt's build command is ran: `yarn build`

## Our Style Assets

We need to do 3 things to get our style assets setup

1. Add necessary dev dependencies
2. Setup a new directory and file(s) for our styles
3. Inform Nuxt to use the file for our project

### Style Dev Dependencies

We are going to use the SCSS syntax of Sass for our styles.
We need to install a few dev dependencies to do this through. We'll need `sass-loader` and `node-sass`. Without this, the `.scss` files will cause errors.

Run the following inside the root of the project:

```bash
yarn add -D node-sass sass-loader
```

### Our Style Files

Next, inside the `assets` directory create a new directory of `styles` with `app.scss` inside of it.

> Note: This directory could be named anything you like such as `scss` instead of `styles`. While I recommend you stick with the name of **styles** for now to ease the following-along process, you should feel free to use your preferred naming convention for your own projects.

### Additional Styles

While it perfectly fine to write styles inside our Vue component files, and I often do this myself, there is another way which is the approach we'll use here.

Within the `style` tags inside our `.vue` files, we can set the `src` attribute to the location of one of our `scss` files. It looks like this:

```vue
<style src="@/assets/styles/your-vue-component.scss"></style>
```

Let's setup a few files we'll use later. Create a `components` directory inside of the `styles` directory with the following inside:

- `app-header.scss`
- `app-footer.scss`

We'll add the some basic styles to these files, so they'll be ready when we create these components.

#### app-header

Place the following in `app-header.scss`

```css
header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;

  nav {
    margin-left: auto;
  }

  .nav {
    align-items: center;

    &-link {
      &.active {
        &:focus,
        &:hover {
          background: #212529c4 !important;
          color: white;
          border-radius: 5px;
        }
      }
    }
  }
}
```

#### app-footer

Place the following in `app-footer.scss`

```css
footer {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5em;
  background: #eee;
}
```

### Adding Style Resources To Our Config

We need to let Nuxt know that we want to use these styles inside `app.scss`. We do that by using the provided `css` property inside `nuxt.config.js`, which is an Array so multiple resources can be added.

Add the following to `nuxt.config.js` inside your config object:

```js
css: ["@/assets/styles/app.scss"];
```

## Image Assets

Any images inside the `assets` directory or any subdirectory within it will be processed by Webpack.

For our project, lets create an `images` directory within our `assets` directory to use for our images. Pick an image to use and place it in the new `assets/images` directory.

My image is named `image-example.jpg`. To reference it within a `.vue` file I can do the following:

```vue
<img
  class="hero-image"
  src="@/assets/images/image-example.jpg"
  alt="Image Example"
/>
```

Lets use our new image in `index.vue`. You'll need to adjust your code accordingly to match your image's name and file type. Otherwise the `template` part of `index.vue` should now be the following:

```vue
<template>
  <div>
    <h1 class="title">Home Page</h1>
    <img
      class="hero-image"
      src="@/assets/images/image-example.jpg"
      alt="Image Example"
    />
    <b-button variant="primary" @click="modalShow = !modalShow">
      Open Modal
    </b-button>
    <b-modal v-model="modalShow" title="Nuxt Quickstart">
      <p class="my-4">Some modal content here...</p>
    </b-modal>
  </div>
</template>
```
