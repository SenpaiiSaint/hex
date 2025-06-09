import { adminClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000/api/auth",
  plugins: [adminClient(), organizationClient()],
});

// CREATE ORGANIZATION
await authClient.organization.create({
  name: "Test Organization",
  slug: "test-organization",
  logo: "https://example.com/logo.png",
});

// CHECK IF SLUG IS AVAILABLE
await authClient.organization.checkSlug({
  slug: "test-organization",
})

export const revokeSession = async (token: string) =>
  await authClient.revokeSession({ token });
