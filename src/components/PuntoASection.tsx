import { XCircle } from "lucide-react";

const PuntoASection = () => {
  const painPoints = [
    "Abres Instagram y piensas: “¿yo qué publico hoy?”",
    "Guardas ideas, pero al final no haces nada con ellas.",
    "Empiezas con ganas… y a los 10 minutos estás saltando entre videos.",
    "Sientes que todo el mundo “ya sabe” y tú vas tarde.",
    "Te sientas a crear contenido y te quedas mirando la pantalla en blanco.",
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
              No es flojera. Es que nadie te dio una forma simple de avanzar.
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
            Si te viste ahí, no es un “problema tuyo”.
            Es un problema de enfoque.
            Y se arregla con estructura, no con más consumo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PuntoASection;
