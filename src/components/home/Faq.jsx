import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
    const aboutFaqs=[
  {
    "question": "What makeup services do you offer?",
    "answer": "We offer a range of professional makeup services, including bridal makeup, party makeup, special occasion makeup, editorial looks, and photoshoot makeup, tailored to your individual style."
  },
  {
    "question": "Do you offer bridal makeup packages?",
    "answer": "Yes, we offer personalised bridal makeup packages designed to help you look and feel your best on your wedding day. Packages can be tailored to include bridal trials and makeup for your bridal party."
  },
  {
    "question": "How can I book a makeup appointment?",
    "answer": "Booking is simple! Get in touch through our contact form, Instagram, or WhatsApp to discuss your requirements, check availability, and secure your appointment."
  },
  {
    "question": "How far in advance should I book my bridal makeup?",
    "answer": "We recommend booking your bridal makeup as early as possible, ideally 6–12 months before your wedding, especially for peak wedding dates. Last-minute bookings may also be available subject to availability."
  },
  {
    "question": "Do you offer makeup trials before the wedding?",
    "answer": "Yes, bridal makeup trials help us understand your preferences, skin type, and desired look before your big day, ensuring a personalised and stress-free experience."
  },
  {
    "question": "Do you travel to the client's location?",
    "answer": "On-location makeup services may be available across London and surrounding areas. Travel availability and any additional charges can be discussed when booking."
  },
  {
    "question": "How long does a makeup appointment take?",
    "answer": "A standard makeup appointment usually takes around 45–90 minutes, depending on the look and services required. Bridal appointments may take longer to ensure every detail is perfect."
  },
  {
    "question": "Can I request a natural or glam makeup look?",
    "answer": "Absolutely! Whether you prefer soft, natural makeup, timeless bridal elegance, or full glam, your look will be customised to complement your features, outfit, and personal style."
  },
  {
    "question": "What should I do to prepare for my makeup appointment?",
    "answer": "Arrive with clean skin and follow your usual skincare routine. Avoid trying new skincare products immediately before your appointment, and bring any inspiration photos or details about your outfit."
  },
  {
    "question": "What is your cancellation and rescheduling policy?",
    "answer": "Cancellation and rescheduling terms depend on your booking and deposit arrangements. Please review the booking terms or contact us directly for assistance with changing your appointment."
  }
]
  return (
     <section className="py-10 bg-muted">
            <div className="container mx-auto max-w-6xl px-4">
           
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl text-secondary font-bold">

                            Frequently Asked Questions
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Find answers to common questions about our travel services.
                        </p>
                    </div>
               


                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4 "
                >
                    {aboutFaqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-2xl border px-6 hover:shadow-md hover:shadow-secondary
hover:border-primary/80
transition-all duration-300"
                        >
                            <AccordionTrigger>
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
  )
}

export default Faq