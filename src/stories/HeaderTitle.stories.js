import { storiesOf } from '@storybook/svelte'
import HeaderTitle from './objects/HeaderTitleView.svelte'

storiesOf('HeaderTitle', module).add('Default', () => ({
  Component: HeaderTitle,
  props: {
    content: 'Equipamentos',
  },
}))
