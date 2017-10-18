import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt={'Liu Chong'}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2)
          }}
        />
        Written by <strong>Liu Chong</strong> who is building useful things.{' '}
        <a href='https://github.com/liuchong'>
          You should follow him on Github
        </a>
      </p>
    )
  }
}

export default Bio
