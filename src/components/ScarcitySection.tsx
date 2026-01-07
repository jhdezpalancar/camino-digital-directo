import { Clock, Users, Shield } from "lucide-react";

const ScarcitySection = () => {
const reasons = [
  {
    icon: Shield,
    title: "Acceso accesible, trabajo real",
    description:
      "No es un curso para coleccionar. Es una intervención corta y práctica. $10 USD lo hace accesible para que puedas entrar y ejecutar sin pensarlo semanas.",
  },
  {
    icon: Users,
    title: "Cupos limitados",
    description:
      "Trabajamos con grupos reducidos por logística y para poder sostener el taller y el paso siguiente para quienes deciden continuar después.",
  },
  {
    icon: Clock,
    title: "WhatsApp solo para gestión",
    description:
      "Por WhatsApp se confirma tu país, se define el medio de pago, se valida el pago y recibes el acceso al registro y al grupo. Nada de vueltas.",
  },
];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              ¿Por qué cuesta $10 USD?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este taller está pensado para ayudarte a salir del bloqueo inicial.
              $10 USD es un precio accesible para que puedas entrar, ejecutar y probar el método en 2 días.
              Para algunas personas, ese avance también abre la decisión de continuar acompañadas después.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
