import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/host">Host</Link>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/Vans">Vans</Link>
      </nav>
    </header>
  )
}

export default Header
