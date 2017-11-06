import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'gatsby starter blog typescript'
})

function importAll (r) {
  r.keys().forEach(r)
}

function loadStories () {
  importAll(require.context('../src', true, /.stories.tsx?$/))
}

configure(loadStories, module)
