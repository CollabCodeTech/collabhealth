<script>
  import Section from '../util/Sections.svelte'
  import FormHealth from '../../objects/FormHealth.svelte'
  import TextfieldHealth from '../../objects/TextfieldHealth.svelte'

  export let dark = false

  const config = {
    title: 'Form Health',
    dark,
    description:
      'Esse object não tem muita coisa visual, o objetivo dele é envolver outros objects e pegar todos os dados que o usuário preecheu e enviar isso para a API.',
    exampleImport: `import FormHelath from './FormHealth.svelte'`,
    exampleUse: `
    <FormHealth>
      <TextfieldHealth label="Name" type="text" {dark} />
      <TextfieldHealth label="Email" type="text" {dark} />
    </FormHealth>`,
  }
</script>

<Section {...config}>
  <FormHealth>
    <TextfieldHealth label="Name" type="text" {dark} />
    <TextfieldHealth label="Email" type="text" {dark} />
  </FormHealth>
</Section>
