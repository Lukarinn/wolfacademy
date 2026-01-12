import ChampionCard from '@/components/ChampionCard';
import champion1 from '@/assets/champion-1.jpg';
import champion2 from '@/assets/champion-2.jpg';
import champion3 from '@/assets/champion-3.jpg';

const champions = [
  {
    image: champion1,
    tag: 'Avançado',
    tagColor: '#E340E2',
    title: 'Acompanhamento Individual Personalizado',
    buttonText: 'Saber Mais',
    buttonVariant: 'primary' as const,
    link: '/coach',
    imagePosition: 'center 20%'
  },
  {
    image: champion2,
    tag: 'Intermediário',
    tagColor: '#E340E2',
    title: 'O Segredo de Todas as Lanes até o Mestre',
    buttonText: 'Quero Participar',
    buttonVariant: 'secondary' as const,
    link: 'https://wolfacademygg.lovable.app/',
    imagePosition: 'center 15%'
  },
  {
    image: champion3,
    tag: 'Valorant',
    tagColor: '#E340E2',
    title: 'A Jornada até o Ascendente',
    buttonText: 'Saber Mais',
    buttonVariant: 'accent' as const,
    link: 'https://wolfacademyggvlr.lovable.app/',
    imagePosition: 'center 25%'
  }
];

const Index = () => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
      {champions.map((champion, index) => (
        <ChampionCard key={index} {...champion} />
      ))}
    </main>
  );
};

export default Index;
