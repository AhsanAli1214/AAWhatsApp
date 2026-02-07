import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "wouter";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  const isBusiness = location.startsWith("/aa-business");

  return (
    <div
      className={`fixed bottom-28 right-4 lg:bottom-8 lg:right-8 z-[70] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className={`h-12 w-12 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 border-none ${
          isBusiness 
            ? "bg-gradient-to-br from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 shadow-blue-500/40 text-white" 
            : "bg-gradient-to-br from-primary to-emerald-400 hover:from-primary/90 hover:to-emerald-300 shadow-primary/40 text-primary-foreground"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
