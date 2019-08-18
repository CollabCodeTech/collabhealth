import { storiesOf } from '@storybook/svelte'
import TextfieldHealth from './objects/TextfieldHealthView.svelte'

storiesOf('TextfieldHealth', module).add('Default', () => ({
  Component: TextfieldHealth,
  props: {
    placeholder: 'Nome',
  },
}))
