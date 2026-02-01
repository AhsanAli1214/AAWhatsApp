import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { BusinessNavbar } from "./BusinessNavbar";

export function Navigation() {
  const [location] = useLocation();
  
  // Hide navigation on the app selector page
  if (location === "/") {
    return null;
  }
  
  // Show BusinessNavbar for all /aa-business paths
  if (location.startsWith("/aa-business")) {
    return <BusinessNavbar />;
  }
  
  // Default to regular Navbar for other paths (including /aa-whatsapp)
  return <Navbar />;
}
