# Telegram Notifications for Partner Letters

Use this flow:

1. Pink submits a letter in the website.
2. Supabase inserts a row into `public.partner_letters`.
3. A Supabase Database Webhook calls the `notify-telegram` Edge Function.
4. The function sends a Telegram message.

## 1. Rotate the Bot Token

If the bot token was pasted into chat or a public place, revoke it in BotFather and generate a new token.

## 2. Find Your Chat ID

1. Open Telegram and send `/start` to your bot.
2. Open this URL in a browser, replacing the token:

```text
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates
```

3. Find `message.chat.id` in the JSON response.

## 3. Deploy the Edge Function

Install and log in to the Supabase CLI, then run:

```bash
supabase login
supabase link --project-ref uullrzbhntisaspcxltu
supabase functions deploy notify-telegram
```

The function URL for this project is:

```text
https://uullrzbhntisaspcxltu.supabase.co/functions/v1/notify-telegram
```

If this URL returns `404 Requested function was not found`, the Edge Function has not been deployed to this Supabase project yet.

## 4. Add Function Secrets

In Supabase Dashboard, open Project Settings > Edge Functions > Secrets, then add:

```text
TELEGRAM_BOT_TOKEN=<your-new-telegram-bot-token>
TELEGRAM_CHAT_ID=<your-chat-id>
PARTNER_LETTERS_WEBHOOK_SECRET=<make-a-long-random-password>
```

## 5. Create the Database Webhook

Open Supabase Dashboard > Database > Webhooks > Create webhook.

Use these settings:

```text
Name: partner_letters_telegram
Table: public.partner_letters
Events: Insert
Type: HTTP Request
Method: POST
URL: https://<project-ref>.supabase.co/functions/v1/notify-telegram
Headers:
  Content-Type: application/json
  x-webhook-secret: <same value as PARTNER_LETTERS_WEBHOOK_SECRET>
```

Save the webhook, then submit a letter from the website.

If a manual POST to the function returns `{"ok":true}` but the website insert does not notify Telegram, the function and Telegram bot are working. Recheck the Database Webhook event and make sure the `x-webhook-secret` header matches `PARTNER_LETTERS_WEBHOOK_SECRET`.
