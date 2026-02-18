import { Helmet } from 'react-helmet-async';
import ChampionCard from '@/components/ChampionCard';
import coachIndividualImg from '@/assets/coach-lol-subir-de-elo-acompanhamento-individual.jpg';
import cursoLoLImg from '@/assets/curso-league-of-legends-segredos-lanes-subir-elo.jpg';
import cursoGratuitoImg from '@/assets/aulas-lol-gratuitas-como-melhorar-no-lol.jpg';

const champions = [
  {
    image: coachIndividualImg,
    tag: 'Avançado',
    tagColor: '#E340E2',
    title: 'Acompanhamento Individual Personalizado',
    buttonText: 'Saber Mais',
    buttonVariant: 'primary' as const,
    link: 'https://wolfacademycoach.lovable.app/#coach-individual',
    imagePosition: 'center 20%',
    altText: 'Coach individual de League of Legends - Acompanhamento personalizado para subir de elo no LoL com coaching profissional'
  },
  {
    image: cursoLoLImg,
    tag: 'Intermediário',
    tagColor: '#E340E2',
    title: 'OS SEGREDOS de Todas as Lanes até o Mestre',
    buttonText: 'Quero Participar',
    buttonVariant: 'secondary' as const,
    link: 'https://wolfacademygg.lovable.app/',
    imagePosition: 'center 15%',
    altText: 'Curso completo de League of Legends - Aprenda os segredos de todas as lanes para subir de elo até o Mestre'
  },
  {
    image: cursoGratuitoImg,
    tag: 'Gratuito',
    tagColor: '#E340E2',
    title: 'O Que É a Wolf Academy?',
    buttonText: 'SABER MAIS',
    buttonVariant: 'accent' as const,
    link: 'https://wolfacademyaulagratis.lovable.app',
    imagePosition: 'center 30%',
    altText: 'Aulas gratuitas de LoL - Conheça a Wolf Academy e aprenda como melhorar no League of Legends'
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Wolf Academy",
  "description": "Coaching profissional de League of Legends. Método exclusivo para subir de elo rapidamente com coaches experientes.",
  "url": "https://www.wolfacademy.shop",
  "logo": "https://www.wolfacademy.shop/favicon.png",
  "sameAs": [],
  "offers": [
    {
      "@type": "Offer",
      "name": "Coach Individual de LoL",
      "category": "Coaching de Games",
      "description": "Acompanhamento individual personalizado para subir de elo no League of Legends"
    },
    {
      "@type": "Offer",
      "name": "Curso Segredos das Lanes",
      "category": "Curso de Games",
      "description": "Curso completo com os segredos de todas as lanes até o Mestre no LoL"
    },
    {
      "@type": "Offer",
      "name": "Aula Gratuita de LoL",
      "category": "Curso Gratuito",
      "description": "Aula gratuita para conhecer a Wolf Academy e aprender os fundamentos do League of Legends"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  }
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Wolf Academy | Coach de LoL - Suba de Elo Rápido</title>
        <meta name="description" content="🐺 Wolf Academy - Coaching profissional de League of Legends. Método exclusivo para subir de elo rapidamente. Coaches experientes, sigilo total e acompanhamento personalizado." />
        <link rel="canonical" href="https://www.wolfacademy.shop/" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wolf Academy | Coach de LoL - Suba de Elo Rápido" />
        <meta property="og:description" content="🐺 Coaching profissional de League of Legends. Método exclusivo para subir de elo com coaches experientes e acompanhamento personalizado." />
        <meta property="og:url" content="https://www.wolfacademy.shop/" />
        <meta property="og:site_name" content="Wolf Academy" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/QIxNfZ749RfYFzFbwNPgvohLwVt1/social-images/social-1767920937410-Camada 2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WolfAcademy" />
        <meta name="twitter:title" content="Wolf Academy | Coach de LoL - Suba de Elo Rápido" />
        <meta name="twitter:description" content="🐺 Coaching profissional de League of Legends. Método exclusivo para subir de elo rapidamente." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/QIxNfZ749RfYFzFbwNPgvohLwVt1/social-images/social-1767920937410-Camada 2.png" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      <main className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden" role="main">
        <header className="sr-only">
          <h1>Wolf Academy - Coaching Profissional de League of Legends para Subir de Elo</h1>
        </header>
        
        <section aria-label="Cursos e Coaching de LoL - Wolf Academy" className="contents">
          {champions.map((champion, index) => (
            <ChampionCard key={index} {...champion} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Index;
