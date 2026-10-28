'use client'
import React,{createContext,useContext,useState} from 'react'
import BookingForm from './BookingForm'



const BookingContext = createContext(null)

function BookingProvider({children}){
   const [isOpen, setIsOpen] =useState(false)
   const openBooking = () => setIsOpen(true)
  const closeBooking = () => setIsOpen(false)
  return(
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {isOpen && <BookingForm onClose={closeBooking} />}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)

  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }

  return context
}
export default BookingProvider