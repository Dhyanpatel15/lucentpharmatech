import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    // Basic Validation
    if (!name || !email || !subject) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (Name, Email, Subject).'
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Configure SMTP Transporter
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER || 'panchalshravand@gmail.com';
    const pass = process.env.SMTP_PASS || 'lxuq vjev hwbe kyzx';

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Primary and Secondary Recipients
    const recipients = process.env.RECIPIENT_EMAILS 
      ? process.env.RECIPIENT_EMAILS.split(',').map(e => e.trim()) 
      : ['panchalshravand@gmail.com', 'shravanog01@gmail.com'];

    const mailFrom = process.env.MAIL_FROM || `"Lucent Pharmatech Website" <${user}>`;

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Email HTML Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fd; margin: 0; padding: 20px; color: #1d2864; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #083f8e, #24b7d3); color: #ffffff; padding: 30px 24px; text-align: center; }
          .header h1 { margin: 0 0 6px; font-size: 24px; letter-spacing: 0.5px; }
          .header p { margin: 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 28px 24px; }
          .field-group { margin-bottom: 20px; }
          .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #6f7886; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 16px; color: #1a202c; background: #f8fafc; padding: 12px 16px; border-radius: 6px; border: 1px solid #edf2f7; line-height: 1.5; }
          .message-box { font-size: 15px; color: #1a202c; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #24b7d3; white-space: pre-wrap; line-height: 1.6; }
          .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .badge { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0369a1; border-radius: 999px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Consultancy Request</h1>
            <p>Lucent Pharmatech Website Contact Form</p>
          </div>
          <div class="content">
            <div style="margin-bottom: 20px; text-align: right;">
              <span class="badge">Received: ${submissionTime} IST</span>
            </div>
            
            <div class="field-group">
              <div class="label">Full Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>

            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value">${phone ? `<a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</div>
            </div>

            <div class="field-group">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>

            <div class="field-group">
              <div class="label">Client Message</div>
              <div class="message-box">${message ? message.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '<span style="color: #94a3b8; font-style: italic;">No additional message entered.</span>'}</div>
            </div>
          </div>
          <div class="footer">
            <p style="margin: 0 0 4px;">This email was automatically delivered to <strong>panchalshravand@gmail.com</strong> and <strong>shravanog01@gmail.com</strong>.</p>
            <p style="margin: 0;">Hit "Reply" directly in your email client to respond to <strong>${name}</strong> (${email}).</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Mail Options
    const mailOptions = {
      from: mailFrom,
      to: recipients,
      replyTo: `"${name}" <${email}>`,
      subject: `[Web Inquiry] ${subject} - from ${name}`,
      text: `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message || 'N/A'}\n\nSent: ${submissionTime}`,
      html: htmlContent
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Your request has been sent successfully.'
    });

  } catch (error) {
    console.error('Error sending email via SMTP:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please verify SMTP server settings or try again later.',
      error: error.message
    });
  }
}
