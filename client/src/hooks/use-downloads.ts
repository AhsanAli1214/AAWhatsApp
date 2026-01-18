import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, type InsertDownload } from "@shared/routes";

export function useTrackDownload() {
  return useMutation({
    mutationFn: async (data: InsertDownload) => {
      const res = await fetch(api.downloads.track.path, {
        method: api.downloads.track.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to track download");
      return api.downloads.track.responses[200].parse(await res.json());
    },
  });
}

export function useDownloadStats() {
  return useQuery({
    queryKey: [api.downloads.stats.path],
    queryFn: async () => {
      const res = await fetch(api.downloads.stats.path);
      if (!res.ok) throw new Error("Failed to fetch stats");
      return api.downloads.stats.responses[200].parse(await res.json());
    },
  });
}
