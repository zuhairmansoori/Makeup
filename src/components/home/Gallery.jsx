'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { Button } from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

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
  { src: '/engag2.webp', alt: 'engagement makeup' },
]

// Masonry look ke liye alag-alag FIXED ratios (layout kabhi shift nahi hoga)
const ratios = [
  'aspect-[3/4]',
  'aspect-square',
  'aspect-[4/5]',
  'aspect-[2/3]',
]

function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const contain = useRef(null)

  useGSAP(
    () => {
      gsap.set('.card', { y: 100, opacity: 0 })

      ScrollTrigger.batch('.card', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            overwrite: true,
          })
        },
      })
    },
    { scope: contain }
  )

  return (
    <>
      <section id="portfolio" ref={contain}>
        <div className="py-15 text-center">
          <p className="card inline rounded-2xl bg-primary-foreground/10 p-3 py-1 text-sm">
            The Artistry
          </p>
          <h2 className="card mt-10 mb-3 text-2xl text-primary-foreground sm:text-3xl lg:text-5xl">
            Beauty, Through My Lens
          </h2>
          <p className="card text-sm text-card-foreground sm:text-xl md:text-2xl">
            A collection of timeless looks and unforgettable moments.
          </p>
        </div>

        <div className="columns-2 gap-3 px-2 md:columns-3 lg:columns-4 lg:px-20">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => {
                setIndex(i)
                setOpen(true)
              }}
              className="card mb-3 block w-full break-inside-avoid overflow-hidden"
              aria-label={`View ${image.alt}`}
            >
              {/* Fixed-ratio wrapper: image load hone se height nahi badlegi */}
              <div className={`relative w-full ${ratios[i % ratios.length]}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button className="card mt-10 mb-20" variant="secondary">
            EXPLORE THE GALLERY ↗
          </Button>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        styles={{ root: { '--yarl__portal_zindex': '9999' } }}
      />
    </>
  )
}

export default Gallery