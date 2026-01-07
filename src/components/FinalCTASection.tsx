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

          <div className="text-secondary-foreground/70 mb-10 max-w-xl mx-auto text-left">
            <p className="mb-3 text-center">
              Así se gestiona tu acceso por WhatsApp:
            </p>
            <ul className="space-y-2">
              <li><span className="font-medium text-secondary-foreground">Paso 1:</span> Abres WhatsApp</li>
              <li><span className="font-medium text-secondary-foreground">Paso 2:</span> Confirmas tu país</li>
              <li><span className="font-medium text-secondary-foreground">Paso 3:</span> Recibes el medio de pago y confirmas</li>
              <li><span className="font-medium text-secondary-foreground">Paso 4:</span> Te enviamos el registro y el enlace al grupo</li>
            </ul>
          </div>


          <WhatsAppButton size="lg" />

          <p className="mt-4 text-sm text-secondary-foreground/70">
            En menos de 5 minutos sabes si estás dentro.
          </p>

          <p className="mt-8 text-sm text-muted">
            Cupos limitados. Se confirma tu lugar al registrarse el pago.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
