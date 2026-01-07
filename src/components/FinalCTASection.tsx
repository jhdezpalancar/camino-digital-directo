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
            Tu acceso se gestiona aquí
          </h2>

          <p className="text-lg text-secondary-foreground/80 mb-4">
            Acceso al taller + bonos por
          </p>

          <p className="text-5xl font-bold text-primary mb-8">
            $10 USD
          </p>

          <p className="text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
            En WhatsApp confirmas tu país, recibes el medio de pago, validas tu acceso y te enviamos el formulario y el enlace al grupo.
          </p>

          <WhatsAppButton size="lg" />

          <p className="mt-8 text-sm text-muted">
            Cupos limitados. Confirmación por orden de pago.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
