export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  AGENT = "AGENT",
}

export const AUTH_TOKEN_KEY = "auth_token";
export const AUTH_USER_KEY = "auth_user";

/** sessionStorage marker used to detect tab close vs refresh */
export const SESSION_MARKER_KEY = "auth_session_active";

/** localStorage key holding the schema version of persisted auth data */
export const AUTH_SCHEMA_VERSION_KEY = "auth_schema_version";

/**
 * Bump this whenever the shape of the persisted auth data (User model, token
 * semantics, ...) changes. Any stored auth data with a different version is
 * purged on startup instead of being restored, so stale data from old
 * deployments can never conflict with current code.
 */
export const AUTH_SCHEMA_VERSION = "2026-09-17-demo";
