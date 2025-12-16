// Google OAuth Client ID
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

// Check if Google OAuth is enabled
export const isGoogleOAuthEnabled = () => {
  return GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID.trim() !== '';
};

