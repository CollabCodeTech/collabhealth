import { storiesOf } from '@storybook/svelte'
import HeaderTitle from './objects/HeaderTitleView.svelte'

storiesOf('HeaderTitle', module)
  .add('Default', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
    },
  }))
  .add('Dark default', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
      dark: true,
    },
  }))
