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
  .add('Dark default', () => ({
    Component: ContainedButton,
    props: {
      content: 'Enviar',
      dark: true,
    },
  }))
  .add('Dark default disabled', () => ({
    Component: ContainedButton,
    props: {
      content: 'Enviar',
      disabled: true,
      dark: true,
    },
  }))
