import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
          <div className="flex-1">
            <Link href={'/'} className="btn btn-ghost text-xl text-neutral ml-10">Dev-Dynasty</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link className='btn-active btn-accent border-4 hover:border-accent text-base-100 hover:bg-base-200 hover:text-neutral focus:bg-base-200 mr-10' href={'/addTopic'}>ADD Topic</Link></li>
            </ul>
          </div>
        </div>
  )
}

export default NavBar