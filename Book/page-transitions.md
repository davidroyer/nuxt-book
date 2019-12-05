# Page Transitions

To begin taking advantage of Nuxt's built in transitions, all we need to do is add a few lines of CSS.

Add the following to `default.vue` or one style files to begin taking advantage of Nuxt's built-in transition capabilities.

```vue
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
```

!!! info FYI
By default, Nuxt uses the transition name of `page`, This is attribute we
normally need to set on our own like so:

```vue
<transition name="some-name"></transition>
```

With Nuxt however, we just need to add some CSS to being experiencing silky-smooth client-side routing.
!!!
