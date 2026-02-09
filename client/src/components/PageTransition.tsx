import { ReactNode } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();

  return (
    // Keyed wrapper to trigger entry animation on route changes.
    <div key={location} className="page-transition">
      {children}
    </div>
  );
}
