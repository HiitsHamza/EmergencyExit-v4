import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
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

    const safeEmail = escapeHtml(email)

    // Professional welcome email template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to The Emergency Exit</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #181e3a; padding: 40px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 1px;">THE EMERGENCY EXIT</h1>
                    <p style="margin: 12px 0 0 0; color: #e8eaef; font-size: 16px; font-weight: 300;">Welcome to our community</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="margin: 0 0 20px 0; color: #181e3a; font-size: 24px; font-weight: bold;">Thank you for subscribing!</h2>
                    
                    <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                      We're thrilled to have you join us on this literary journey. You've successfully subscribed to <strong style="color: #181e3a;">The Emergency Exit</strong> podcast newsletter.
                    </p>
                    
                    <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                      You'll now receive updates about:
                    </p>
                    
                    <ul style="margin: 0 0 30px 0; padding-left: 20px; color: #666666; font-size: 16px; line-height: 1.8;">
                      <li style="margin-bottom: 10px;">New episode releases and announcements</li>
                      <li style="margin-bottom: 10px;">Behind-the-scenes content and insights</li>
                      <li style="margin-bottom: 10px;">Special features and guest highlights</li>
                      <li style="margin-bottom: 10px;">Literary recommendations and discussions</li>
                    </ul>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #181e3a; margin-bottom: 30px;">
                      <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6; font-style: italic;">
                        "We do rummage into the rabbit holes of fiction and the arts discovering how we, as readers and viewers, read beyond the lines."
                      </p>
                    </div>
                    
                    <p style="margin: 0; color: #666666; font-size: 16px; line-height: 1.6;">
                      Get ready to explore the magic casement on imaginative thought. We can't wait to share our conversations with you!
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 12px 0; color: #666666; font-size: 14px; line-height: 1.5;">
                      <strong style="color: #181e3a;">The Emergency Exit Podcast</strong>
                    </p>
                    <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                      A light hearted but sharp minded podcast that centres around the pleasures of reading
                    </p>
                    <p style="margin: 16px 0 0 0; color: #999999; font-size: 11px;">
                      You're receiving this because you subscribed at <a href="https://theemergencyexitpodcast.com" style="color: #181e3a; text-decoration: none;">theemergencyexitpodcast.com</a>
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

    // Create timestamp for unique subject lines
    const timestamp = new Date().toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    })

    // TODO: Re-enable welcome email after domain verification
    // Send welcome email to subscriber (disabled for now - requires verified domain)
    // const { data, error } = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: safeEmail,
    //   subject: `Welcome to The Emergency Exit Podcast Newsletter - ${timestamp}`,
    //   html: emailHtml,
    // })

    // if (error) {
    //   console.error('Resend error:', error)
    //   return NextResponse.json(
    //     { error: 'Failed to subscribe. Please try again.' },
    //     { status: 500 }
    //   )
    // }

    // Send notification to admin (this works with test account)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'theemergencyexitpodcast@gmail.com',
      subject: `New Newsletter Subscription - ${timestamp}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="background-color: #181e3a; padding: 30px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold; letter-spacing: 1px;">THE EMERGENCY EXIT</h1>
                      <p style="margin: 8px 0 0 0; color: #e8eaef; font-size: 14px; font-weight: 300;">New Newsletter Subscription</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px;">
                      <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">A new subscriber has joined the newsletter:</p>
                      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #181e3a;">
                        <p style="margin: 0; color: #333333; font-size: 18px; font-weight: 600;">${safeEmail}</p>
                      </div>
                      <p style="margin: 20px 0 0 0; color: #999999; font-size: 12px;">Subscription time: ${timestamp}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
