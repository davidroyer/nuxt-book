---
title: 1. Setup
---

# Setup

We need to setup our new project.
We'll be using Nuxt's `create-nuxt-app` CLI tool to create our project.
Since the name of our project is NuxtStrap, we'll name the directory
`nuxtstrap`.

## Create the application

```bash
yarn create nuxt-app nuxtstrap
# Or With npx
npx create-nuxt-app nuxtstrap
```

This will run you through a set of options and choose accordingly so your result is as follows:
![alt text](/images/cli-setup-image.png "CLI Setup")

Once completed, `cd` into `nuxtstrap` and open it in your editor of choice.

```bash
cd nuxtstrap
```

::: warning
I highly recommend you don't make change this name.
It could cause a lot of confusion and errors later
as you read through but have to remember your project name is different
:::

<br>

## Running Our Dev Environment

Inside the `nuxtstrap` directory, we can run our development server:

```bash
yarn dev
```

View the result at localhost:3000. It should look similar to the following:
![alt text](/images/nuxtstrap-dev.png "Nuxt Starter Dev")

## `axios` Module

We need sure the `axios` module was added when we ran through our setup. We will be making request to an external API so we’ll choose to add the axios module.

Inside the `nuxt.config` file add the following code after the `module` option. This will allow us to make more concise code when making API calls. We will go into more depth about module
and the axios module later.

```js
axios: {
  baseURL: "https://json-api.now.sh";
}
```

**Now we're ready to begin learning about and building our application.**
