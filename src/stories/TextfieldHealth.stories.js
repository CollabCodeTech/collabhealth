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
  .add('Dark Required', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Email',
      required: true,
      type: 'email',
      dark: true,
    },
  }))
  .add('Required with error message', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Email',
      required: true,
      type: 'email',
      messageError: 'Email inválido',
    },
  }))
  .add('Dark Required with error message', () => ({
    Component: TextfieldHealth,
    props: {
      label: 'Email',
      required: true,
      type: 'email',
      dark: true,
      messageError: 'Email inválido',
    },
  }))
