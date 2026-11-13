/**
 * Frontend Supabase config (browser-safe, deployed to client).
 * Static HTML/JS app (no Vite/Next build-time env injection): this file is the
 * production-safe source for Supabase URL + publishable/anon key so Vercel serves
 * the same config to all pages. The anon key is public by design; access is
 * enforced by Supabase Auth + RLS. If empty, app runs in local/offline fallback.
 * NEVER put SUPABASE_SERVICE_ROLE_KEY or any server secret here.
 */
window.BOBASIP_CONFIG = window.BOBASIP_CONFIG || {
  SUPABASE_URL: "https://jfobakghnvnoefhbbrhw.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb2Jha2dobnZub2VmaGJicmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1OTU2NTYsImV4cCI6MjExMDE3MTY1Nn0.UCZqjtqDstx5fqNT0AEVr5Se7WCls9BRmUSHljPoLRY"
};
window.BOBASIP_SUPABASE_URL = window.BOBASIP_CONFIG.SUPABASE_URL || "";
window.BOBASIP_SUPABASE_ANON_KEY = window.BOBASIP_CONFIG.SUPABASE_ANON_KEY || "";
