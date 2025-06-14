import { createAuthClient } from "better-auth/react";

const baseURL = typeof window !== 'undefined' 
  ? `${window.location.origin}/api/auth`
  : "https://hex-phi.vercel.app/api/auth";

export const authClient = createAuthClient({
    baseURL,
})

export const revokeSession = async (token: string) => await authClient.revokeSession({ token });