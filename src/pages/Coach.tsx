import { Helmet } from 'react-helmet-async';
import CoachNavbar from '@/components/coach/CoachNavbar';
import CoachHero from '@/components/coach/CoachHero';
import CoachMarquee from '@/components/coach/CoachMarquee';
import CoachMethod from '@/components/coach/CoachMethod';
import CoachLessons from '@/components/coach/CoachLessons';
import CoachCalculator from '@/components/coach/CoachCalculator';
import CoachPlans from '@/components/coach/CoachPlans';
import CoachFAQ from '@/components/coach/CoachFAQ';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O coaching de LoL tem acompanhamento prático?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Oferecemos acompanhamento em tempo real durante suas partidas, revisão de gameplay e sessões práticas para aplicar os conceitos aprendidos."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês possuem campeonatos de League of Legends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, organizamos campeonatos internos exclusivos para nossos alunos, proporcionando experiência competitiva em um ambiente controlado."
      }
    },
    {
      "@type": "Question",
      "name": "A comunidade de alunos da Wolf Academy é ativa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossa comunidade no Discord é muito ativa! Temos grupos de estudo, discussões sobre meta, análises de partidas e muito networking entre os alunos."
      }
    },
    {
      "@type": "Question",
      "name": "Sou iniciante no LoL, o coaching pode me ajudar a subir de elo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente! Nosso método foi desenvolvido para atender jogadores de todos os níveis. Se você é iniciante, vamos construir uma base sólida de fundamentos que irá acelerar sua evolução no jogo."
      }
    }
  ]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Coach Individual de League of Legends - Wolf Academy",
  "description": "Acompanhamento individual personalizado para subir de elo no LoL. Coaches experientes com método exclusivo.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Wolf Academy",
    "url": "https://www.wolfacademy.shop"
  },
  "serviceType": "Coaching de Games",
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "BRL",
    "lowPrice": "30",
    "offerCount": "2"
  }
};

const Coach = () => {
  return (
    <>
      <Helmet>
        <title>Coach Individual LoL | Wolf Academy - Subir de Elo com Acompanhamento</title>
        <meta name="description" content="🎮 Coach individual de League of Legends com acompanhamento personalizado. Método exclusivo para subir de elo rápido. Revisão de partidas, treino de mecânicas e suporte dedicado." />
        <meta name="robots" content="noindex, follow" />
        <meta name="keywords" content="coach lol individual, aulas particulares lol, coaching league of legends, como subir de elo lol, subir de elo rápido, treino lol, acompanhamento lol, melhorar no lol, coach profissional lol" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coach Individual LoL | Wolf Academy - Subir de Elo com Acompanhamento" />
        <meta property="og:description" content="🎮 Coach individual de LoL. Suba de elo com acompanhamento personalizado, revisão de gameplay e coaches experientes." />
        <meta property="og:url" content="https://www.wolfacademy.shop/coach" />
        <meta property="og:site_name" content="Wolf Academy" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/QIxNfZ749RfYFzFbwNPgvohLwVt1/social-images/social-1767920937410-Camada 2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WolfAcademy" />
        <meta name="twitter:title" content="Coach Individual LoL | Wolf Academy - Subir de Elo" />
        <meta name="twitter:description" content="🎮 Coach individual de League of Legends. Suba de elo com método exclusivo e acompanhamento personalizado." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/QIxNfZ749RfYFzFbwNPgvohLwVt1/social-images/social-1767920937410-Camada 2.png" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <CoachNavbar />
        <CoachHero />
        <CoachMarquee />
        <CoachMethod />
        <CoachLessons />
        <CoachCalculator />
        <CoachPlans />
        <CoachFAQ />
      </div>
    </>
  );
};

export default Coach;
