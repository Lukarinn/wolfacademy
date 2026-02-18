import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RedirectLol = () => {
  useEffect(() => {
    window.location.href = 'https://wolfacademygg.lovable.app/';
  }, []);

  return (
    <>
      <Helmet>
        <title>Curso de LoL | Wolf Academy - Redirecionando</title>
        <meta name="description" content="Você está sendo redirecionado para o curso completo de League of Legends da Wolf Academy. Aprenda os segredos de todas as lanes." />
        <link rel="canonical" href="https://wolfacademygg.lovable.app/" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Redirecionando para o curso de LoL...</p>
      </main>
    </>
  );
};

export default RedirectLol;
