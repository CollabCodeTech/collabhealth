<script>
  export let content
  export let dark = false

  import Section from '../util/Sections.svelte'
  import TitleHealth from '../../objects/TitleHealth.svelte'

  const config = {
    title: 'Title',
    dark,
    description:
      'Tome cuidado ao usar esse object no seu projeto, ele é uam tag h1, recomeno você usar um por página pra não tem problema com SEO',
    exampleImport: "import TitleHealth from './TitleHealth.svelte'",
    exampleUse: `<TitleHealth content='Título' dark={${dark}}  />`,
  }
</script>

<Section {...config}>
  <TitleHealth {content} {dark} />
</Section>
