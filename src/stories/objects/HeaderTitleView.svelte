<script>
  import Section from '../util/Sections.svelte'
  import HeaderTitle from '../../objects/HeaderTitle.svelte'

  export let content
  export let dark = false
  export let divider = false

  const config = {
    title: 'Header title',
    dark,
    description:
      'Object mais utilizado dentro da tag header, mas você pode usar em outros contexto',
    exampleImport: `import HeaderTitle from './HeaderTitle.svelte'`,
    exampleUse: `<HeaderTitle content="${content}" dark={${dark}} divider={${divider}} />`,
  }
</script>

<Section {...config}>
  <HeaderTitle {content} {dark} {divider} />
</Section>
