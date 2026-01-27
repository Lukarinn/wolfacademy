import { Helmet } from 'react-helmet-async';
import ChampionCard from '@/components/ChampionCard';
import coachIndividualImg from '@/assets/coach-individual-lol-league-of-legends.jpg';
import cursoLoLImg from '@/assets/curso-lol-segredos-lanes-mestre.jpg';
import cursoGratuitoImg from '@/assets/curso-lol-gratuito.jpg';

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
    altText: 'Coach individual de League of Legends - Acompanhamento personalizado para subir de elo'
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
    altText: 'Curso completo de League of Legends - Aprenda os segredos de todas as lanes até o Mestre'
  },
  {
    image: cursoGratuitoImg,
    tag: 'Gratuito',
    tagColor: '#E340E2',
    title: 'Conteúdo Gratuito de LoL',
    buttonText: 'EM BREVE',
    buttonVariant: 'accent' as const,
    link: '#',
    imagePosition: 'center 30%',
    grayscale: true,
    disabled: true,
    altText: 'Conteúdo gratuito de League of Legends - Dicas e estratégias grátis - Em breve'
  }
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Wolf Academy | Coach de LoL - Suba de Elo Rápido</title>
        <meta name="description" content="🐺 Wolf Academy - Coaching profissional de League of Legends. Método exclusivo para subir de elo rapidamente. Coaches experientes, sigilo total e acompanhamento personalizado." />
        <link rel="canonical" href="https://wolfacademy.lovable.app/" />
        <meta property="og:title" content="Wolf Academy | Coach de LoL - Suba de Elo Rápido" />
        <meta property="og:description" content="🐺 Coaching profissional de League of Legends. Método exclusivo para subir de elo." />
        <meta property="og:url" content="https://wolfacademy.lovable.app/" />
      </Helmet>
      
      <main className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden" role="main">
        <header className="sr-only">
          <h1>Wolf Academy - Coaching Profissional de League of Legends</h1>
        </header>
        
        <section aria-label="Nossos Cursos e Serviços" className="contents">
          {champions.map((champion, index) => (
            <ChampionCard key={index} {...champion} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Index;
