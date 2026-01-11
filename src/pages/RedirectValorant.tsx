import { useEffect } from 'react';

const RedirectValorant = () => {
  useEffect(() => {
    window.location.href = 'https://wolfacademyggvlr.lovable.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-foreground">Redirecionando...</p>
    </div>
  );
};

export default RedirectValorant;
