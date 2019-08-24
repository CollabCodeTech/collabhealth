<script>
  import Section from '../util/Sections.svelte'
  import ContainedButton from '../../objects/ContainedButton'

  export let content
  export let dark = false
  export let disabled = false

  const config = {
    title: 'Contained Button',
    dark,
    description:
      'Usamos esse obejct como call to action normalmente dentro de um form',
    exampleImport: `import ContainedButton from './ContainedButton.svelte'`,
    exampleUse: `<ContainedButton content='${content}' disabled='${disabled}' />`,
  }
</script>

<Section {...config}>
  <ContainedButton {content} {disabled} />
</Section>
