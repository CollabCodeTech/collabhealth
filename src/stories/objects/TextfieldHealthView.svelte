<script>
  import Section from '../util/Sections.svelte'
  import TextfieldHealth from '../../objects/TextfieldHealth.svelte'

  export let label
  export let required = false
  export let type = 'text'
  export let dark = false
  export let messageError = false

  const config = {
    title: 'Textfield',
    dark: dark,
    description:
      'Usamos para pegar informação do usuário dentro de um formulario',
    exampleImport: "import TextfieldHealth from './TextfieldHealth.svelte'",
    exampleUse: `<TextfieldHealth label='${label}' required={${required}} type='${type}' dark={${dark}} messageError={${messageError}} />`,
  }
</script>

<Section {...config}>
  <TextfieldHealth {label} {required} {type} {dark} {messageError} />
</Section>
