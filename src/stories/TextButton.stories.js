import { storiesOf } from '@storybook/svelte'
import TextButton from './objects/TextButtonView.svelte'

storiesOf('TextButton', module)
  .add('Default', () => ({
    Component: TextButton,
    props: {
      content: 'Remover',
    },
  }))
  .add('Default disabled', () => ({
    Component: TextButton,
    props: {
      content: 'Remover',
      disabled: true,
    },
  }))
