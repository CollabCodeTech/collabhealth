<script>
  import Section from '../util/Sections.svelte'
  import FlatCard from '../../objects/FlatCard.svelte'

  export let dark = false

  const config = {
    title: 'Flat Card',
    darkLight: dark,
    description:
      'É um object mais usado para envolver outros objects ou compents, usamos a tab article nele',
    exampleImport: "import FlatCard from './FlatCard.svelte'",
    exampleUse: `<FlatCard dark={${dark}} />`,
  }
</script>

<Section {...config} class={`${dark ? 'dark' : ''}`}>
  <FlatCard {dark} style="max-width: 90%; height: 200px;" />
</Section>
