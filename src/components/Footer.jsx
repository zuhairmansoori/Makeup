import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Footer() {
  const link = [
    
        { name: "Portfolio", href: '/portfolio' },
        { name: "About Me", href: '/about' },
        { name: 'Reviews', href: "/reviews" },
        { name: "Contact", href: '/contact' }
    ]
 const services = [
    {name:"Bridal Makeup", href:'/bridal-makeup'},
     {name:"Party & Occasion Makeup", href:'/party-ccasion-makeup'},
      {name:"Engagement Makeup", href:'/engagement-makeup'},
       {name:"Soft Glam Makeup", href:'/soft-glam-makeup'},
        {name:"Editorial Makeup", href:'/editorial-makeup'},
         {name:"Makeup Lessons", href:'/makeup-lessons'}
 ]   

  return (
   <>
   <footer className='bg-primary-foreground h-1/3 p-5 sm:p-10 lg:p-20'>
   <div className='grid grid-cols-1 gap-5 lg:gap-0 sm:grid-cols-3 lg:grid-cols-4 justify-start items-start justify-items-start sm:justify-end lg:justify-center lg:items-center lg:justify-items-center'>
          <div className='lg:w-100 flex flex-col justify-center items-start '>
        <Image
        alt='logo'
        src='/logoimg.webp'
        width={300}
        height={100}
        className='w-40 sm:40 lg:w-100'
        />
        <p className='text-primary text-sm w-80 sm:w-full lg:w-full'>Enhancing your natural beauty with timeless artistry and a touch of elegance. From bridal glam to special occasions, every look is thoughtfully created to make you feel confident, radiant, and uniquely you.</p>
      </div>
      <div className='text-primary grid gap-3 ' >
        <h2 className='lg:text-2xl mb-5'>Links</h2>
       {
        link.map((lnk)=>(
            <p className='text-sm lg:text-xl hover:text-gray-400 duration-200' key={lnk.name}><Link  href={lnk.href} >{lnk.name}</Link></p>
            
        ))
       }
      </div>
      <div className='text-primary grid gap-3'>
        <h2 className='lg:text-2xl mb-5'>Services</h2>
        {
           services.map((sv)=>(
          <p className='text-sm lg:text-xl hover:text-gray-400 duration-200' key={sv.name}> <Link  href={sv.href} >{sv.name}</Link></p>
           
           ))
        }
      </div>
      <div className='bg-primary p-5 py-10 sm:w-150 lg:w-full rounded-3xl flex flex-col ml-10 justify-start items-center gap-5 self-end'>
        <h2 className='text-xl sm:text-3xl lg:text-2xl '>
            Your beauty, your moment.
        </h2>
        <p className='text-xl sm:text-2xl lg:text-xl'>
            Let&apos;s create a look you&apos;ll love.
        </p>
        <div className='text-center'>
                    <Button className={'sm:text-xl sm:py-6 sm:px-4'} variant='secondary' >BOOK YOUR APPOINTMENT ↗</Button>
        </div>
  
      </div>
   </div>
  
       <div className='h-px bg-primary my-10 '></div>
   <div className='text-center text-primary '>
    <p>© 2026 Lumière Beauty Studio. All rights reserved.</p>
    <p className='text-gray-300'>Website crafted by <strong> ZamCrop</strong></p>
   </div>
   
  
    
   </footer>
   </>
  )
}

export default Footer