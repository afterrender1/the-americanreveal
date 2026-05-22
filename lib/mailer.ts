import type { Article } from './articles'
import { getAllSubscribers } from './subscribers'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://americanreveal.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'newsletter@americanreveal.com'
const FROM_NAME = 'The American Reveal'

function buildEmailHtml(article: Article): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${article.title}</title>
</head>
<body style="margin:0;padding:0;background:#F0EDE6;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EDE6;padding:40px 0;">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#FFFFFF;max-width:620px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0A0A0A;padding:24px 36px;">
            <p style="margin:0;font-size:13px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:#FFFFFF;font-family:Georgia,serif;">
              The American Reveal
            </p>
          </td>
        </tr>

        <!-- Category -->
        <tr>
          <td style="padding:32px 36px 0;">
            <p style="margin:0;font-size:10px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:#B91C1C;">
              ${article.category}
            </p>
          </td>
        </tr>

        <!-- Title -->
        <tr>
          <td style="padding:12px 36px 0;">
            <h1 style="margin:0;font-size:26px;line-height:1.25;color:#0A0A0A;font-family:Georgia,serif;">
              ${article.title}
            </h1>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:16px 36px 0;">
            <div style="width:40px;height:2px;background:#B91C1C;"></div>
          </td>
        </tr>

        <!-- Excerpt -->
        <tr>
          <td style="padding:16px 36px 0;">
            <p style="margin:0;font-size:15px;line-height:1.65;color:#4A4A4A;">
              ${article.excerpt}
            </p>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:28px 36px;">
            <a href="${SITE_URL}/article/${article.slug}"
               style="display:inline-block;background:#0A0A0A;color:#FFFFFF;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 28px;">
              Read the Full Story →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="border-top:1px solid #E8E4DC;padding:20px 36px;">
            <p style="margin:0;font-size:11px;color:#9A9590;line-height:1.5;">
              You're receiving this because you subscribed to The American Reveal newsletter.<br/>
              <a href="${SITE_URL}" style="color:#9A9590;">Visit the site</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function sendNewsletterForArticle(article: Article): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return // skip silently if not configured

  const subscribers = await getAllSubscribers()
  if (subscribers.length === 0) return

  const { Resend } = await import('resend')
  const resend = new Resend(apiKey)

  const html = buildEmailHtml(article)
  const subject = `New Story: ${article.title}`

  // Resend free tier supports batch sending; send in groups of 50
  const BATCH = 50
  for (let i = 0; i < subscribers.length; i += BATCH) {
    const chunk = subscribers.slice(i, i + BATCH)
    await Promise.allSettled(
      chunk.map((sub) =>
        resend.emails.send({
          from: `${FROM_NAME} <${FROM_EMAIL}>`,
          to: sub.email,
          subject,
          html,
        })
      )
    )
  }
}
