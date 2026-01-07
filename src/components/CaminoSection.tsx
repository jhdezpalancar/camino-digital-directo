import { Route, BookOpen, Lightbulb } from "lucide-react";

const CaminoSection = () => {
  const features = [
    {
      icon: Route,
      title: "No es motivación",
      description: "No se trata de salir inspirado por unas horas. Se trata de salir sabiendo qué hacer cuando vuelvas a sentarte frente a la pantalla.",
    },
    {
      icon: BookOpen,
      title: "No es teoría",
      description: "No vas a acumular conceptos nuevos. Vas a ordenar lo que ya sabes para que finalmente tenga sentido y se pueda usar.",
    },
    {
      icon: Lightbulb,
      title: "Es un proceso guiado",
      description: "Durante 2 días sigues una secuencia clara que te mueve del desorden inicial hacia una forma concreta de avanzar.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              El Camino
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-4 mb-6">
              Un sistema, no más contenido
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Camino Digital es un taller práctico de 2 días pensado para personas
              que ya intentaron avanzar y descubrieron que el problema no es la falta
              de información, sino la falta de una estructura clara.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-secondary/40 border border-border rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Qué haces en cada día
            </h3>
          
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg border border-border p-6">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Día 1
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Ordenas tus ideas y eliges una dirección.</li>
                  <li>Armas una estructura simple para contenido.</li>
                  <li>Usas IA para sacar borradores sin quedarte en blanco.</li>
                </ul>
              </div>
          
              <div className="bg-background rounded-lg border border-border p-6">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Día 2
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Ajustas la estructura para que te quede natural.</li>
                  <li>Tomas decisiones: qué sí, qué no, y en qué orden.</li>
                  <li>Sales con próximos pasos claros para la semana siguiente.</li>
                </ul>
              </div>
            </div>
          
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Para algunas personas, este es el punto donde por fin pueden avanzar sin bloqueo.
              Otras prefieren seguir acompañadas después, para implementar con más foco y velocidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaminoSection;
