'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {useRef} from 'react'
import { ScrollTrigger } from 'gsap/all'
import { Button } from '../ui/button'
gsap.registerPlugin(ScrollTrigger)


function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const contain = useRef(null)
  const images = [
    { src: '/party1.webp', alt: 'party makeup' },
    { src: '/party2.webp', alt: 'party makeup' },
    { src: '/party3.webp', alt: 'party makeup' },
    { src: '/glam1.webp', alt: 'glam makeup' },
    { src: '/glam2.webp', alt: 'glam makeup' },
    { src: '/glam3.webp', alt: 'glam makeup' },
    { src: '/bridal1.webp', alt: 'bridal makeup' },
    { src: '/bridal2.webp', alt: 'bridal makeup' },
    { src: '/bridal3.webp', alt: 'bridal makeup' },
    { src: '/bridal4.webp', alt: 'bridal makeup' },
    { src: '/engag1.webp', alt: 'engagement makeup' },
    { src: '/engag2.webp', alt: 'enagegement makeup' },
  ]
  useGSAP(()=>{
    const element = gsap.utils.toArray(".card, .animate-pera,.animate-heading",contain.current)
    gsap.set(".card",{
      y:100,
      opacity:0
    })
    ScrollTrigger.batch(".card",{
      start:"top 90%",
       once: true,
      onEnter:(batch)=>{
       
        gsap.to(batch,{
          y:0,
          opacity:1,
          duration:0.5,
          stagger:0.1,
          ease:"power2.in",
          overwrite:true
        })
      }
    })

  },{scope:contain})
  
  return (
    <>
      <section id='portfolio' ref={contain}>
        <div className='text-center py-15'>
          <p className='text-sm card inline bg-primary-foreground/10 p-3  py-1 rounded-2xl'>The Artistry</p>
                    <h2 className='text-primary-foreground card  text-2xl sm:text-3xl mt-10 mb-3 lg:text-5xl'>Beauty, Through My Lens</h2>
                    <p className='text-card-foreground card text-sm sm:text-xl  md:text-2xl '>A collection of timeless looks and unforgettable moments.</p>
        </div>
        <div className="columns-2  md:columns-3 lg:columns-4 gap-3 px-2 lg:px-20">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => {
                  console.log("Gallery image clicked:", i);
                setIndex(i);
                setOpen(true);
              }}
              className="mb-3 block card w-full break-inside-avoid overflow-hidden"
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={200}
                loading="lazy"
                className="block h-auto w-full transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
        <div className='text-center'>
          <Button className={'mt-10 mb-20 card'} variant='secondary'>EXPLORE THE GALLERY ↗</Button>
                        
        </div>

        {/* Full-screen lightbox */}
      </section>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images}
          styles={{
            root: {
              "--yarl__portal_zindex": "9999",
            },
          }}
        />
    </>
  )
}

export default Gallery