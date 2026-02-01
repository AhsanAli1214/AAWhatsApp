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
  
  // Show Navbar only for /aa-whatsapp paths
  if (location.startsWith("/aa-whatsapp")) {
    return <Navbar />;
  }
  
  // Default to null for any other paths (like the app selector page)
  return null;
}
