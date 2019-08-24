<script>
  import Section from '../util/Sections.svelte'
  import SubtitleHealth from '../../objects/SubtitleHealth.svelte'

  export let content
  export let dark = false

  const config = {
    title: 'Subtitle Health',
    dark,
    description:
      'Esse object usamos para representar subtítulo, usamos a tag h2',
    exampleImport: `import SubtitleHealth from './SubtitleHealth.svelte`,
    exampleUse: `<SubtitleHealth content='${content}' dark={${dark}} />`,
  }
</script>

<Section {...config}>
  <SubtitleHealth {content} {dark} />
</Section>
