<template>
  <footer>
    <h4 class="render-result">
      Rendered From:
      <span class="subtitle" v-text="$store.state.renderedFrom"></span>
    </h4>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.5em;
    background: #eee;
  }
</style>
