import React from 'react'

function NavItem() {
    const navItemList = ['I AM', "My Experience", "Education", "Resume", "Portfolio"];
  return (
    <div className='flex'>
        <ul className='flex'>
            {
                navItemList.map((navItem) => {
                    return <li className='p-2 hover:text-[#FF0003] text-[#878e99] cursor-pointer' key={navItem}>
                        {navItem}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default NavItem