import { useMutation } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";

export function useSubscribe() {
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 400) {
           const parsed = api.subscribers.create.responses[400].parse(errorData);
           throw new Error(parsed.message);
        }
        if (res.status === 409) {
          const parsed = api.subscribers.create.responses[409].parse(errorData);
          throw new Error(parsed.message);
        }
        throw new Error("Failed to subscribe");
      }
      
      return api.subscribers.create.responses[201].parse(await res.json());
    },
  });
}
