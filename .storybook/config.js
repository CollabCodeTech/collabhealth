import { configure, addParameters } from '@storybook/svelte'

import '../public/global.css'

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

const newViewports = {
  galaxyS9: {
    name: 'Galaxy S9/S9+',
    styles: {
      width: '360px',
      height: '740px',
    },
  },
  iPhone678: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneXXS: {
    name: 'iPhone X/XS',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhonePlus: {
    name: 'iPhone Plus',
    styles: {
      width: '414px',
      height: '736px',
    },
  },
  kindleFireHdx: {
    name: 'Kindle Fire HDX',
    styles: {
      width: '800px',
      height: '1280px',
    },
  },
}

addParameters({ viewport: { viewports: newViewports } })

configure(loadStories, module)
