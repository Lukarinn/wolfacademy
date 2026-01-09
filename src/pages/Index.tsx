import ChampionCard from '@/components/ChampionCard';
import champion1 from '@/assets/champion-1.jpg';
import champion2 from '@/assets/champion-2.jpg';
import champion3 from '@/assets/champion-3.jpg';

const champions = [
  {
    image: champion1,
    tag: 'Avançado',
    tagColor: '#E340E2',
    title: 'Jornada do Bronze ao Grão-Mestre',
    buttonText: 'Saber Mais',
    buttonVariant: 'primary' as const,
    link: '#jornada-bronze',
    imagePosition: 'center 20%'
  },
  {
    image: champion2,
    tag: 'Intermediário',
    tagColor: '#E340E2',
    title: 'Os Três Pilares para Subir de Elo',
    buttonText: 'Quero Participar',
    buttonVariant: 'secondary' as const,
    link: '#tres-pilares',
    imagePosition: 'center 15%'
  },
  {
    image: champion3,
    tag: 'Valorant',
    tagColor: '#E340E2',
    title: 'Jornada ao Ouro em 27 Dias',
    buttonText: 'Saber Mais',
    buttonVariant: 'accent' as const,
    link: '#jornada-ouro',
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
