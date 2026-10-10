# Email Setup Guide for Durga Earthmovers

This guide explains how to configure email functionality for the contact form.

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Click "Select app" → Choose "Mail"
3. Click "Select device" → Choose "Other (Custom name)"
4. Enter "Durga Earthmovers" as the name
5. Click "Generate"
6. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### Step 3: Configure Environment Variables

Add the following to your `server/.env` file:

```env
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
COMPANY_EMAIL=your-company-email@gmail.com
COMPANY_PHONE=your-phone-number
COMPANY_WHATSAPP=your-whatsapp-number
```

**Important:**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: The 16-character app password (NOT your regular password)
- `COMPANY_EMAIL`: Where you want to receive booking notifications
- `COMPANY_PHONE`: Your business phone number
- `COMPANY_WHATSAPP`: Your WhatsApp number

### Step 4: Test Email Functionality

1. Start the server:
```bash
cd server
npm start
```

2. Submit a test booking through the contact form

3. Check:
   - Your company email for the booking notification
   - The customer's email for the confirmation email

## Alternative Email Providers

### Outlook/Hotmail

1. Enable 2-Factor Authentication
2. Generate App Password
3. Update email service configuration in `server/utils/emailService.js`:

```javascript
const transporter = nodemailer.createTransporter({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP

If using a custom SMTP server:

```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-server.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Email Templates

### Company Notification Email

When a customer books a service, you'll receive:
- Customer name, phone, email
- Company name (if provided)
- Project type
- Message
- Submission timestamp

### Customer Confirmation Email

Customers receive:
- Personalized greeting
- Their booking details
- Expected response time (24-48 hours)
- Contact information for immediate assistance

## Troubleshooting

### "Invalid login" Error

- Check that you're using the App Password, not your regular password
- Verify 2-Factor Authentication is enabled
- Ensure the email address is correct

### Emails Not Sending

- Check server logs for error messages
- Verify SMTP credentials
- Check firewall settings (port 587/465)
- Ensure internet connectivity

### Emails Going to Spam

- Add SPF records to your domain DNS
- Configure DKIM authentication
- Monitor email reputation
- Check email content for spam triggers

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use App Passwords** instead of regular passwords
3. **Rotate passwords regularly**
4. **Monitor email usage** for unusual activity
5. **Limit email sending rate** to avoid being blocked

## Testing in Development

For local testing without sending real emails, you can use a service like [Mailtrap](https://mailtrap.io):

```javascript
const transporter = nodemailer.createTransporter({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "your-mailtrap-username",
    pass: "your-mailtrap-password",
  },
});
```

## Production Considerations

1. **Use a dedicated email service** for production (SendGrid, Mailgun, etc.)
2. **Set up email queueing** for high volume
3. **Implement retry logic** for failed sends
4. **Monitor email deliverability**
5. **Set up bounce handling**

## Email Service Providers

For production, consider using:
- **SendGrid** - Free tier available
- **Mailgun** - Free tier available
- **AWS SES** - Pay-as-you-go
- **Postmark** - Transactional email focused

Each has better deliverability and analytics than free email providers.

## Support

For issues with:
- **Gmail App Passwords**: [Google Support](https://support.google.com/accounts/answer/185833)
- **Nodemailer**: [Nodemailer Documentation](https://nodemailer.com/)
- **Email Deliverability**: Contact your email service provider