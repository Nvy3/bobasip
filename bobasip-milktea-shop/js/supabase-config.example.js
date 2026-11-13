/**
 * BobaSip frontend Supabase config (browser-safe).
 *
 * 1) Copy this file to `js/supabase-config.js`
 * 2) Fill in your project's URL and ANON/PUBLIC key from Supabase Dashboard
 *    (Project Settings -> API).
 *
 * IMPORTANT:
 * - Only the anon/public key belongs here. NEVER put SUPABASE_SERVICE_ROLE_KEY
 *   in any frontend file or browser-exposed variable.
 * - If this file is missing or values are empty, the app runs in local/offline
 *   fallback mode (localStorage) and fails gracefully.
 *
 * Static app note: this is not a Vite/Next build, so values are provided via
 * window globals (loaded before js/main.js).
 */
window.BOBASIP_CONFIG = window.BOBASIP_CONFIG || {
  // Example: "https://your-project-ref.supabase.co"
  SUPABASE_URL: "",
  // Example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  SUPABASE_ANON_KEY: ""
};
// Back-compat globals read by the app
window.BOBASIP_SUPABASE_URL = window.BOBASIP_CONFIG.SUPABASE_URL || "";
window.BOBASIP_SUPABASE_ANON_KEY = window.BOBASIP_CONFIG.SUPABASE_ANON_KEY || "";
