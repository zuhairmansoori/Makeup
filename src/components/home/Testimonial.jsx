'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Mobile pe address bar hide/show hone se refresh na ho
ScrollTrigger.config({ ignoreMobileResize: true })

const cards = [
  {
    id: 1,
    name: 'Charlotte Mitchell',
    service: 'Bridal Makeup',
    rating: 5,
    heading: 'I Felt Like a Princess',
    review:
      'The makeup was soft, elegant and absolutely perfect for my wedding day. Every detail felt thoughtful, and I felt beautiful and confident throughout the celebration.',
  },
  {
    id: 2,
    name: 'Olivia Bennett',
    service: 'Wedding Makeup',
    rating: 5,
    heading: 'Pure Elegance, Perfectly Done',
    review:
      'My makeup looked flawless both in person and in photographs. The entire experience was relaxing, personal and everything I had hoped for.',
  },
  {
    id: 3,
    name: 'Amelia Clarke',
    service: 'Soft Glam',
    rating: 5,
    heading: 'Natural Beauty at Its Best',
    review:
      'I wanted something natural but special, and the result was exactly right. My skin looked radiant, and the makeup enhanced my features beautifully.',
  },
  {
    id: 4,
    name: 'Sophia Williams',
    service: 'Bridal Makeup',
    rating: 5,
    heading: 'She Understood My Vision',
    review:
      'From the consultation to the final touches, I felt listened to. The look suited my features perfectly and made my special day even more memorable.',
  },
  {
    id: 5,
    name: 'Isabella Thompson',
    service: 'Editorial Makeup',
    rating: 5,
    heading: 'Every Detail Was Beautiful',
    review:
      'The colours complemented my skin perfectly, and the finish was polished without looking overdone. I loved the attention given to every little detail.',
  },
  {
    id: 6,
    name: 'Grace Anderson',
    service: 'Bridesmaid Makeup',
    rating: 5,
    heading: 'Confidence in Every Look',
    review:
      'My makeup looked elegant and photographed beautifully. It enhanced my natural features while feeling lightweight and comfortable throughout the event.',
  },
  {
    id: 7,
    name: 'Emily Roberts',
    service: 'Soft Glam',
    rating: 5,
    heading: 'A Glow That Felt Like Me',
    review:
      'The finish was fresh, glowing and exactly the style I wanted. I received so many compliments, and I loved how effortlessly beautiful everything looked.',
  },
  {
    id: 8,
    name: 'Lily Harrison',
    service: 'Party Makeup',
    rating: 5,
    heading: 'Glamorous Without Going Overboard',
    review:
      'The look was sophisticated and beautiful without feeling heavy. The colours worked perfectly together, creating a polished finish that suited the occasion.',
  },
  {
    id: 9,
    name: 'Mia Walker',
    service: 'Bridal Makeup',
    rating: 5,
    heading: 'My Dream Bridal Look',
    review:
      'I was nervous about choosing my bridal makeup, but the consultation made everything easier. The final look was timeless, flattering and beautifully finished.',
  },
  {
    id: 10,
    name: 'Ella Foster',
    service: 'Natural Glam',
    rating: 5,
    heading: 'Still Me, Just More Radiant',
    review:
      'I wanted to look like myself, just a little more polished. The result was fresh, luminous and flattering, with every feature beautifully enhanced.',
  },
]

function Testimonial() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.to('.review-card', {
        // function-based: har refresh pe dobara calculate hoga
        y: () => -(ref.current.offsetHeight + 900),
        opacity: 1,
        stagger: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: () => '+=' + 5000,
          pin: true,
          pinSpacing: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true, // y/end dobara calculate karega
          markers: false, // debugging ke time true kar lena
        },
      })

      // ---------- Refresh strategy ----------
      let refreshTimer
      const safeRefresh = () => {
        clearTimeout(refreshTimer)
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 100)
      }

      // 1) Saari images / assets load hone ke baad
      if (document.readyState === 'complete') {
        safeRefresh()
      } else {
        window.addEventListener('load', safeRefresh)
      }

      // 2) Fonts load hone ke baad (text height change hoti hai)
      if (document.fonts?.ready) {
        document.fonts.ready.then(safeRefresh)
      }

      // 3) Page ki height kisi bhi wajah se badle (lazy images, other sections)
      let lastHeight = document.body.scrollHeight
      const ro = new ResizeObserver(() => {
        const h = document.body.scrollHeight
        if (h !== lastHeight) {
          lastHeight = h
          safeRefresh()
        }
      })
      ro.observe(document.body)

      // Cleanup
      return () => {
        clearTimeout(refreshTimer)
        window.removeEventListener('load', safeRefresh)
        ro.disconnect()
      }
    },
    { scope: ref }
  )

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative h-screen overflow-hidden bg-[url('/reviewmobile.webp')] bg-cover bg-no-repeat px-10 pt-20 lg:bg-[url('/reviewdesk.webp')]"
    >
      <div className="absolute top-25 flex flex-col items-center justify-center sm:top-30 sm:left-[20%] lg:top-[40%] lg:left-10 lg:items-start lg:justify-start">
        <p className="inline rounded-2xl bg-primary-foreground/10 p-3 py-1 text-center text-[10px] sm:text-sm">
          THE LUMIÈRE EXPERIENCE
        </p>
        <h2 className="animate-heading mt-2 mb-3 text-2xl text-primary-foreground sm:mt-10 sm:text-3xl lg:text-5xl">
          Beauty, in every detail.
        </h2>
        <p className="animate-pera text-sm text-card-foreground sm:text-xl md:text-2xl">
          Personalised artistry. Timeless elegance. Your moment.
        </p>
      </div>

      <div className="relative flex h-full w-full flex-wrap items-center justify-around gap-30">
        {cards.map((crd, i) => (
          <div
            key={crd.id}
            className={`review-card absolute -bottom-100 w-70 rounded-2xl p-10 hover:scale-115 ${
              i % 2 === 0
                ? 'right-[10%] bg-secondary text-secondary-foreground'
                : i % 3 === 0
                ? 'left-[10%] bg-gray-900 text-muted'
                : 'left-1/2 -translate-x-1/2 bg-muted'
            }`}
          >
            <div className="pb-2 text-sm">{'⭐'.repeat(crd.rating)}</div>
            <h3>{crd.review}</h3>
            <div className="my-2 h-px w-2/3 bg-yellow-300"></div>
            <div className="flex items-center justify-start gap-1 pt-2">
              <Image
                src="/party3.webp"
                alt={crd.name}
                width={50}
                height={50}
                className="h-10 w-10 rounded-[5px]"
              />
              <div>
                <h4>{crd.name}</h4>
                <h5 className="text-[10px]">{crd.service}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial