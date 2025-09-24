import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      console.error("Champs manquants:", { name: !!name, email: !!email, message: !!message })
      return NextResponse.json({ ok: false, error: "Champs requis manquants." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !to) {
      console.error("Variables d'environnement manquantes:", { 
        hasApiKey: !!apiKey, 
        hasToEmail: !!to 
      })
      return NextResponse.json({ ok: false, error: "Configuration email manquante." }, { status: 500 })
    }

    const html = `<!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nouveau message de ${name}</title>
      </head>
      <body style="margin:0;padding:0;background:#f6f8fb;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f8fb;padding:24px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 6px 20px rgba(2,6,23,0.06);overflow:hidden">
                <tr>
                  <td style="padding:24px 28px;background:#0b5cab;color:#ffffff">
                    <h1 style="margin:0;font-size:20px;line-height:28px">Nouveau message depuis le portfolio</h1>
                    <p style="margin:4px 0 0;font-size:13px;opacity:.9">Vous avez reçu une nouvelle demande de contact.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 28px">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:22px">
                      <tr>
                        <td style="width:140px;color:#475569;font-weight:600">Nom</td>
                        <td style="color:#0f172a">${name}</td>
                      </tr>
                      <tr>
                        <td style="width:140px;color:#475569;font-weight:600">Email</td>
                        <td><a href="mailto:${email}" style="color:#0b5cab;text-decoration:none">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="width:140px;color:#475569;font-weight:600;vertical-align:top;padding-top:8px">Message</td>
                        <td style="white-space:pre-line;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;color:#0f172a">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
                      </tr>
                    </table>
                    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px">
                      Répondez directement à cet email pour contacter ${name}.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 28px;background:#f1f5f9;color:#64748b;font-size:12px;text-align:center">© ${new Date().getFullYear()} Portfolio</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <onboarding@resend.dev>`,
        to: [to],
        reply_to: email,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error("Erreur Resend API:", { status: res.status, error: errText })
      return NextResponse.json({ ok: false, error: errText || "Erreur d'envoi" }, { status: 502 })
    }

    const result = await res.json()
    console.log("Email envoyé avec succès:", result)
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error("Erreur serveur:", e)
    return NextResponse.json({ ok: false, error: e?.message || "Erreur serveur" }, { status: 500 })
  }
}


