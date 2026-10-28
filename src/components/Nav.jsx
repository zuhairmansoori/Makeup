'use client'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import SideBar from './SideBar'
import Image from 'next/image'
import { SiDenodeploy } from 'react-icons/si'
import { Button } from './ui/button'
import { useBooking } from './booking/BookingContext'

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
    
        { name: "Portfolio", href: '#portfolio' },
        { name: "About Me", href: '#about' },
        { name: 'Reviews', href: "#reviews" },
        { name: "Contact", href: '#contact' }
    ]
    const {openBooking} = useBooking()
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
                             <p  className='hover:text-primary-foreground text-xl'>
                                    <Link href={'/'}>Home</Link>
                                </p>
                            <div className="relative">
                                <button onClick={() => setOpen(!open)} className='flex justify-center hover:text-primary-foreground text-xl items-center '>
                                    Services  {open ?<ChevronDown size={'15'}/> : <ChevronRight size={'15'}/>}
                                </button>

                                {open && (
                                    <div className="absolute top-full hover:text-primary-foreground text-xl flex flex-col w-60 left-0 bg-muted shadow-xl p-4">
                                        <Link href="#bridal">Bridal Makeup</Link>
                                        <Link href="#occasion">Occasion Makeup</Link>
                                        <Link href="#engagement">Engagement Makeup</Link>
                                        <Link href="#editorial">Editorial Makeup</Link>
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
                            <div onClick={openBooking}>
                                <Button className={'text-xl py-5 px-5 border border-primary-foreground hover:bg-primary-foreground hover:text-primary duration-200 transition-all'}>Book Your Look</Button>
                            </div>
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                        {isMenu ? <button
                            type="button"
                            aria-label="Open menu"
                            className="block shrink-0 text-[#4b111e] md:hidden"
                            onClick={() => setIsManue(!isMenu)}
                        >
                            <X size={28}/>
                        </button> : 
                        <button
                            type="button"
                            aria-label="Open menu"
                            className="block shrink-0 text-[#4b111e] md:hidden"
                            onClick={() => setIsManue(!isMenu)}
                        >
                            <Menu size={28} />
                        </button>
}
                    </div>

                   

                        <SideBar nav={nav} isMenu={isMenu} setIsMenu={setIsManue} open={open} setOpen={setOpen}/>
                   
                </nav>
            </div>

        </>
    )
}

export default Nav
