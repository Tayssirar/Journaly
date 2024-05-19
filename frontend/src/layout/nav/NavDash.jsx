import React from 'react'
import SideNavBar from './SideNavBar'
import { Fragment } from 'react'
import NavHeader from './NavHeader'
import Header from './Header'

function NavDash({ userRole }) {
  return (
    <Fragment>
      <NavHeader userRole={userRole} />
      <Header userRole={userRole}/>
      <SideNavBar userRole={userRole}/>
    </Fragment>  )
}

export default NavDash
