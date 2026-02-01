export function AdsBanner() { return null; }
export function AdPlaceholder() { return null; }
export function AdDownloadButton({ downloadUrl, buttonClassName }: { downloadUrl: string, buttonClassName?: string }) { 
  return (
    <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className={buttonClassName}>
      Download Now
    </a>
  ); 
}
export function AdBlockDetector() { return null; }
export function VideoAdPlayer() { return null; }
