<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">
    <b-container class="b-container-comp">
      <n-link to="/" tag="b-navbar-brand">NuxtStrap - V1</n-link>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item exact to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/posts">Posts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>