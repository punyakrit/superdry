import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
function Accordian() {
    const accordionData = [
        {
          id: 1,
          question: "Why choose SuperDry for laundry delivery?",
          answer: "SuperDry's laundry delivery service offers unmatched convenience and quality, allowing you to schedule pickups and deliveries according to your busy schedule. Experience hassle-free laundry with SuperDry!"
        },
        {
          id: 2,
          question: "What sets SuperDry's dry cleaning service apart?",
          answer: "SuperDry's dry cleaning service utilizes state-of-the-art technology and eco-friendly practices to ensure your clothes are cleaned with care and precision. Trust SuperDry to handle your delicate garments with expertise."
        },
        {
          id: 3,
          question: "How does SuperDry ensure laundry quality?",
          answer: "At SuperDry, we employ a rigorous quality control process to ensure that your laundry is cleaned to perfection. From sorting to folding, every step is carefully monitored to maintain the highest standards."
        },
        {
          id: 4,
          question: "What laundry subscription options does SuperDry offer?",
          answer: "SuperDry offers flexible laundry subscription plans designed to fit your lifestyle and budget. Choose from weekly, bi-weekly, or monthly subscriptions and enjoy discounted rates and priority service."
        },
        {
          id: 5,
          question: "Can I track my laundry order with SuperDry?",
          answer: "Yes, SuperDry's online platform allows you to track your laundry order in real-time. Stay updated on the status of your laundry and know exactly when to expect your freshly cleaned clothes!"
        },
        {
          id: 6,
          question: "Does SuperDry offer eco-friendly laundry solutions?",
          answer: "Absolutely! SuperDry is committed to sustainability and offers eco-friendly laundry solutions. Our processes minimize environmental impact while delivering exceptional cleaning results."
        },
        {
          id: 7,
          question: "What is SuperDry's approach to laundry care?",
          answer: "SuperDry's approach to laundry care is centered around attention to detail and customer satisfaction. We treat each garment with the utmost care, ensuring they are returned to you in pristine condition."
        },
        {
          id: 8,
          question: "How can I contact SuperDry for laundry inquiries?",
          answer: "Getting in touch with SuperDry for laundry inquiries is easy! Simply visit our website or give us a call, and our friendly team will be happy to assist you with any questions or concerns."
        },
        {
          id: 9,
          question: "Does SuperDry offer same-day laundry services?",
          answer: "Yes, SuperDry offers same-day laundry services for your convenience. Whether you have an urgent laundry need or simply prefer a quick turnaround, SuperDry has you covered!"
        },
        {
          id: 10,
          question: "What are the benefits of choosing SuperDry for laundry?",
          answer: "Choosing SuperDry for your laundry needs means enjoying unmatched convenience, top-notch quality, and exceptional customer service. Experience the difference with SuperDry today!"
        }
      ];
      
  return (
    <div>
        <div className="xl:px-60 lg:px-40 md:px-16 my-12 px-4 w-full">
      <div className="flex justify-center text-3xl font-bold py-6">
        Frequently Asked Question
      </div>
      <Accordion type="single" collapsible>
        {accordionData.map((item) => (
          <AccordionItem className="text-xs md:text-lg" key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

      
    </div>
  )
}

export default Accordian
