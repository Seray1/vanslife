import React from 'react'
import { Link } from 'react-router-dom'

function HostHeader() {
  return (
    <nav className="host-nav">
      <Link to="/host/dashboard">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
    </nav>
  )
}

export default HostHeader
