<script>
  export let dark = false
</script>

<style>
  .flat-card {
    border: var(--size-border) solid var(--color-gray-divider);
    border-radius: var(--gap-radius);
    width: 320px;
    height: 320px;
  }
</style>

<article class={`flat-card ${dark ? 'dark' : ''}`}>
  <slot />
</article>
