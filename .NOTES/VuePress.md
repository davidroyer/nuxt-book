# VuePress Notes

## Watching Files

Added the following for getting updates to that vPressNavinator utility:

```js
{
  extraWatchFiles: [require.resolve(vpressNavigatorPath)];
}
```

## IOS Zoom Fix

```stylus
.search-box input
    font-size 16px;
```

## Extending Default Theme

1. Create a `theme` directory inside the `.vuepress` directory.
2. Create `theme/index.js` and put the following inside it:
   ```js
   module.exports = {
     extend: "@vuepress/theme-default"
   };
   ```
3. Create only the items you want to override.

## Page Transitions

The default theme needs be extended so we can override the `Page.vue` component.
After that, it's just like normal Vue transitions.

### Example:

**`theme/components/Page.vue`**

```vue
<template>
  <transition name="page-content">
    <Content :custom="false" />
  </transition>
</template>
```

If you want to change something except `<Content />` part, use binding

```vue
<template>
  <transition name="header-fade" mode="out-in">
    <header v-bind:key="$page.key">
      <h1>{{ $page.title }}</h1>
    </header>
  </transition>
</template>
```
