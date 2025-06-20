
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is medical tourism and why choose Turkey?",
      answer: "Medical tourism involves traveling to another country for medical treatment. Turkey offers world-class healthcare at significantly lower costs, with JCI-accredited hospitals and internationally trained doctors."
    },
    {
      question: "How much can I save on medical treatments in Turkey?",
      answer: "Patients typically save 50-70% compared to Western countries while receiving the same quality of care. This includes dental work, cosmetic surgery, and other medical procedures."
    },
    {
      question: "Are Turkish hospitals and doctors qualified?",
      answer: "Yes, our partner hospitals are JCI-accredited and our doctors are internationally trained with certifications from Europe and the US. Many speak English fluently."
    },
    {
      question: "What's included in your tour packages?",
      answer: "Our packages typically include medical treatment, accommodation, airport transfers, local transportation, cultural tours, and 24/7 support throughout your stay."
    },
    {
      question: "How do I get started with planning my medical tourism trip?",
      answer: "Contact us for a free consultation. We'll review your medical needs, provide cost estimates, and create a personalized treatment and travel plan."
    },
    {
      question: "What languages do you support?",
      answer: "We provide services in English, Arabic, German, French, and Turkish. Our team includes translators and multilingual staff to assist international patients."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">Find answers to common questions about our medical tourism and travel services.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;