import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "lg";
}

const WhatsAppButton = ({ className = "", size = "default" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const message = encodeURIComponent("Hola, quiero solicitar acceso a Camino Digital");
    window.open(`https://wa.me/5212211027278?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Solicitar acceso por WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
