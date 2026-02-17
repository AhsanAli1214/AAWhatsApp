import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { BusinessNavbar } from "./BusinessNavbar";
import { CapCutNavbar } from "./CapCutNavbar";
import { ReminiNavbar } from "./ReminiNavbar";
import { YouTubeNavbar } from "./YouTubeNavbar";
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
      ) : location.startsWith("/remini-mod") ? (
        <ReminiNavbar />
      ) : location.startsWith("/youtube-premium-mod") ? (
        <YouTubeNavbar />
      ) : (
        <Navbar />
      )}
      <MobileNav />
    </>
  );
}
