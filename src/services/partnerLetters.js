const fallbackSupabaseUrl = "https://uullrzbhntisaspcxltu.supabase.co";
const fallbackSupabasePublishableKey = "sb_publishable_1XtBQ88CABMwZZ7S-fSLWA_27ZmRlcp";

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || fallbackSupabaseUrl).replace(/\/$/, "");
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  fallbackSupabasePublishableKey;
const lettersTable = "partner_letters";

export const isSupabaseLettersEnabled = Boolean(supabaseUrl && supabasePublishableKey);

function getHeaders(extraHeaders = {}) {
  const headers = {
    apikey: supabasePublishableKey,
    ...extraHeaders,
  };

  if (!supabasePublishableKey.startsWith("sb_")) {
    headers.Authorization = `Bearer ${supabasePublishableKey}`;
  }

  return {
    ...headers,
  };
}

function formatCreatedAt(value) {
  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function mapLetter(row) {
  return {
    id: row.id,
    text: row.message,
    createdAt: formatCreatedAt(row.created_at),
  };
}

async function throwSupabaseError(response) {
  let message = `Supabase request failed with ${response.status}`;

  try {
    const body = await response.json();
    message = body.message || body.hint || body.details || message;
  } catch {
    // Keep the status-based fallback when the response is not JSON.
  }

  throw new Error(message);
}

export async function fetchPartnerLetters(limit = 5) {
  if (!isSupabaseLettersEnabled) return [];

  const params = new URLSearchParams({
    select: "id,message,created_at",
    order: "created_at.desc",
    limit: String(limit),
  });
  const response = await fetch(`${supabaseUrl}/rest/v1/${lettersTable}?${params}`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    await throwSupabaseError(response);
  }

  const rows = await response.json();
  return rows.map(mapLetter);
}

export async function savePartnerLetter({ text, sender }) {
  if (!isSupabaseLettersEnabled) return null;

  const params = new URLSearchParams({
    select: "id,message,created_at",
  });
  const response = await fetch(`${supabaseUrl}/rest/v1/${lettersTable}?${params}`, {
    method: "POST",
    headers: getHeaders({
      "Content-Type": "application/json",
      Prefer: "return=representation",
    }),
    body: JSON.stringify({
      message: text,
      sender,
    }),
  });

  if (!response.ok) {
    await throwSupabaseError(response);
  }

  const rows = await response.json();
  return rows[0] ? mapLetter(rows[0]) : null;
}