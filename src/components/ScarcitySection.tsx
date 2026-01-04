import { Clock, Users, Shield } from "lucide-react";

const ScarcitySection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Precio de entrada",
      description: "El precio de $10 USD no refleja el valor del contenido. Es un precio de entrada al sistema para personas que quieren dar el primer paso sin barreras.",
    },
    {
      icon: Users,
      title: "Cupos limitados",
      description: "El acceso se gestiona por grupos reducidos para mantener la calidad de la experiencia y poder acompañar a cada participante.",
    },
    {
      icon: Clock,
      title: "Pago por WhatsApp",
      description: "El pago se coordina directamente por WhatsApp Business. Recibirás instrucciones claras y acceso inmediato una vez confirmado.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Por qué este precio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Camino Digital es la puerta de entrada a un sistema más amplio. 
              El precio bajo elimina excusas y filtra a quienes realmente quieren avanzar.
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
