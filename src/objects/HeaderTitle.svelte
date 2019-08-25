<script>
  export let content = 'content not defined'
  export let dark = false
</script>

<style>
  .header-title {
    font-size: var(--size-fourth);
    font-weight: bold;
    line-height: 1.5em;
    letter-spacing: var(--letter-spacing-fourth);
    color: var(--color-black-high-emphasis);
  }

  .header-title.dark {
    color: var(--color-dark-white-extra);
  }
</style>

<h2 class={`header-title ${dark && 'dark'}`}>{content}</h2>
