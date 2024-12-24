import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quelles sont les conditions pour effectuer le Hajj ?",
      answer: "Pour effectuer le Hajj, il faut être musulman, majeur, sain d'esprit et avoir les moyens financiers nécessaires. Un visa spécial est également requis.",
    },
    {
      question: "Quelle est la différence entre le Hajj et la Omra ?",
      answer: "Le Hajj est le pèlerinage majeur qui se déroule à des dates précises du calendrier islamique, tandis que la Omra peut être effectuée à tout moment de l'année.",
    },
    {
      question: "Comment se déroule la préparation au voyage ?",
      answer: "Nous organisons des séances de préparation spirituelle et pratique, nous nous occupons de toutes les formalités administratives et nous fournissons un guide complet.",
    },
    {
      question: "Quels sont les documents nécessaires ?",
      answer: "Un passeport valide, des photos d'identité, un certificat de vaccination, et une attestation de mariage pour les femmes voyageant avec leur mari sont requis.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display text-center text-primary mb-12">
          Questions Fréquentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
              <AccordionTrigger className="text-left font-semibold text-gray-700 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;