import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-muted font-medium">Punto A</span>
            <ArrowRight className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Punto B</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-6">
            El siguiente paso está claro
          </h2>

          <p className="text-lg text-secondary-foreground/80 mb-4">
            Acceso completo al sistema por solo
          </p>

          <p className="text-5xl font-bold text-primary mb-8">
            $10 USD
          </p>

          <p className="text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
            Continúa por WhatsApp para gestionar tu acceso al taller que te llevará del punto A al punto B.
          </p>

          <WhatsAppButton size="lg" />

          <p className="mt-8 text-sm text-muted">
            Cupos limitados. Acceso por grupos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
