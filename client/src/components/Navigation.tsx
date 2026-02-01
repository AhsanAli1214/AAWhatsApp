import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { BusinessNavbar } from "./BusinessNavbar";

export function Navigation() {
  const [location] = useLocation();
  
  if (location.startsWith("/aa-business")) {
    return <BusinessNavbar />;
  }
  
  return <Navbar />;
}
