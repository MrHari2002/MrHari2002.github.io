// Centralized API endpoints with simple env detection for dev vs production.

// Rsbuild provides import.meta.env.DEV/PROD; also fall back to hostname check.
const isDevEnv = (() => {
  try {
    // @ts-ignore - import.meta may not be typed in some tools before rsbuild runs
    if (typeof import.meta !== 'undefined' && import.meta.env && typeof import.meta.env.DEV === 'boolean') {
      // @ts-ignore
      return import.meta.env.DEV as boolean;
    }
  } catch {}
  if (typeof window !== 'undefined') {
    return /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
  }
  return false;
})();

export const CONTACT_ENDPOINT = isDevEnv
  ? 'http://localhost:8080/api/contact'
  : 'http://ec2-3-144-193-90.us-east-2.compute.amazonaws.com:8080/api/contact';

export const API = {
  contact: CONTACT_ENDPOINT,
} as const;
