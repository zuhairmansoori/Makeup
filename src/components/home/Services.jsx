'use client'
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import {useRef} from 'react'
import { Button } from '../ui/button'
gsap.registerPlugin(ScrollTrigger)

function Services() {
    const contain = useRef(null)
 useGSAP(() => {
  const elements = gsap.utils.toArray(
    ".animate-heading, .animate-pera, .animate-btn,.animate-img",contain.current
  );

  gsap.set(elements, {
    y: 100,
    opacity: 0,
  });

  ScrollTrigger.batch(elements, {
    start: "top 90%",
    
    onEnter: (elements) => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        overwrite: "auto",
        
      });
    },
  });
}, { scope: contain });
    return (
        <>
            <section ref={contain} className='bg-muted rounded-t-2xl overflow-hidden '>
                <div className='text-center py-10'>
                    <p className='text-sm animate-pera inline bg-primary-foreground/10 p-3  py-1 rounded-2xl'>OUR SERVICES</p>
                    <h2 className='text-primary-foreground animate-heading text-2xl sm:text-3xl mt-10 mb-3 lg:text-5xl'>The Art of Beauty</h2>
                    <p className='text-card-foreground animate-pera text-sm sm:text-xl  md:text-2xl '>Thoughtfully created for your most special moments.</p>

                </div>
                <div>
                    <div>
                        <p className='text-sm text-amber-800 p-5'>01 — FEATURED SERVICE</p>
                        <div className='flex justify-center items-center animate-img  w-full px-10 h-150 overflow-hidden'>
                            <Image
                                alt='bridal'
                                src={'/bridal.webp'}
                                width={600}
                                height={500}
                                priority
                                className='rounded-2xl w-full h-full object-cover object-[70%] md:object-right'
                            />
                        </div>
                        <div id='bridal' className='px-15 py-5'>
                            <h2 className='text-4xl mb-5 animate-heading font-bold'>Bridal Makeup</h2>
                            <div className='flex flex-col animate-pera justify-center text-xl items-start gap-3'>
                                <p>For the moments you&apos;ll remember forever.</p>
                                <p className='text-card-foreground'>Bespoke bridal makeup designed to complement your features, personal style and wedding vision. From soft, romantic elegance to timeless glamour, every detail is thoughtfully considered for your special day.</p>
                            </div>
                        </div>
                        <Button className={'mx-15 mb-20 animate-btn'} variant='secondary'>Discover Bridal Makeup ↗</Button>
                    </div>
                    <div className='h-px bg-primary-foreground mt-5 mx-10'></div>
                    <div className='flex flex-col  sm:flex-row justify-start  p-15'>
                        <div className='w-full sm:w-1/2 lg:max-w-120 md:max-h-120  animate-img rounded-2xl overflow-hidden'>
                            <Image
                                alt='Engagement'
                                src='/engagement1.webp'
                                width={500}
                                height={500}
                                className='w-full h-full object-cover object-top'
                            />
                        </div>
                        <div id='engagement' className='w-full sm:w-1/2 lg:max-w-4xl sm:px-3 lg:px-20'>
                            <p className='text-sm text-amber-800 p-5 pl-1'>02 — ENGAGEMENT</p>
                            <h2 className='text-4xl mb-5 animate-heading font-bold'>Engagement Makeup</h2>
                            <div className='flex flex-col animate-pera justify-center text-xl items-start gap-3'>
                                <p>Every detail, beautifully you.</p>
                                <p className='text-card-foreground'>Celebrate your next chapter with a personalised makeup look that feels effortlessly elegant. Perfectly balanced glamour, radiant skin and refined details, created to complement your outfit and occasion.</p>
                            </div>
                            <Button className={'mt-10 animate-btn'} variant='secondary'>Explore Engagement Makeup ↗</Button>
                        </div>
                    </div>
                    <div className='h-px bg-primary-foreground mt-5 mx-10'></div>
                    <div className='flex flex-col sm:flex-row-reverse justify-between  p-15'>
                        <div className='w-full sm:w-1/2 lg:max-w-120 max-h-120 animate-img rounded-2xl overflow-hidden'>
                            <Image
                                alt='Engagement'
                                src='/occasion-makeup1.webp'
                                width={500}
                                height={500}
                                className='w-full h-full object-cover object-top'
                            />
                        </div>
                        <div id='occasion' className='w-full sm:w-1/2 lg:max-w-4xl lg:pr-30'>
                            <p className='text-sm text-amber-800 p-5 pl-1'>03 — SPECIAL OCCASIONS</p>
                            <h2 className='text-4xl mb-5 animate-heading font-bold'>Occasion Makeup</h2>
                            <div className='flex flex-col animate-pera justify-center text-xl items-start gap-3'>
                                <p>Made for your moment.</p>
                                <p className='text-card-foreground'>From elegant celebrations to glamorous evenings, enjoy a look tailored to your personal style. Whether you prefer understated sophistication or a bold statement, your makeup should feel uniquely yours.</p>
                            </div>
                            <Button className={'mt-10 animate-btn'} variant='secondary'>Explore Occasion Makeup ↗</Button>
                        </div>
                    </div>
                   
                     <div className='h-px bg-primary-foreground mt-5 mx-10'></div>
                    <div className='flex flex-col sm:flex-row justify-start  p-15'>
                        <div className='w-full sm:w-1/2 max-w-120 max-h-120 animate-img rounded-2xl overflow-hidden'>
                            <Image
                                alt='Engagement'
                                src='/glam.webp'
                                width={500}
                                height={500}
                                className='w-full h-full object-cover object-top'
                            />
                        </div>
                        <div id='editorial' className='w-full sm:w-1/2 max-w-4xl sm:px-3 lg:px-20'>
                            <p className='text-sm text-amber-800 p-5 pl-1'>04 — EDITORIAL & GLAM</p>
                            <h2 className='text-4xl animate-heading mb-5 font-bold'>Make a statement.</h2>
                            <div className='flex flex-col animate-pera justify-center text-xl items-start gap-3'>
                                <p>Every detail, beautifully you.</p>
                                <p className='text-card-foreground'>Creative, high-impact makeup for professional photoshoots, fashion content and glamorous events. From bold statement looks to sophisticated editorial beauty, every look is designed to make an impression.</p>
                            </div>
                            <Button className={'mt-10 animate-btn'} variant='secondary'>EXPLORE EDITORIAL & GLAM ↗</Button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services
