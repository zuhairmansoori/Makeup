'use client'
import React,{useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Hero from './Hero'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'
import State from '../State'
import Testimonial from './Testimonial'
import Faq from './Faq'
import BookingForm from '../booking/BookingForm'


function Grid() {

  return (
    <>
      <section  className='relative'>
        <div className='relative'>
          <Hero />
        </div>
        <div  className="relative  ">
          <Services />
          <Gallery/>
          <About/>
          <State/>
          <Testimonial/>
          <Faq/>
         
        </div>
        

      </section>
    </>
  )
}

export default Grid
