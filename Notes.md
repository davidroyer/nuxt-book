# Notes

## VSCode

- Use Stylus Supreme for getting formatting of `.styl` files to work

<br>

## VuePress

### Watching Files

Added the following for getting updates to that vPressNavinator utility:

```js
{
  extraWatchFiles: [require.resolve(vpressNavigatorPath)];
}
```

### IOS Zoom Fix

```stylus
.search-box input
    font-size 16px;
```

<br>

## Stylus

- You can do glob importing
- Imports are doing via `@import`
