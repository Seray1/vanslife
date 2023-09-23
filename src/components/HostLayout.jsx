import React from 'react'
import { Outlet } from 'react-router-dom'
import HostHeader from '../pages/Host/HostHeader'

function HostLayout() {
  return (
    <div>
      <HostHeader />
      <Outlet />
    </div>
  )
}

export default HostLayout
