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
