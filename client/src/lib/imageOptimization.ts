const preconnectedOrigins = new Set<string>();

const isAboveFold = (img: HTMLImageElement) => {
  const rect = img.getBoundingClientRect();
  return rect.top < window.innerHeight * 1.2;
};

const ensurePreconnect = (src: string) => {
  if (!src.startsWith("http")) return;

  const origin = new URL(src).origin;
  if (preconnectedOrigins.has(origin)) return;

  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = origin;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  preconnectedOrigins.add(origin);
};

const optimizeImage = (img: HTMLImageElement) => {
  if (img.dataset.imgOptimized === "true") return;

  if (!img.hasAttribute("decoding")) {
    img.setAttribute("decoding", "async");
  }

  if (isAboveFold(img)) {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "eager");
    }
    if (!img.hasAttribute("fetchpriority")) {
      img.setAttribute("fetchpriority", "high");
    }
  } else {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    if (!img.hasAttribute("fetchpriority")) {
      img.setAttribute("fetchpriority", "low");
    }
  }

  const source = img.currentSrc || img.src;
  if (source) {
    ensurePreconnect(source);
  }

  img.dataset.imgOptimized = "true";
};

const runOptimizationPass = () => {
  document.querySelectorAll("img").forEach((node) => {
    optimizeImage(node as HTMLImageElement);
  });
};

export const initImageOptimization = () => {
  runOptimizationPass();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;

      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.tagName === "IMG") {
          optimizeImage(node as HTMLImageElement);
          return;
        }

        node.querySelectorAll("img").forEach((img) => {
          optimizeImage(img as HTMLImageElement);
        });
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const onLoad = () => runOptimizationPass();
  window.addEventListener("load", onLoad);

  return () => {
    observer.disconnect();
    window.removeEventListener("load", onLoad);
  };
};
