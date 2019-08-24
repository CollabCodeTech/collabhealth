import { storiesOf } from '@storybook/svelte'
import ContainedButton from './objects/ContainedButtonView'

storiesOf('ContainedButton', module)
  .add('Default', () => ({
    Component: ContainedButton,
    props: {
      content: 'Enviar',
    },
  }))
  .add('Default disabled', () => ({
    Component: ContainedButton,
    props: {
      content: 'Enviar',
      disabled: true,
    },
  }))
