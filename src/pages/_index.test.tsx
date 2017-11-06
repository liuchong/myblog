import { } from 'jest'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as enzyme from 'enzyme'

import App from './index'

describe('Index page', () => {
  it('renders successfully', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <App />,
      div
    )
  })

  it('has a correct header', () => {
    const app = enzyme.shallow(<App />)
    expect(app.find('h1').text()).toBe('gatsby starter blog typescript')
  })
})
