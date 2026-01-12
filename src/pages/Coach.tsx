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
  );
};

export default Coach;
