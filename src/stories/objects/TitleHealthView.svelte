<script>
  export let content
  export let dark

  import Section from '../util/Sections.svelte'
  import TitleHealth from '../../objects/TitleHealth.svelte'

  const config = {
    title: 'Título',
    dark,
    description:
      'Tome cuidado ao usar esse object no seu projeto, ele é uam tag h1, recomeno você usar um por página pra não tem problema com SEO',
    exampleImport: "import TitleHealth from './TitleHealth.svelte'",
    exampleUse: "<TitleHealth content='Título' />",
  }
</script>

<Section {...config}>
  <TitleHealth {content} />
</Section>
