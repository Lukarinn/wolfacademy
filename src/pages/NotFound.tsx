import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página Não Encontrada | Wolf Academy</title>
        <meta name="description" content="A página que você procura não existe. Volte para a Wolf Academy e descubra nosso coaching profissional de League of Legends." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404 - Página Não Encontrada</h1>
          <p className="mb-4 text-xl text-muted-foreground">A página que você procura não existe.</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Voltar para a Wolf Academy
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
