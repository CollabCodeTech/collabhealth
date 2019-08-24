<script>
  import Section from '../util/Sections.svelte'
  import TextButton from '../../objects/TextButton'

  export let content
  export let disabled = false
  export let dark = false

  const config = {
    title: 'Text Button',
    dark,
    description:
      'Esse oject é bem comum ser usado como botão secundário dentro de um form ou não dentro.',
    exampleImport: `import TextButton from './TextButton.svelte'`,
    exampleUse: `<TextButton content='${content}' disabled={${disabled}} dark={${dark}} />`,
  }
</script>

<Section {...config}>
  <TextButton {content} {disabled} {dark} />
</Section>
