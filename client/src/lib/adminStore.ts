export type AdminApp = {
  id: string;
  name: string;
  slug: string;
  version: string;
  status: "draft" | "published";
  updatedAt: string;
};

export type AdminPage = {
  id: string;
  key: string;
  title: string;
  status: "draft" | "published";
  updatedAt: string;
};

async function apiRequest<T>(url: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || `Request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}

export async function loginAdmin(username: string, password: string) {
  await apiRequest<{ success: boolean }>("/api/admin/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function logoutAdmin() {
  await apiRequest<{ success: boolean }>("/api/admin/auth/logout", { method: "POST" });
}

export async function isAdminAuthenticated() {
  try {
    await apiRequest<{ authenticated: boolean }>("/api/admin/auth/session");
    return true;
  } catch {
    return false;
  }
}

export async function getApps() {
  return apiRequest<AdminApp[]>("/api/admin/apps");
}

export async function createApp(name: string, slug: string) {
  return apiRequest<AdminApp>("/api/admin/apps", {
    method: "POST",
    body: JSON.stringify({ name, slug }),
  });
}

export async function toggleAppStatus(id: string) {
  return apiRequest<AdminApp>(`/api/admin/apps/${id}/status`, { method: "PATCH" });
}

export async function getPages() {
  return apiRequest<AdminPage[]>("/api/admin/pages");
}

export async function createPage(title: string, key: string) {
  return apiRequest<AdminPage>("/api/admin/pages", {
    method: "POST",
    body: JSON.stringify({ title, key }),
  });
}
