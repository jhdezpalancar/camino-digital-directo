import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="text-primary-foreground/90 text-sm font-medium">Taller práctico de 2 días · Sin experiencia previa</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
            Camino Digital<br />de no saber qué publicar a tener una estructura clara
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl text-muted font-medium">Punto A</span>
              <span className="text-sm text-muted/70">Bloqueo y dudas constantes</span>
            </div>
            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl text-primary font-semibold">Punto B</span>
              <span className="text-sm text-primary/80">Estructura y criterio</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Para personas que quieren crear contenido digital, 
            pero se sienten perdidas, saturadas de información 
            y sin una forma clara de avanzar.
          </p>
          
          <WhatsAppButton size="lg" />
          
          <p className="mt-6 text-sm text-muted">
            El acceso y el pago se coordinan por WhatsApp, de forma directa.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
