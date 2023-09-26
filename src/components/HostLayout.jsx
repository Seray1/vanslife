import { Outlet } from 'react-router-dom'
import HostHeader from './HostHeader'

function HostLayout() {
  return (
    <div>
      <HostHeader />
      <Outlet />
    </div>
  )
}

export default HostLayout
