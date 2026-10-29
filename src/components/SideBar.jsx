'use client'
import React from 'react'
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

function SideBar({ nav, isMenu, setIsMenu, open, setOpen }) {
    return (
        <section className={`flex justify-end relative md:hidden ${isMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-700`} >
            <div onClick={() => setIsMenu(false)} className='absolute inset-0 bg-black/80 '></div>
            <div className={`bg-white w-2/3 h-screen z-50  pt-20`}>
                <div className='flex flex-col  justify-center items-center gap-10 w-full'>
                    <p onClick={()=> setIsMenu(!isMenu)} className='hover:text-primary-foreground text-xl flex  flex-col justify-center items-center w-full'>
                        <Link href={'/'}>Home</Link>
                    </p>

                  <div className='relative w-full flex  flex-col justify-center items-center'>
                       <button onClick={() => setOpen(!open)} className='flex justify-center hover:text-primary-foreground text-xl items-center '>
                        Services  {open ? <ChevronDown size={'15'} /> : <ChevronRight size={'15'} />}
                    </button>

                    {open && (
                        <div className=" w-full hover:text-primary-foreground text-xl flex  flex-col justify-center items-center py-5  bg-muted">
                            <Link onClick={()=> setIsMenu(!isMenu)} href="#bridal">Bridal Makeup</Link>
                            <Link onClick={()=> setIsMenu(!isMenu)} href="#occasion">Occasion Makeup</Link>
                            <Link onClick={()=> setIsMenu(!isMenu)} href="#engagement">Engagement Makeup</Link>
                            <Link onClick={()=> setIsMenu(!isMenu)} href="#editorial">Editorial Makeup</Link>
                        </div>
                    )}
                  </div>
                   


                    {nav.map((nav) => (
                        <p onClick={()=> setIsMenu(!isMenu)} key={nav.name} className='hover:text-primary-foreground flex  flex-col justify-center items-center text-xl w-full  duration-200'>
                            <Link href={nav.href}>{nav.name}</Link>
                        </p>
                    ))}
                    <div className='flex items-center gap-5'>
                         <FaFacebook size={25}/>
                            <FaInstagram size={25} /> 
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SideBar
