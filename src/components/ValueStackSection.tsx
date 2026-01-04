import { Package, Cpu, Video, List } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ValueStackSection = () => {
  const items = [
    {
      icon: Package,
      name: "Taller Práctico de 2 Días",
      description: "Visión completa del proceso y lógica del sistema. Sesiones en vivo donde trabajas sobre tu propio proyecto.",
      promise: "Entender el camino completo del Punto A al Punto B",
      value: 47,
    },
    {
      icon: Cpu,
      name: "Bono #1: Arquitectura del Método de Avance Rápido + Prompts",
      description: "Estructura del método + prompts listos para usar con herramientas de inteligencia artificial.",
      promise: "Crear contenido con apoyo de IA sin improvisar",
      value: 97,
    },
    {
      icon: Video,
      name: "Bono #2: Clases Grabadas + PDFs + Presentaciones",
      description: "Acceso completo a ambas clases grabadas, material de apoyo y presentaciones visuales.",
      promise: "Repetir el proceso, avanzar a tu ritmo y no perderte",
      value: 37,
    },
    {
      icon: List,
      name: 'Bono #3: Listado "50 Productos Digitales Rentables"',
      description: "Ideas curadas y analizadas para continuar desarrollando tu negocio tras llegar al Punto B.",
      promise: "Saber exactamente por dónde seguir después del taller",
      value: 27,
    },
  ];

  const totalValue = items.reduce((acc, item) => acc + item.value, 0);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              Qué incluye
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-card-foreground mt-4 mb-6">
              Todo lo que recibes con Camino Digital
            </h2>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <span className="text-muted-foreground font-mono text-lg">
                        Valor: ${item.value} USD
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <p className="text-primary font-medium">
                      {item.promise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-secondary to-secondary/90 rounded-lg p-8 text-center">
            <p className="text-secondary-foreground/70 text-lg mb-2">
              Valor total del sistema
            </p>
            <p className="text-4xl font-bold text-secondary-foreground mb-6 line-through opacity-60">
              ${totalValue} USD
            </p>
            <p className="text-secondary-foreground/80 text-lg mb-2">
              Precio de acceso hoy
            </p>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-8">
              $10 USD
            </p>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
