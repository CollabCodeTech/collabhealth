<script>
  export let content = 'content not defined'
  export let dark = false
  export let divider = false
</script>

<style>
  .header-title {
    font-size: var(--size-fourth);
    font-weight: bold;
    line-height: 1.5em;
    letter-spacing: var(--letter-spacing-fourth);
    color: var(--color-black-high-emphasis);
    padding: var(--gap-fourth);
    margin-bottom: var(--gap-fourth);
  }

  .dark.header-title {
    color: var(--color-dark-white-extra);
  }

  .divider.header-title {
    border-bottom: 1px solid var(--color-gray-divider);
  }

  .dark.divider.header-title {
    border-bottom-color: var(--color-dark-divider);
  }
</style>

<h2 class={`header-title ${dark && 'dark'} ${divider && 'divider'}`}>
  {content}
</h2>
