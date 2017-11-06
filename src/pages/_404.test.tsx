import { } from 'jest'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as enzyme from 'enzyme'

import App from './404'

describe('Page not found', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <App />,
      div
    )
  })

  it('looks like a 404 page', () => {
    const app = enzyme.shallow(<App />)
    expect(app.contains('404')).toBe(true)
  })
})
