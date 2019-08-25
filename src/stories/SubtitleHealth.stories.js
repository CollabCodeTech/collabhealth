import { storiesOf } from '@storybook/svelte'
import SubtitleHealth from './objects/SubtitleHealthView.svelte'

storiesOf('SubtitleHealth', module)
  .add('Default', () => ({
    Component: SubtitleHealth,
    props: {
      content: 'Dados do equipamento',
    },
  }))
  .add('Dark default', () => ({
    Component: SubtitleHealth,
    props: {
      content: 'Dados do equipamento',
      dark: true,
    },
  }))
