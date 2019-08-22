import { storiesOf } from '@storybook/svelte'
import TitleHealth from './objects/TitleHealthView.svelte'

storiesOf('TitleHealth', module).add('Default', () => ({
  Component: TitleHealth,
  props: {
    content: 'Titles',
  },
}))
