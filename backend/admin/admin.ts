import { authClient } from "../auth/auth-client";


// CREATE USER
export const newUser = await authClient.admin.createUser({
  name: "Test User",
  email: "test@test.com",
  password: "test123",
  role: "user", //  this can also be an array of roles (e.g. ["user", "admin", "superadmin", "moderator", "banned", "investor", "founder", "employee", "contractor", "consultant", "other", "startup"])
  data: {
    // any additional on the user table including plugin fields and custom fields
    customField: "customValue",
  },
});

// LIST USERS IN DATABASE
export const listUsers = await authClient.admin.listUsers({
  query: {
    searchField: "email",
    searchValue: "test@test.com",
    searchOperator: "contains",
    limit: 10, // Default is 100, adjust as needed
    offset: 0,
    sortBy: "createdAt",
    sortDirection: "desc",
    filterField: "role",
    filterOperator: "eq",
    filterValue: "user",
  },
});

// TODO: add more roles to the user, and add more users to the database
// SET USER ROLE
export const updatedUser = await authClient.admin.setRole({
    userId: "user_id_here", // TODO: change to actual user id
    role: "admin",
});

// BAN USER
export const banUser = await authClient.admin.banUser({
    userId: "user_id_here", // TODO: change to actual user id
    banReason: "Banned for violating terms of service",
    banExpiresIn: 36500, // 100 years from now, TODO: update to actual ban duration
});

// UNBAN USER
export const unbanUser = await authClient.admin.unbanUser({
    userId: "user_id_here", // TODO: change to actual user id
});

// LIST USER SESSIONS
export const sessions = await authClient.admin.listUserSessions({
    userId: "user_id_here", // TODO: change to actual user id
});

// REVOKE USER SESSION
export const revokedSession = await authClient.admin.revokeUserSession({
    sessionToken: "session_token_here", // TODO: change to actual session token
});

// REVOKE ALL SESSIONS FOR A USER
export const revokedAllSessions = await authClient.admin.revokeUserSessions({
    userId: "user_id_here", // TODO: change to actual user id
});

// IMPERSONATE USER
// Feature allows an admin to impersonate a user, and see the user's perspective. Session will remain active until either the browser session ends or it reaches 1 hour. Can change this duration by using "impersonationSessionDuration" option.
export const impersonatedSession = await authClient.admin.impersonateUser({
    userId: "user_id_here", // TODO: change to actual user id
});

// STOP IMPERSONATING USER
await authClient.admin.stopImpersonating(); 

// REMOVE USER FROM DATABASE
export const deletedUser = await authClient.admin.removeUser({
    userId: "user_id_here", // TODO: change to actual user id
});




