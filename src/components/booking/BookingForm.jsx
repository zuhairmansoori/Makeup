'use client'
import React,{useState} from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { X } from 'lucide-react'
import { Button } from '../ui/button'
import { useBooking } from './BookingContext'

const today = new Date().toISOString().split("T")[0];

function BookingForm() {
  const [form ,setForm]=useState({
    name:'',
    email:'',
    phone:'',
    service:'',
    date:'',
    location:"",
    msg:''
  })
  const handelChnage = (e)=>{
    const  {value,name} = e.target
    setForm((oldValue)=>({...oldValue,[name]:value}))
  }
  const items = [
    { label: "Select a service", value: null },
    { label: "Bridal Makeup", value: "bridal-makeup" },
    { label: "Party & Occasion Makeup", value: "party-occasion-makeup" },
    { label: "Engagement Makeup", value: "engagement-makeup" },
    { label: "Soft Glam Makeup", value: "soft-glam-makeup" },
    { label: "Editorial Makeup", value: "editorial-makeup" },
    { label: "Makeup Lessons", value: "makeup-lessons" },
  ]
const {closeBooking} = useBooking()
  
  return (
    <>
      <section className=' flex justify-center items-start sm:items-center bg-black/20 fixed top-0 z-50 inset-0 overflow-auto p-5 '>
        <div className='relative bg-muted w-full lg:max-w-2xl p-10 rounded-3xl flex flex-col justify-center  gap-5'>
          <div className='flex justify-between items-center'>
            <div>
                <p className='text-[10px] sm:text-sm'>LUMIÈRE BEAUTY STUDIO</p>
            <h2 className='text-xl sm:text-2xl'>Let&apos;s create your look.</h2>
            <p>Tell us a little about your special occasion</p>
            </div>
            <div onClick={closeBooking} className='absolute top-3 right-3 bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground duration-450 transition-all p-1 sm:p-2 rounded-full'>
              <X className='size-3 ' />
            </div>
           
          </div>
          <div className='h-px bg-primary-foreground'></div>
          <form action="">
            <div className='grid  items-center gap-4'>

              <div className='grid gap-3'>
                <Label htmlFor={'name'}>Your Full Name</Label>
                <Input id={'name'} className={'bg-primary'}
                 placeholder={'Enter your name'} 
                 type={'text'} 
                 onChange={handelChnage}
                  value={form.name}
                   name={'name'} 
                   required={true} />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='grid gap-3'>
                  <Label htmlFor={'address'}>Email Address</Label>
                  <Input id={'address'} className={'bg-primary'}
                  placeholder={'Address'}
                   type={'text'} 
                   onChange={handelChnage}
                   value={form.address}
                   name={'address'}
                   required={true} />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor={'number'}>Phone Number</Label>
                  <Input id={'number'} className={'bg-primary'}
                   placeholder={'+44'}
                   onChange={handelChnage}
                   value={form.number}
                   name={'number'}
                    type={'number'}
                     required={true} />
                </div>
              </div>
              <div className='grid gap-3 w-full'>
                <Label>What are you booking?</Label>
                <Select onValueChange={(value)=>setForm((prev)=>({...prev,service:value}))} items={items}                >
                  <SelectTrigger id={'service'} className="w-full max-w-full bg-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>What are you booking?</SelectLabel>
                      {items.map((item) => (
                        <SelectItem key={item.value} value={item.value} >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>

                </Select>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='grid gap-3'>
                  <Label htmlFor='Event Date'>Event Date</Label>
                  <Input className={'bg-primary'}
                   onChange={handelChnage}
                   type={'date'}
                    min={today}
                    id={'date'}
                     name={'date'}
                      required={true} 
                      value={form.date} />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='location'>Event Location</Label>
                  <Input className={'bg-primary'}
                  type={'text'}
                  id='location'
                  name='location'
                  placeholder={'address'}
                  onChange={handelChnage}
                  value={form.location}
                  required={true} />
                </div>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='msg' >Tell us about your vision</Label>
                <Textarea  placeholder="Share your preferred look or any special requests..." 
                id='msg'
                name='msg'
                onChange={handelChnage}
                value={form.msg}
                required={true}
                className={'resize-none bg-primary'}
                />
              </div>
            </div>
          </form>
          <div className='flex flex-col justify-center items-center gap-3'>
            <Button className={'sm:text-xl py-5 px-5'} variant='secondary' >Send Booking</Button>
            <p className='text-sm text-center'>We&apos;ll be in touch to discuss your requirements.</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default BookingForm