<script>
  import Section from '../util/Sections.svelte'
  import MenuHealth from '../../objects/MenuHealth.svelte'

  export let href
  export let dark = false

  const config = {
    title: 'MenuHealth',
    dark,
    description:
      'Normalmente usamos na versão mobile, mas também podemos usar na versão mobile e desktop.',
    exampleImport: `import MenuHealth from './MenuHealth.svelte'`,
    exampleUse: `<MenuHealth dark={${dark}} />`,
  }
</script>

<Section {...config}>
  <MenuHealth {href} {dark} />
</Section>
