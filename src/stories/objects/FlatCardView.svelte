<script>
  export let dark

  import FlatCard from '../../objects/FlatCard.svelte'
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 10vh 20vw;
  }
  .dark {
    background-color: var(--color-dark-black-light);
  }
</style>

<div class={`${dark ? 'dark' : ''}`}>
  <FlatCard {dark} />
</div>
