<template>
  <header>
    <AppNav />
  </header>
</template>

<script>
import AppNav from '@/components/AppNav'

export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    nav {
      margin-left: auto;
    }

    .nav {
      align-items: center;

      &-link {
        &.active {
          &:focus,
          &:hover {
            background: #212529c4 !important;
            color: white;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>