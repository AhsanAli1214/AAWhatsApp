import { useEffect } from "react";
import { useLocation } from "wouter";
import { isAdminAuthenticated } from "@/lib/adminStore";

export default function AdminIndex() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const run = async () => {
      const authenticated = await isAdminAuthenticated();
      setLocation(authenticated ? "/admin/dashboard" : "/admin/login");
    };

    run();
  }, [setLocation]);

  return null;
}
