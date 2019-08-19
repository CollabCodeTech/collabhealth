<script>
  export let label
  export let required
  export let type
  export let dark
  import TextfieldHealph from '../../objects/TextfieldHealth.svelte'
</script>

<style>
  div {
    height: 100vh;
    padding: 10vh 20vw;
  }
  .dark {
    background-color: var(--color-dark-black);
  }
</style>

<div class={`${dark ? 'dark' : ''}`}>
  <TextfieldHealph {label} {required} {type} {dark} />
</div>
