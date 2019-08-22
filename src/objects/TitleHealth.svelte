<script>
  export let content
  export let dark
</script>

<style>
  .title-health {
    font-weight: 500;
    color: var(--color-black-high-emphasis);
    font-size: var(--size-fourth);
    line-height: 1.5em;
    letter-spacing: var(--letter-spacing-fourth);
  }
</style>

<h1 class={`title-health ${dark ? 'dark' : ''}`}>{content}</h1>
