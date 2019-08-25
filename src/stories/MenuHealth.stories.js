import { storiesOf } from '@storybook/svelte'
import MenuHealth from './objects/MenuHealthView.svelte'

storiesOf('MenuHealth', module)
  .add('Default', () => ({
    Component: MenuHealth,
    props: {
      href: '#menu',
    },
  }))
  .add('Dark default', () => ({
    Component: MenuHealth,
    props: {
      href: '#menu',
      dark: true,
    },
  }))
