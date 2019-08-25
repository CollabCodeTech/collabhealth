<script>
  export let href = '#to-do'
  export let dark = false
</script>

<style>
  .menu-health {
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    padding: 6px 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-health::before,
  .menu-health::after {
    content: '';
    background-color: var(--color-black-inactive);
    width: 100%;
    height: 2px;
  }

  .menu-health.dark::before,
  .menu-health.dark::after {
    background-color: var(--color-dark-light);
  }

  .menu-health > .content {
    display: block;
    text-indent: -9999px;
    width: 100%;
    height: 2px;
    background-color: var(--color-black-inactive);
  }

  .menu-health.dark > .content {
    background-color: var(--color-dark-light);
  }
</style>

<a {href} class={`menu-health ${dark && 'dark'}`}>
  <span class="content">Menu</span>
</a>
