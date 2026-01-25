import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldAlert, RefreshCw } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function AdBlockDetector() {
  const [isAdBlockActive, setIsAdBlockActive] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkAdBlock = async () => {
      // Common ad script URLs that adblockers usually block
      const adUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      
      try {
        const response = await fetch(adUrl, {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store'
        });
        // If the request succeeds (even with no-cors), the script isn't blocked
        setIsAdBlockActive(false);
      } catch (error) {
        // If the fetch fails, it's highly likely an adblocker is active
        setIsAdBlockActive(true);
      }
    };

    // Run check after a short delay to allow adblockers to kick in
    const timer = setTimeout(checkAdBlock, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Dialog open={isAdBlockActive} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-xl [&>button]:hidden">
        <DialogHeader className="flex flex-col items-center gap-4 text-center">
          <div className="p-3 bg-destructive/10 rounded-full">
            <ShieldAlert className="w-12 h-12 text-destructive animate-pulse" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t('adblock_title')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-lg">
            {t('adblock_description')}
          </DialogDescription>
        </DialogHeader>
        <div className="bg-muted/50 p-4 rounded-xl border border-border/50 text-sm space-y-2">
          <p className="font-medium text-foreground">How to disable:</p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 text-left">
            <li>Click your Ad-Blocker icon in the browser toolbar</li>
            <li>Select "Don't run on pages on this site" or "Pause on this site"</li>
            <li>Click the "Refresh" button below</li>
          </ol>
        </div>
        <DialogFooter className="sm:justify-center mt-4">
          <Button 
            onClick={handleReload}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            {t('refresh_page')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
