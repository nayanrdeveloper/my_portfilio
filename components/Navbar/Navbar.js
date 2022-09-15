import React from 'react'
import NavItem from './NavItem'
import NavLogo from './NavLogo'

function Navbar() {
  return (
    <div>
        <div className='flex justify-between px-10 py-5'>
            <div className=''>
                <NavLogo />
            </div>
            <div className=''>
                <NavItem />
            </div>
        </div>
    </div>
  )
}

export default Navbar