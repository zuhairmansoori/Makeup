'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import React,{useRef} from 'react'
import { Button } from '../ui/button'
gsap.registerPlugin(ScrollTrigger,SplitText)
function About() {
  const ref = useRef(null)
  useGSAP(()=>{
    const splitHeading = SplitText.create(".about-heading",{type:'chars'}) ;
    const splitPera = SplitText.create(".about-pera",{type:"words",mask:"words"});

    gsap.from(splitHeading.chars,{
      y:40,
      opacity:0,
      duration:0.5,
      stagger:0.08,
      ease:"power3.out",
      scrollTrigger:{
        trigger:ref.current,
        start:"top 85%",
        toggleActions:"play none none none"
      }
    });
      gsap.from(splitPera.words, {
    y: 30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.03,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ref.current,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
    
    return () => {
    splitHeading.revert();
    splitPera.revert();
    };

  },{scope:ref})
  return (
    <>
    <section id='about' ref={ref} className='p-10 py-20 mb-15  bg-muted '>
        <div className='flex flex-col lg:flex-row  justify-start items-start gap-15'>
          <div className='overflow-hidden lg:w-1/2  rounded-3xl'>
            <Image
            src={'/makeup-artist-about.webp'}
            alt={'makeup artist name'}
            width={500}
            height={700}
            className='w-full h-full object-cover object-center'
            />
          </div>
          <div className="w-full lg:w-1/2 pt-5">
            <p className='text-sm card inline bg-primary-foreground/10 p-3  py-1 rounded-2xl'>GET TO KNOW YOUR ARTIST</p>
             <h2 className='text-4xl mb-5 mt-10 about-heading font-bold'>Meet <strong>Lumiere</strong></h2>
             <p className='text-card-foreground about-pera text-xl '>For me, makeup is more than just a look — it&rsquo;s a way to celebrate your individuality. My approach is all about enhancing your natural features and creating a look that makes you feel confident, radiant and beautifully yourself.</p>
             <p className='text-card-foreground about-pera text-xl '>With a passion for beauty and an eye for detail, I believe every face tells a unique story. From soft, natural glam to timeless bridal elegance, my goal is to create looks that feel authentic to you and make every special moment unforgettable.</p>
               <p className='text-card-foreground about-pera text-xl '>I focus on understanding your personal style, choosing the right tones and perfecting every detail to bring your vision to life.</p>
               <h3 className='text-2xl font-bold about-heading my-2'>My Philosophy</h3>
                 <p className='text-card-foreground about-pera text-xl '>Every client is different, and so is every look I create. I believe the best makeup doesn&apos;t hide who you are — it highlights what makes you unique.</p>
             <Button variant='secondary' className={'mt-10 animate-btn'}>Discover My Story ↗</Button>
          </div>
        </div>
    </section>
    </>
  )
}

export default About