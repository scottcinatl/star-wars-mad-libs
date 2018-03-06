import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src="https://miukimiu.github.io/star-wars-random-quotes/images/Star_Wars_Logo.svg"
          alt="star-wars-logo"
          className="header-logo"
        />
      </div>
    )
  }
}

export default Header
