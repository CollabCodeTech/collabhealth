<script>
  export let dark = false
  export let style

  console.log(dark)
</script>

<style>
  .flat-card {
    border: var(--size-border) solid var(--color-gray-divider);
    border-radius: var(--gap-radius);
  }

  .dark.flat-card {
    background-color: var(--color-dark-black);
    border-color: var(--color-dark-divider);
  }
</style>

<article class={`flat-card ${dark ? 'dark' : ''}`} {style}>
  <slot />
</article>
