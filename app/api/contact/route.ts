import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }
      return text.replace(/[&<>"']/g, m => map[m])
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    // Professional email template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #181e3a; padding: 30px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold; letter-spacing: 1px;">THE EMERGENCY EXIT</h1>
                    <p style="margin: 8px 0 0 0; color: #e8eaef; font-size: 14px; font-weight: 300;">New Contact Form Submission</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 30px 0; color: #666666; font-size: 16px; line-height: 1.6;">You have received a new message from your website contact form:</p>
                    
                    <!-- Info Box -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background-color: #f8f9fa; border-left: 4px solid #181e3a; border-radius: 4px;">
                      <tr>
                        <td style="padding: 20px;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 8px 0;">
                                <strong style="color: #181e3a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Name</strong>
                                <span style="color: #333333; font-size: 16px;">${safeName}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; border-top: 1px solid #e0e0e0;">
                                <strong style="color: #181e3a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Email</strong>
                                <a href="mailto:${safeEmail}" style="color: #181e3a; font-size: 16px; text-decoration: none;">${safeEmail}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message Section -->
                    <div style="margin-top: 30px;">
                      <strong style="color: #181e3a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 12px;">Message</strong>
                      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border: 1px solid #e0e0e0;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${safeMessage}</p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0; color: #666666; font-size: 12px; line-height: 1.5;">
                      This email was sent from the contact form on <a href="https://theemergencyexitpodcast.com" style="color: #181e3a; text-decoration: none;">theemergencyexitpodcast.com</a>
                    </p>
                    <p style="margin: 8px 0 0 0; color: #999999; font-size: 11px;">
                      You can reply directly to this email to respond to ${safeName}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Create unique subject line with timestamp to prevent email threading
    const timestamp = new Date().toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    })
    const subject = `Contact Form: Message from ${safeName} - ${timestamp}`

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'theemergencyexitpodcast@gmail.com',
      subject: subject,
      html: emailHtml,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
