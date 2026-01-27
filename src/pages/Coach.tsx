import { Helmet } from 'react-helmet-async';
import CoachNavbar from '@/components/coach/CoachNavbar';
import CoachHero from '@/components/coach/CoachHero';
import CoachMarquee from '@/components/coach/CoachMarquee';
import CoachMethod from '@/components/coach/CoachMethod';
import CoachLessons from '@/components/coach/CoachLessons';
import CoachCalculator from '@/components/coach/CoachCalculator';
import CoachPlans from '@/components/coach/CoachPlans';
import CoachFAQ from '@/components/coach/CoachFAQ';

const Coach = () => {
  return (
    <>
      <Helmet>
        <title>Coach Individual LoL | Wolf Academy - Acompanhamento Personalizado</title>
        <meta name="description" content="🎮 Coach individual de League of Legends. Acompanhamento personalizado com coaches experientes. Suba de elo com método exclusivo, sigilo total e suporte dedicado." />
        <link rel="canonical" href="https://wolfacademy.lovable.app/coach" />
        <meta property="og:title" content="Coach Individual LoL | Wolf Academy - Acompanhamento Personalizado" />
        <meta property="og:description" content="🎮 Coach individual de LoL. Suba de elo com acompanhamento personalizado e coaches experientes." />
        <meta property="og:url" content="https://wolfacademy.lovable.app/coach" />
        <meta name="keywords" content="coach lol individual, aulas particulares lol, coaching league of legends, subir de elo, elo boost, treino lol, acompanhamento lol" />
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
