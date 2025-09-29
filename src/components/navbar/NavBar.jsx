import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react';




const navbarLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];


const NavBar = () => {

    const [open,setOpen]=useState(false)
    const Links = navbarLinks.map(nl=><Link nl={nl}></Link>)
 
    return (
        <div className='flex mx-12 justify-between'>

            <span className='flex gap-3' onClick={()=>setOpen(!open)}>
                {
                  open? <CircleX className='md:hidden' />:<Menu className='md:hidden' />  
                }
              <ul className={`md:hidden absolute duration-1000  ${
              open?'top-8':'-top-40'} `}>            
                {Links}
              </ul>
            <h1>MY Navbar</h1>
            </span>
               
            <ul className='hidden md:flex gap-5'>
            {
                Links
            }
            </ul>
            <button>Sign In</button>
        </div>
    );
};

export default NavBar;