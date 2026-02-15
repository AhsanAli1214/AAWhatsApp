import type { ReactNode } from "react";
import type { SecureDownloadAsset } from "@shared/downloadAssets";
import { getSecureDownloadUrl } from "@shared/downloadAssets";

interface Props {
  asset: SecureDownloadAsset;
  children: ReactNode;
  buttonClassName?: string;
  ariaLabel?: string;
}

export function DirectDownloadButton({ asset, children, buttonClassName, ariaLabel }: Props) {
  return (
    <a
      href={getSecureDownloadUrl(asset)}
      target="_blank"
      rel="noopener noreferrer nofollow"
      referrerPolicy="no-referrer"
      className={`inline-flex items-center justify-center ${buttonClassName ?? ""}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
