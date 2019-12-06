# SEO

<!-- NOTE: PULL IN NUXT-BOILERPLATE CODE HERE -->

> Basic setup we need to have a solid SEO and Social Media presence

!!! tip Great Resource
[This article](https://css-tricks.com/essential-meta-tags-social-media/) on CSS
Tricks is fantastic because it's covers the bare minimum needed to get setup.
!!!

```html
<meta property="og:title" content="European Travel Destinations" />
<meta
  property="og:description"
  content="Offering tour packages for individuals or groups."
/>
<meta
  property="og:image"
  content="http://euro-travel-example.com/thumbnail.jpg"
/>
<meta property="og:url" content="http://euro-travel-example.com/index.htm" />
<meta name="twitter:card" content="summary_large_image" />
```

## The Page Title

If undefined or blank then we don't need the hyphen.

```js
{
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} - My Site` : "My Site"
    }
  }
}
```

## Dynamic Routes

Normally `head` is an object but in order to get the corresponding information
with dynamic routes then it will be need to be a function

## Example Code

### As an `Object`

```js
export default {
  head: {
    title: "Post"
  }
}
```

### As a `Function`

```js
export default {
  head() {
    return {
      title: this.post.title
    }
  }
}
```
