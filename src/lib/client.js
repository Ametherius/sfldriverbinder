import { createBrowserClient } from "@supabase/ssr";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = function () {
  createBrowserClient(supabaseURL, supabaseKey);
};
