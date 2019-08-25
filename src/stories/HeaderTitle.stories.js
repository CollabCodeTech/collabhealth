import { storiesOf } from '@storybook/svelte'
import HeaderTitle from './objects/HeaderTitleView.svelte'

storiesOf('HeaderTitle', module)
  .add('Default', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
    },
  }))
  .add('Default whith divider', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
      divider: true,
    },
  }))
  .add('Dark default', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
      dark: true,
    },
  }))
  .add('Dark default whith divider', () => ({
    Component: HeaderTitle,
    props: {
      content: 'Equipamentos',
      dark: true,
      divider: true,
    },
  }))
