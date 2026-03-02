import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Milyen típusú klímaberendezéseket kínálnak?",
    answer: "A Casario széles választékban kínál klímaberendezéseket, beleértve a split rendszereket, a hordozható egységeket és a légcsatornás rendszereket, így minden lakossági és üzleti igényt kielégít."
  },
  {
    question: "Biztosítanak telepítési szolgáltatást?",
    answer: "Igen, a Casario professzionális telepítési szolgáltatást kínál minden webshopunkon vásárolt klímaberendezéshez, garantálva azok optimális teljesítményét és hatékonyságát."
  },
  {
    question: "Jár garancia a klímaberendezésekhez?",
    answer: "Minden, a Casario által értékesített klímaberendezéshez gyártói garancia jár, amely biztonságot és megbízható támogatást nyújt vásárlása során."
  },
  {
    question: "Szállítanak országszerte?",
    answer: "Igen, a Casario Magyarország teljes területén biztosít szállítást, így minden vásárló gyorsan és hatékonyan kapja meg klímaberendezését."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Kérdések
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Válaszok a leggyakrabban felmerülő kérdésekre
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
