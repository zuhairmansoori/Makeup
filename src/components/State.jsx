'use client'
import React from 'react'
import CountUp from 'react-countup'

function State() {
  return (
    <>
    <section className='bg-foreground p-10 text-primary'>
        <div className='grid gap-10 grid-cols-2 lg:grid-cols-4 justify-between items-center justify-items-center'>
            <div >
        <h2 className='text-2xl sm:text-4xl lg:text-6xl'>
          <CountUp end={15} duration={2.5} enableScrollSpy
  scrollSpyOnce
  scrollSpyDelay={200} />+
        </h2>
        <p className='text-sm md:text-3xl'>Year Experience</p>
      </div>

      <div>
        <h2 className='text-2xl sm:text-4xl lg:text-6xl'>
          <CountUp end={2500} duration={2.5} enableScrollSpy
  scrollSpyOnce
  scrollSpyDelay={200} />+
        </h2>
        <p className='text-sm md:text-3xl'>Makeup Looks</p>
      </div>

      <div>
        <h2 className='text-2xl sm:text-4xl lg:text-6xl'>
          <CountUp end={5300} duration={2.5} enableScrollSpy
  scrollSpyOnce
  scrollSpyDelay={200}/>+
        </h2>
        <p className='text-sm md:text-3xl'>Happy Clients</p>
      </div>
      <div>
        <h2 className='text-2xl sm:text-4xl lg:text-6xl'>
            <CountUp end={1200} duration={2.5} enableScrollSpy
  scrollSpyOnce
  scrollSpyDelay={200}/>+
            
        </h2>
        <p className='text-sm md:text-3xl'>Bridal Makeup</p>
      </div>
        </div>
    </section>
    </>
  )
}

export default State