<template>
  <header class="container">
    <h1>NuxtStrap</h1>
    <AppNav />
  </header>
</template>

<script>
import AppNav from "@/components/AppNav";

export default {
  name: "AppHeader",
  components: {
    AppNav
  }
};
</script>

<style src="@/assets/styles/components/app-header.scss" lang="scss"></style>
