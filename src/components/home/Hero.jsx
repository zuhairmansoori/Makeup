'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useBooking } from '../booking/BookingContext'
gsap.registerPlugin(ScrollTrigger)
function Hero() {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from(".h1", {
      filter: "blur(20px)",
      duration: 1,
    })
    gsap.from(".heading2", {
      x: -200,
      filter: "blur(20px)",
      duration: 1,

    })
    gsap.from(".heading3", {
      x: 200,
      filter: "blur(20px)",
      duration: 1,
    })
    gsap.to(".ctc", {
      scale: 1,
      opacity: 1,
      duration:0.5
      
    })
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:ref.current,
        start:"top top",
        end:"+=700",
        scrub:2,
        pin:true
      }
    })
    tl.to(".heading2-wrap",{
      x:-500,
    }).to(".h1",{
      y:100,
    },"<")
    .to(".heading3-wrap",{
      x:500
    },"<").to('.ctc-wrap',{
      y:500
    },"<")
  

  },{scope:ref})
  const {openBooking} = useBooking()
  return (
    <>
      <section ref={ref} className=" overflow-hidden relative min-h-screen bg-[url('/Hero-bg2.webp')] lg::bg-[url('/Hero-bg.webp')] bg-center bg-cover  bg-no-repeat" >

        <Image
          alt='model iamge'
          fill
          src={'/Model.webp'}
          sizes={'100vh'}
          className="hidden lg:block object-contain object-center"
          priority
        />
        <Image
          alt='model iamge'
          fill
          src={'/Model-mb.webp'}
          sizes={'100vh'}
          className="lg:hidden object-cover  object-center"
          priority
        />

        <div className='absolute w-full h-full flex  justify-center items-center z-10'>
          <h1 className='w-full font-heading h1 text-7xl sm:text-9xl md:text-[160px] md:mt-15 lg:mt-0 lg:text-[220px] text-white text-center font-bold'>
            MAKEUP
          </h1>
        </div>
        <div className='absolute inline left-10 top-[30%]  lg:left-30 lg:top-35 text-secondary-foreground text-3xl font-bold z-20'>
          <div className='heading2-wrap'>
               <h2 className='w-40 md:w-50 lg:w-60 heading2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold '>
            Beauty that feels like you.
          </h2>
          </div>
          
        </div>
        <div className='absolute flex flex-col-reverse sm:flex-row  sm:left-6 md:items-center md:justify-center bottom-30   lg:flex-row items-center lg:justify-around  md:gap-20  lg::gap-80  w-full lg:pl-0 lg:bottom-30 text-secondary-foreground md:text-3xl font-bold z-20'>
          <div className='ctc-wrap'>
               <Button onClick={openBooking} className={'text-xl ctc md:text-2xl px-8 py-6'}>
            Book Your Look
          </Button>
          </div>
         <div className='heading3-wrap'>
            <h2 className='w-40 sm:w-60 heading3 pb-20 ml-50 sm:ml-50 md:ml-30 lg:ml-0   md:pb-0 sm:text-xl md:text-2xl font-bold text-secondary-foreground  text-right'>
            Professional makeup for your special moments.
          </h2>
         </div>
         
        </div>
      </section>
    </>
  )
}

export default Hero
