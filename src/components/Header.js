'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SiMongoosedotws } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <header className='sticky top-0 z-50 flex flex-row gap-1 items-center'>
      <nav className='relative container mx-auto flex flex-row gap-4 p-2 justify-between items-center rounded-br-lg rounded-bl-lg bg-slate-950 border-t border-yellow-200 '>
        <Link href='/' className='cursor-pointer rounded-full bg-yellow-200 p-1.5'>
          <SiMongoosedotws color='black' />
        </Link>
             
        <div className='hidden laptop:flex px-10 font-bold w-full text-xs justify-between items-center'>
          <Link className={`link ${pathname === '/' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} href={"/"}>HOME</Link>
          <Link className={`link ${pathname === '/projects' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} href={"/projects"}>PROJECTS</Link>
          <Link className={`link ${pathname === '/about' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} href={"/about"}>ABOUT</Link>
          <Link className={`link ${pathname === '/contact' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} href={"/contact"}>CONTACT</Link>         
        </div>

        <div className='flex laptop:hidden'>
          {!toggleDropdown ? (
            <GiHamburgerMenu size={25} onClick={()=> setToggleDropdown((prev)=> !prev)} className='text-yellow-200 hover:text-yellow-100 transition ease-in-out delay-300' />
          ) : (
            <MdCancel size={30} onClick={()=> setToggleDropdown((prev)=> !prev)} className='text-yellow-200 hover:text-yellow-100 transition ease-in-out delay-300' />
          )}
          {toggleDropdown && (
            <div className='absolute top-10 right-0 w-full h-32 transition ease-in-out delay-300 bg-slate-700 rounded-br-md rounded-bl-md flex items-center justify-evenly flex-col text-sm'>
              <Link 
                className={`link ${pathname === '/' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} 
                href={"/"}
                onClick={()=> setToggleDropdown(false)}
              >
                HOME
              </Link>
              <Link 
                className={`link ${pathname === '/projects' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} 
                href={"/projects"}
                onClick={()=> setToggleDropdown(false)}
              >
                PROJECTS
              </Link>
              <Link 
                className={`link ${pathname === '/about' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} 
                href={"/about"}
                onClick={()=> setToggleDropdown(false)}
              >
                ABOUT
              </Link>
              <Link 
                className={`link ${pathname === '/contact' ? 'text-yellow-200 bg-slate-950 shadow-cyan-500 shadow px-2 py-1 rounded-sm' : 'text-white'}`} 
                href={"/contact"}
                onClick={()=> setToggleDropdown(false)}
              >
                CONTACT
              </Link> 
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header