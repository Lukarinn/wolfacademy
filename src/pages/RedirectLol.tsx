import { useEffect } from 'react';

const RedirectLol = () => {
  useEffect(() => {
    window.location.href = 'https://wolfacademygg.lovable.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-foreground">Redirecionando...</p>
    </div>
  );
};

export default RedirectLol;
