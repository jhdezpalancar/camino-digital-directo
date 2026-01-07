import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import PuntoASection from "@/components/PuntoASection";
import CaminoSection from "@/components/CaminoSection";
import PuntoBSection from "@/components/PuntoBSection";
import ValueStackSection from "@/components/ValueStackSection";
import ScarcitySection from "@/components/ScarcitySection";
import AudienceSection from "@/components/AudienceSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Camino Digital: de no saber qué publicar a tener estructura clara | Taller de 2 días</title>
        <meta 
          name="description" 
          content="Taller práctico de 2 días para personas que empiezan en marketing digital y se sienten perdidas al crear contenido. Sales con una estructura clara, ideas accionables y una ruta simple para avanzar sin improvisar. Acceso $10 USD." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://caminodigital.com" />
      </Helmet>
      
      <main className="min-h-screen">
        <HeroSection />
        <PuntoASection />
        <CaminoSection />
        <PuntoBSection />
        <ValueStackSection />
        <ScarcitySection />
        <AudienceSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
