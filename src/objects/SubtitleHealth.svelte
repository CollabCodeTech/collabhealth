<script>
  export let content = 'content not defined'
  export let dark = false
</script>

<style>
  .subtitle-health {
    font-size: var(--size-second);
    color: var(--color-black-high-emphasis);
    font-weight: bold;
    line-height: 1.5em;
  }

  .subtitle-health.dark {
    color: var(--color-dark-light);
  }
</style>

<h2 class={`subtitle-health ${dark && 'dark'}`}>{content}</h2>
