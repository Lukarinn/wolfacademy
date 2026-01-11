import { useEffect } from 'react';

const RedirectCoach = () => {
  useEffect(() => {
    window.location.href = 'https://wolfacademycoach.lovable.app/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-foreground">Redirecionando...</p>
    </div>
  );
};

export default RedirectCoach;
