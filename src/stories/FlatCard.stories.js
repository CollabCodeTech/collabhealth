import { storiesOf } from '@storybook/svelte'
import FlatCard from './objects/FlatCardView.svelte'

storiesOf('FlatCard', module)
  .add('FlatCard white', () => ({
    Component: FlatCard,
  }))
  .add('Dark FlatCard white', () => ({
    Component: FlatCard,
    props: {
      dark: true,
    },
  }))
