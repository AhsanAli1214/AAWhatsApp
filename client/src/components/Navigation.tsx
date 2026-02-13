import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { BusinessNavbar } from "./BusinessNavbar";
import { CapCutNavbar } from "./CapCutNavbar";
import { MobileNav } from "./MobileNav";

export function Navigation() {
  const [location] = useLocation();
  
  // Hide navigation on the app selector page
  if (location === "/") {
    return null;
  }
  
  return (
    <>
      {location.startsWith("/aa-business") ? (
        <BusinessNavbar />
      ) : location.startsWith("/capcut-pro") ? (
        <CapCutNavbar />
      ) : (
        <Navbar />
      )}
      <MobileNav />
    </>
  );
}
