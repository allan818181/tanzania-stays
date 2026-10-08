import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Building } from "lucide-react";

interface FloatingActionButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: "message" | "calendar" | "building";
}

const FloatingActionButton = ({ text, href, onClick, icon = "message" }: FloatingActionButtonProps) => {
  const IconComponent = {
    message: MessageCircle,
    calendar: Calendar,
    building: Building
  }[icon];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        className="bg-gradient-sunset hover:bg-gradient-sunset text-white shadow-tropical hover:shadow-tropical transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3 h-auto text-base font-semibold flex items-center gap-3 min-w-[140px]"
        size="lg"
      >
        <IconComponent className="w-5 h-5" />
        {text}
      </Button>
    </div>
  );
};

export default FloatingActionButton;