import { Download, Server, ShieldCheck, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrackDownload } from "@/hooks/use-downloads";
import { useToast } from "@/hooks/use-toast";

interface DownloadOption {
  name: string;
  icon: typeof Server;
  url: string;
  platform: string;
  version: string;
}

const OPTIONS: DownloadOption[] = [
  { name: "Fast Server 1", icon: Server, url: "https://otieu.com/4/10272561", platform: "android", version: "v19.45" },
  { name: "Google Drive", icon: HardDrive, url: "https://drive.google.com/uc?export=download&id=1Okxhfb5HI-qFRl3w0QB7NkGfa9a-b_7L", platform: "android", version: "v19.45" },
  { name: "Upload.app", icon: Server, url: "https://upload.app/download/aawhatsapp/com.gbwhatsapp/eadda49b577008fc16152bdfe2320d4efc982ae0d0d4300803f5ec7958c428b4", platform: "android", version: "v19.45" },
  { name: "MediaFire", icon: Download, url: "https://www.mediafire.com/file/8cph5lhutmthw83/AAWhatsapp_Latest.apk/file", platform: "android", version: "v19.45" },
];

export function DownloadCard() {
  const { mutate: track } = useTrackDownload();
  const { toast } = useToast();

  const handleDownload = (option: DownloadOption) => {
    track({
      version: option.version,
      platform: option.platform
    });
    
    toast({
      title: "Download Started",
      description: `Downloading AAWhatsApp ${option.version} from ${option.name}`,
    });
    // Track download and open link
    window.open(option.url, '_blank');
  };

  return (
    <div className="glass-card rounded-3xl p-8 max-w-md w-full mx-auto relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/25">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-display">Download APK</h3>
            <p className="text-sm text-primary font-medium">Version 19.45 • 65MB</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {OPTIONS.map((opt, idx) => (
            <Button
              key={idx}
              onClick={() => handleDownload(opt)}
              className="w-full justify-between h-14 text-base font-medium bg-secondary hover:bg-secondary/80 border border-white/5 hover:border-primary/50 group transition-all"
              variant="outline"
            >
              <span className="flex items-center gap-2">
                <opt.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                {opt.name}
              </span>
              <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-black/20 py-2 px-4 rounded-full w-fit mx-auto">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>Scanned & Safe: No Malware</span>
        </div>
      </div>
    </div>
  );
}
