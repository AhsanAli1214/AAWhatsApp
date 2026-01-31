import { useEffect, useRef } from "react";

interface VideoAdPlayerProps {
  adTagUrl: string;
}

declare global {
  interface Window {
    google: any;
  }
}

export function VideoAdPlayer({ adTagUrl }: VideoAdPlayerProps) {
  const finalAdTagUrl = adTagUrl || (typeof window !== "undefined" && (window as any).googleAdTag) || "";
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const adContainerRef = useRef<HTMLDivElement>(null);
  const adsLoaderRef = useRef<any>(null);
  const adsManagerRef = useRef<any>(null);

  useEffect(() => {
    if (!window.google || !finalAdTagUrl) return;

    const videoElement = videoElementRef.current;
    const adContainer = adContainerRef.current;

    if (!videoElement || !adContainer) return;

    const adDisplayContainer = new window.google.ima.AdDisplayContainer(adContainer, videoElement);
    const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer);
    adsLoaderRef.current = adsLoader;

    adsLoader.addEventListener(
      window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      (event: any) => {
        const adsRenderingSettings = new window.google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        
        const adsManager = event.getAdsManager(videoElement, adsRenderingSettings);
        adsManagerRef.current = adsManager;

        adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
          videoElement.pause();
        });

        adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
          videoElement.play();
        });

        try {
          adsManager.init(640, 360, window.google.ima.ViewMode.NORMAL);
          adsManager.start();
        } catch (adError) {
          videoElement.play();
        }
      },
      false
    );

    adsLoader.addEventListener(
      window.google.ima.AdErrorEvent.Type.AD_ERROR,
      () => {
        videoElement.play();
      },
      false
    );

    const adsRequest = new window.google.ima.AdsRequest();
    adsRequest.adTagUrl = finalAdTagUrl;
    adsRequest.linearAdSlotWidth = 640;
    adsRequest.linearAdSlotHeight = 360;
    adsRequest.nonLinearAdSlotWidth = 640;
    adsRequest.nonLinearAdSlotHeight = 150;

    const playAds = () => {
      adDisplayContainer.initialize();
      adsLoader.requestAds(adsRequest);
      videoElement.removeEventListener("play", playAds);
    };

    videoElement.addEventListener("play", playAds);

    return () => {
      if (adsManagerRef.current) {
        adsManagerRef.current.destroy();
      }
    };
  }, [finalAdTagUrl]);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
      <video
        ref={videoElementRef}
        className="w-full h-full"
        playsInline
        muted
        autoPlay
      />
      <div
        ref={adContainerRef}
        className="absolute inset-0 z-20 pointer-events-auto"
      />
      <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/70 uppercase tracking-widest font-bold border border-white/10">
          Advertisement
        </span>
      </div>
    </div>
  );
}
