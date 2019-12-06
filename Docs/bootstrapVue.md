# BootstrapVue Module

## Customizing Styles

1. Set CSS to false in `nuxt.config.js`
2. Set your overrides in the styles file
3. Import the two `scss` files. One is from Bootstrap and the other is from BootstrapVue

## Example Code

**`nuxt.config.js`**

```js
export default {
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
};
```

**`app.scss`**

```scss
@import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap");

$font-size-base: 1.1rem;
$font-family-sans-serif: "Lato";

@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";
```
