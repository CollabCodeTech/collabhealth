import { storiesOf } from '@storybook/svelte'
import TextfieldHealth from './objects/TextfieldHealthView.svelte'

storiesOf('TextfieldHealth', module)
  .add('Default', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Name',
    },
  }))
  .add('Dark Default', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Name',
      dark: true,
    },
  }))
  .add('Required', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Email',
      required: true,
      type: 'email',
    },
  }))
