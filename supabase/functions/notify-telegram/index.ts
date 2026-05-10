type PartnerLetterPayload = {
  type?: string;
  table?: string;
  schema?: string;
  record?: {
    id?: string;
    message?: string;
    sender?: string;
    created_at?: string;
  };
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function formatLetterMessage(payload: PartnerLetterPayload) {
  const record = payload.record || {};
  const sender = record.sender || "Pink";
  const message = record.message || "";
  const createdAt = record.created_at
    ? new Intl.DateTimeFormat("th-TH", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Bangkok",
      }).format(new Date(record.created_at))
    : "just now";

  return [
    "New letter from Partner Memory",
    "",
    `From: ${sender}`,
    `At: ${createdAt}`,
    "",
    message,
  ].join("\n");
}

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
  }

  const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");
  const webhookSecret = Deno.env.get("PARTNER_LETTERS_WEBHOOK_SECRET");

  if (!botToken || !chatId) {
    return jsonResponse({ ok: false, error: "Telegram secrets are missing" }, 500);
  }

  if (webhookSecret && request.headers.get("x-webhook-secret") !== webhookSecret) {
    return jsonResponse({ ok: false, error: "Invalid webhook secret" }, 401);
  }

  let payload: PartnerLetterPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload" }, 400);
  }

  const text = formatLetterMessage(payload);
  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    const errorBody = await telegramResponse.text();
    return jsonResponse(
      {
        ok: false,
        error: "Telegram request failed",
        details: errorBody,
      },
      502,
    );
  }

  return jsonResponse({ ok: true });
});
