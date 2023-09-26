import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyles = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#161616',
}

function HostHeader() {
  return (
    <nav className="host-nav">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="."
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="income"
      >
        Income
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="vans"
      >
        Vans
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : null)}
        to="reviews"
      >
        Reviews
      </NavLink>
    </nav>
  )
}

export default HostHeader
