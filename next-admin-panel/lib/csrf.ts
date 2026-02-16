import { cookies, headers } from "next/headers";
import crypto from "node:crypto";

const CSRF_COOKIE = "aa_admin_csrf";
const isProd = process.env.NODE_ENV === "production";

export function issueCsrfToken() {
  const token = crypto.randomBytes(24).toString("hex");
  cookies().set(CSRF_COOKIE, token, {
    // Readable by client so UI can send x-csrf-token header.
    httpOnly: false,
    secure: isProd,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return token;
}

export function assertCsrf() {
  const headerValue = headers().get("x-csrf-token");
  const cookieValue = cookies().get(CSRF_COOKIE)?.value;
  if (!headerValue || !cookieValue || headerValue !== cookieValue) {
    throw new Error("Invalid CSRF token");
  }
}
