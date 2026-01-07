import { CheckCircle } from "lucide-react";

const PuntoBSection = () => {
  const outcomes = [
    "Tienes una idea más nítida de qué vas a construir y para quién.",
    "Te vas con los próximos pasos definidos, sin quedarte pensando “¿y ahora qué?”.",
    "Empiezas a usar una estructura para crear contenido sin depender del ánimo del día.",
    "Aprendes a apoyarte en IA para ahorrar tiempo en tareas repetitivas, sin enredarte.",
    "Sientes menos ruido mental y más dirección para continuar al día siguiente.",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              El Punto B
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Donde estarás después del taller
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No es magia. Es lo que pasa cuando por fin sigues una secuencia simple y ejecutable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 p-8">
            <ul className="space-y-5">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              En 2 días dejas de dar vueltas y empiezas a ejecutar con orden.
              <br />
              <span className="text-foreground font-medium">Directo. Práctico. Sin relleno.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuntoBSection;
