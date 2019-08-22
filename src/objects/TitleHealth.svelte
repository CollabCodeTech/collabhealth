<script>
  export let content = 'content not defined'
  export let dark = false
</script>

<style>
  .title-health {
    font-weight: 500;
    color: var(--color-black-high-emphasis);
    font-size: var(--size-fourth);
    line-height: 1.5em;
    letter-spacing: var(--letter-spacing-fourth);
  }

  .title-health.dark {
    color: var(--color-dark-white-extra);
  }
</style>

<h1 class={`title-health ${dark ? 'dark' : ''}`}>{content}</h1>
