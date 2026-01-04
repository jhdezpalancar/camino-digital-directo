import { XCircle } from "lucide-react";

const PuntoASection = () => {
  const painPoints = [
    "Tienes ideas, pero no sabes por dónde empezar.",
    "Has consumido cursos, videos y webinars, pero sigues sin avanzar.",
    "Cada día te sientes más lejos de crear algo propio.",
    "La información te sobra, pero la claridad te falta.",
    "Sabes que podrías hacer más, pero el desorden te paraliza.",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              El Punto A
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Donde probablemente estás ahora
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No es falta de capacidad. Es falta de un sistema que funcione.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 shadow-md">
            <ul className="space-y-5">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center mt-10 text-muted-foreground text-lg">
            Si algo de esto te suena familiar, no estás solo. 
            Y no necesitas más información. Necesitas un camino claro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PuntoASection;
