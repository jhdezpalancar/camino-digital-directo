import { CheckCircle, XCircle } from "lucide-react";

const AudienceSection = () => {
  const forWho = [
    "Quieres crear contenido digital pero no sabes cómo empezar",
    "Has consumido mucha información y necesitas ordenarla",
    "Buscas un sistema práctico, no más teoría",
    "Estás dispuesto a trabajar durante 2 días con enfoque",
    "Valoras la claridad sobre la motivación vacía",
  ];

  const notForWho = [
    "Buscas hacerte rico de la noche a la mañana",
    "No estás dispuesto a invertir tiempo en el proceso",
    "Prefieres seguir consumiendo contenido sin aplicar",
    "Esperas que alguien haga el trabajo por ti",
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mb-6">
              Es para ti si...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg border border-primary/20 p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Camino Digital es para ti si:
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-lg border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-destructive" />
                No es para ti si:
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
