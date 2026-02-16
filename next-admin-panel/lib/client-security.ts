"use client";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const cookie = document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.split("=")[1] ?? "") : null;
}

export function getCsrfToken(): string {
  return readCookie("aa_admin_csrf") ?? "";
}

export async function adminFetch(input: RequestInfo | URL, init: RequestInit = {}) {
  const headers = new Headers(init.headers ?? {});
  if (init.method && init.method !== "GET") {
    headers.set("x-csrf-token", getCsrfToken());
  }
  return fetch(input, { ...init, headers });
}
