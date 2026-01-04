import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "lg";
}

const WhatsAppButton = ({ className = "", size = "default" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const message = encodeURIComponent("Hola, quiero recibir información sobre Camino Digital");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Hablar por WhatsApp y recibir la información
    </Button>
  );
};

export default WhatsAppButton;
