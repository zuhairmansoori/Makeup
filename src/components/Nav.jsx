'use client'
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import SideBar from './SideBar'
import Image from 'next/image'
import { SiDenodeploy } from 'react-icons/si'

function Nav() {
    const [isMenu, setIsManue] = useState(false)
    const [open ,setOpen]=useState(false)
    useEffect(() => {
        document.body.style.overflow = isMenu ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenu]);
    const nav = [
    
        { name: "Portfolio", href: '/portfolio' },
        { name: "About Me", href: '/about' },
        { name: 'Reviews', href: "/reviews" },
        { name: "Contact", href: '/contact' }
    ]
    return (
        <>
            <div className='relative w-full'>
                <nav className='fixed top-0 z-20 w-full  h-10'>
                    <div className='  px-5 bg-primary   flex items-center justify-between'>
                        <div>
                            <Image
                                alt='logo'
                                src={'/logo.svg'}
                                width={150}
                                height={70}
                                priority

                            />

                        </div>
                        <div className='hidden md:flex text-[#7a182c] items-center gap-10 justify-center'>
                            <div className="relative">
                                <button onClick={() => setOpen(!open)} className='flex justify-center hover:text-primary-foreground text-xl items-center '>
                                    Services  {open ?<ChevronDown size={'15'}/> : <ChevronRight size={'15'}/>}
                                </button>

                                {open && (
                                    <div className="absolute top-full hover:text-primary-foreground text-xl flex flex-col w-40 left-0 bg-white shadow-xl p-4">
                                        <Link href="/bridal">Bridal Makeup</Link>
                                        <Link href="/soft-glam">Soft Glam</Link>
                                    </div>
                                )}
                            </div>
                            {nav.map((nav) => (
                                <p key={nav.name} className='hover:text-primary-foreground text-xl'>
                                    <Link href={nav.href}>{nav.name}</Link>
                                </p>
                            ))}
                        </div>
                        <div className='text-[#7a182c] hidden md:flex justify-between items-center gap-3'>
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                        <button
                            type="button"
                            aria-label="Open menu"
                            className="block shrink-0 text-[#4b111e] md:hidden"
                            onClick={() => setIsManue(!isMenu)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>

                   

                        <SideBar nav={nav} isMenu={isMenu} setIsMenu={setIsManue}/>
                   
                </nav>
            </div>

        </>
    )
}

export default Nav
