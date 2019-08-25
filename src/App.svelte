<script>
  import FlatCard from './objects/FlatCard.svelte'
  import HeaderTitle from './objects/HeaderTitle.svelte'

  const dark = false
</script>

<FlatCard {dark}>
  <HeaderTitle divider={true} {dark} content="Novo de equipamento" />
</FlatCard>
