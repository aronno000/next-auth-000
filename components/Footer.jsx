import React from 'react'
import { FaCopyright } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <aside className="flex flex-row gap-3 items-center pt-5">
  <BsDropletHalf size={30} /><p className='flex flex-row gap-3'>Copyright <FaCopyright size={20} /> 2023 - All right reserved</p>
  </aside> 
  <hr className='border-2 w-[100%] lg:hidden md:hidden'/>
  <nav className="flex flex-row justify-around items-center w-[100%]">
    <p><span className='text-2xl'>DEVELOPER:</span> <span className='text-warning'>AR ARONNO GH.</span></p>
    <div className='flex flex-row gap-4'>
    <Link target='_blank' href={'https://www.facebook.com/aronno.ghosh.koushik/'}><FaSquareFacebook size={30} /></Link>
    <Link target='_blank' href={'https://github.com/aronno000'}><FaSquareGithub size={30} /></Link>
    <Link target='_blank' href={'https://www.instagram.com/argh.000/'}><ImInstagram size={30} /></Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer