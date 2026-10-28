'use client'
import React from 'react'
import Link from 'next/link'

function SideBar({nav,isMenu ,setIsMenu}) {
  return (
   <section className={`flex justify-end relative md:hidden ${isMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-700`} >
    <div  onClick={() => setIsMenu(false)} className='absolute inset-0 bg-black/80 '></div>
    <div className={`bg-white w-2/3 h-screen z-50  p-10`}>
         <div className='flex flex-col items-center gap-20'>
        {nav.map((nav)=>(
            <p key={nav.name} className='text-2xl font-bold hover:text-secondary duration-200'>
                <Link href={nav.href}>{nav.name}</Link>
            </p>
        ))}
    </div>
    </div>
 
   </section>
  )
}

export default SideBar
