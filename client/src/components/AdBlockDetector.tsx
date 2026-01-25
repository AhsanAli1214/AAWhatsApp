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
      // Multiple detection strategies for better reliability
      const adSources = [
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'https://static.ads-twitter.com/uwt.js',
        'https://connect.facebook.net/en_US/fbevents.js'
      ];
      
      try {
        // Try to fetch several common ad scripts
        const results = await Promise.all(
          adSources.map(url => 
            fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' })
              .then(() => 'success')
              .catch(() => 'blocked')
          )
        );

        // ONLY trigger if ALL sources are blocked (less aggressive)
        const allBlocked = results.every(res => res === 'blocked');
        
        // Final check: check if the highperformanceformat script is loaded
        const highPerfBlocked = !document.querySelector('script[src*="highperformanceformat.com"]');
        
        setIsAdBlockActive(allBlocked && highPerfBlocked);
      } catch (error) {
        // Default to false if check fails to avoid false positives
        setIsAdBlockActive(false);
      }
    };

    // Initial check after 1.5s
    const timer = setTimeout(checkAdBlock, 1500);
    
    // Periodic check every 10 seconds to catch toggle changes
    const interval = setInterval(checkAdBlock, 10000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
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
