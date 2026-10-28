'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React,{useRef} from 'react'
import client from 'react-dom/client'

function Testimonial() {
  const ref = useRef(null)
  useGSAP(()=>{
    ScrollTrigger.batch('.review-card',{
        
    })
    gsap.to('.review-card',{
      y:-2000,
      opacity:1,
      stagger:0.3,
      ease:"none",
      scrollTrigger:{
        trigger:ref.current,
        start:"top top",
        end:"+=5000",
        pin:true,
        scrub:4,
        invalidateOnRefresh: true,

      }
    })
  },{scope:ref})
  const card = [
  {
    "id": 1,
    "name": "Charlotte Mitchell",
    "service": "Bridal Makeup",
    "rating": 5,
    "heading": "I Felt Like a Princess",
    "review": "The makeup was soft, elegant and absolutely perfect for my wedding day. Every detail felt thoughtful, and I felt beautiful and confident throughout the celebration."
  },
  {
    "id": 2,
    "name": "Olivia Bennett",
    "service": "Wedding Makeup",
    "rating": 5,
    "heading": "Pure Elegance, Perfectly Done",
    "review": "My makeup looked flawless both in person and in photographs. The entire experience was relaxing, personal and everything I had hoped for."
  },
  {
    "id": 3,
    "name": "Amelia Clarke",
    "service": "Soft Glam",
    "rating": 5,
    "heading": "Natural Beauty at Its Best",
    "review": "I wanted something natural but special, and the result was exactly right. My skin looked radiant, and the makeup enhanced my features beautifully."
  },
  {
    "id": 4,
    "name": "Sophia Williams",
    "service": "Bridal Makeup",
    "rating": 5,
    "heading": "She Understood My Vision",
    "review": "From the consultation to the final touches, I felt listened to. The look suited my features perfectly and made my special day even more memorable."
  },
  {
    "id": 5,
    "name": "Isabella Thompson",
    "service": "Editorial Makeup",
    "rating": 5,
    "heading": "Every Detail Was Beautiful",
    "review": "The colours complemented my skin perfectly, and the finish was polished without looking overdone. I loved the attention given to every little detail."
  },
  {
    "id": 6,
    "name": "Grace Anderson",
    "service": "Bridesmaid Makeup",
    "rating": 5,
    "heading": "Confidence in Every Look",
    "review": "My makeup looked elegant and photographed beautifully. It enhanced my natural features while feeling lightweight and comfortable throughout the event."
  },
  {
    "id": 7,
    "name": "Emily Roberts",
    "service": "Soft Glam",
    "rating": 5,
    "heading": "A Glow That Felt Like Me",
    "review": "The finish was fresh, glowing and exactly the style I wanted. I received so many compliments, and I loved how effortlessly beautiful everything looked."
  },
  {
    "id": 8,
    "name": "Lily Harrison",
    "service": "Party Makeup",
    "rating": 5,
    "heading": "Glamorous Without Going Overboard",
    "review": "The look was sophisticated and beautiful without feeling heavy. The colours worked perfectly together, creating a polished finish that suited the occasion."
  },
  {
    "id": 9,
    "name": "Mia Walker",
    "service": "Bridal Makeup",
    "rating": 5,
    "heading": "My Dream Bridal Look",
    "review": "I was nervous about choosing my bridal makeup, but the consultation made everything easier. The final look was timeless, flattering and beautifully finished."
  },
  {
    "id": 10,
    "name": "Ella Foster",
    "service": "Natural Glam",
    "rating": 5,
    "heading": "Still Me, Just More Radiant",
    "review": "I wanted to look like myself, just a little more polished. The result was fresh, luminous and flattering, with every feature beautifully enhanced."
  },
  
]
  return (
   <>
   <section id='reviews' ref={ref} className="relative bg-[url('/reviewmobile.webp')]  lg:bg-[url('/reviewdesk.webp')] h-screen mt-15 bg-no-repeat bg-cover overflow-hidden px-10 pt-20">

     <div className ='absolute top-25  sm:top-30 sm:left-[20%] lg:top-[40%] lg:left-10 flex flex-col justify-center items-center lg:justify-start'>
      <p className='text-[10px] sm"text-sm text-center inline bg-primary-foreground/10 p-3  py-1 rounded-2xl'>THE LUMIÈRE EXPERIENCE</p>
      <h2 className='text-primary-foreground animate-heading text-2xl sm:text-3xl mt-2 sm:mt-10 mb-3 lg:text-5xl'>Beauty, in every detail.</h2>
      <p className='text-card-foreground animate-pera text-sm sm:text-xl  md:text-2xl '>Personalised artistry. Timeless elegance. Your moment.</p>
     </div>
     <div className='relative h-full w-full flex flex-wrap  justify-around  items-center gap-30'>
      {card.map((crd,i)=>(
              <div  key={crd.id}
        className={`absolute -bottom-100 review-card  hover:scale-115 ${
        i%2===0 ? 'bg-secondary right-[10%]  text-secondary-foreground' :
         i%3===0 ? 'bg-gray-900 left-[10%]  - text-muted' : 
         "bg-muted left-w/2 "} 
            w-70  rounded-2xl p-10`} >
               <div className='text-sm pb-2'>{'⭐'.repeat(crd.rating)}</div>
               <h3>
                {crd.review}
               </h3> 
               <div className='w-2/3 h-px my-2  bg-yellow-300'></div>
               <div className='pt-2 flex justify-start items-center gap-1'>
                <Image
                src='/party3.webp'
                alt={crd.name}
                width={50}
                height={50}
                className='rounded-[5px] w-10 h-10'       
                />
                <div>
                   <h4>{crd.name}</h4>
                   <h5 className='text-[10px]'>{crd.service}</h5>
                </div>            
               </div>
        </div>
      ))}
     </div>
   </section>
   </>
  )
}

export default Testimonial