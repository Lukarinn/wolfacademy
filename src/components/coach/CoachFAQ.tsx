import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'O coaching tem acompanhamento prático?',
    answer: 'Sim! Oferecemos acompanhamento em tempo real durante suas partidas, revisão de gameplay e sessões práticas para aplicar os conceitos aprendidos.',
  },
  {
    question: 'Vocês possuem campeonatos?',
    answer: 'Sim, organizamos campeonatos internos exclusivos para nossos alunos, proporcionando experiência competitiva em um ambiente controlado.',
  },
  {
    question: 'A comunidade de alunos é ativa?',
    answer: 'Nossa comunidade no Discord é muito ativa! Temos grupos de estudo, discussões sobre meta, análises de partidas e muito networking entre os alunos.',
  },
  {
    question: 'Sou iniciante, o coaching pode me ajudar?',
    answer: 'Absolutamente! Nosso método foi desenvolvido para atender jogadores de todos os níveis. Se você é iniciante, vamos construir uma base sólida de fundamentos que irá acelerar sua evolução no jogo.',
  },
];

const CoachFAQ = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">PERGUNTAS FREQUENTES</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-[#E340E2] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachFAQ;
