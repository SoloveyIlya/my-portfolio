import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, message } = body;

    if (!name || !contact) {
      return NextResponse.json({ error: "Имя и контакт обязательны" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: "Telegram не настроен" }, { status: 500 });
    }

    const text = [
      "📩 *Новая заявка с сайта*",
      "",
      `👤 *Имя:* ${name}`,
      `📬 *Контакт:* ${contact}`,
      message ? `💬 *Сообщение:* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.json();
      console.error("Telegram error:", err);
      return NextResponse.json({ error: "Ошибка отправки в Telegram" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}
