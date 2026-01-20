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
  {
    name: "Fast Server",
    icon: Server,
    url: "https://otieu.com/4/10272561",
    platform: "android",
    version: "latest",
  },
  {
    name: "MediaFire",
    icon: Download,
    url: "https://www.mediafire.com/file/cqrm7bafpnh4yg6/AAWhatsapp+V1.0+final.apk/file",
    platform: "android",
    version: "latest",
  },
];

export function DownloadCard() {
  const { mutate: track } = useTrackDownload();
  const { toast } = useToast();

  const handleDownload = (option: DownloadOption) => {
    track({
      version: option.version,
      platform: option.platform,
    });

    toast({
      title: "Download Started",
      description: `Downloading AAWhatsApp ${option.version} from ${option.name}`,
    });
    // Track download and open link
    window.open(option.url, "_blank");
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
            <p className="text-sm text-primary font-medium">
              Safe • Secure • Fast
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {OPTIONS.map((opt, idx) => (
            <Button
              key={idx}
              onClick={() => handleDownload(opt)}
              className="w-full justify-between h-16 text-lg font-bold bg-gradient-to-r from-secondary to-secondary/50 hover:from-primary/20 hover:to-primary/10 border border-white/10 hover:border-primary/50 group transition-all duration-300 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              variant="outline"
            >
              <span className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <opt.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="flex flex-col items-start">
                  <span className="leading-none mb-1">{opt.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Official Mirror
                  </span>
                </span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Fast Download
                </span>
                <Download className="w-5 h-5 opacity-40 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary" />
              </div>
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
