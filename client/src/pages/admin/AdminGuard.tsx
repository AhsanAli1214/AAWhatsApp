import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { isAdminAuthenticated } from "@/lib/adminStore";

export default function AdminGuard({ children }: { children: ReactNode }) {
  const [, setLocation] = useLocation();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const ok = await isAdminAuthenticated();
      if (!ok) {
        setLocation("/admin/login");
        setLoading(false);
        return;
      }

      setAllowed(true);
      setLoading(false);
    };

    run();
  }, [setLocation]);

  if (loading || !allowed) return null;
  return <>{children}</>;
}
