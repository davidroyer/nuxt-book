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
![alt text](/images/nuxtstrap-setup.png "Logo Title Text 1")

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

**Now we're ready to begin learning about and building our application.**
