import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const ADMIN_COOKIE = "aa_admin_session";
const encoder = new TextEncoder();
const isProd = process.env.NODE_ENV === "production";

function getSecret() {
  const value = process.env.ADMIN_JWT_SECRET;
  if (!value) throw new Error("ADMIN_JWT_SECRET is required");
  return encoder.encode(value);
}

export async function createAdminSession(username: string) {
  const token = await new SignJWT({ role: "admin", username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(getSecret());

  cookies().set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export function clearAdminSession() {
  cookies().set(ADMIN_COOKIE, "", { maxAge: 0, path: "/" });
}

export async function verifyAdminSession() {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload?.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}
