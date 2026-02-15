const preconnectedOrigins = new Set<string>();
const optimizedImages = new WeakSet<HTMLImageElement>();

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

const optimizeImage = (img: HTMLImageElement, isNearViewport = false) => {
  if (optimizedImages.has(img)) return;

  if (!img.hasAttribute("decoding")) {
    img.setAttribute("decoding", "async");
  }

  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", isNearViewport ? "eager" : "lazy");
  }

  if (!img.hasAttribute("fetchpriority")) {
    img.setAttribute("fetchpriority", isNearViewport ? "high" : "low");
  }

  const source = img.currentSrc || img.src;
  if (source) {
    ensurePreconnect(source);
  }

  optimizedImages.add(img);
};

const collectImagesFromNode = (node: Node, bucket: Set<HTMLImageElement>) => {
  if (node instanceof HTMLImageElement) {
    bucket.add(node);
    return;
  }

  if (node instanceof HTMLElement) {
    node.querySelectorAll("img").forEach((img) => bucket.add(img));
  }
};

export const initImageOptimization = () => {
  const pendingImages = new Set<HTMLImageElement>();
  const viewportObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        optimizeImage(entry.target as HTMLImageElement, true);
        viewportObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "240px" }
  );

  const queueImage = (img: HTMLImageElement) => {
    if (optimizedImages.has(img)) return;
    pendingImages.add(img);
    viewportObserver.observe(img);
  };

  document.querySelectorAll("img").forEach((img) => queueImage(img as HTMLImageElement));

  const flushQueuedImages = () => {
    pendingImages.forEach((img) => optimizeImage(img));
    pendingImages.clear();
  };

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== "childList") return;
      mutation.addedNodes.forEach((node) => collectImagesFromNode(node, pendingImages));
    });

    if (pendingImages.size === 0) return;

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(flushQueuedImages, { timeout: 600 });
      return;
    }

    window.setTimeout(flushQueuedImages, 120);
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    mutationObserver.disconnect();
    viewportObserver.disconnect();
    pendingImages.clear();
  };
};
