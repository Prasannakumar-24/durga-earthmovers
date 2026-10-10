# Contact Form Setup - Durga Earthmovers

## Changes Made

### 1. Updated Contact Information
- **Phone:** +91 9959290339 or +91 72072 82889
- **Email:** venkatadurgaprasad986@gmail.com
- **Address:** Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001
- **WhatsApp:** +91 9959290339

### 2. Contact Form Changes
- **Removed:** "Company" field
- **Added:** "Location" field (required)
- **Functionality:** All messages will be sent to venkatadurgaprasad986@gmail.com

### 3. Click Functionality Implemented
- **Phone:** Click to dial (+91 9959290339 - first number)
- **Email:** Click to open email client (venkatadurgaprasad986@gmail.com)
- **Address:** Click to open in Google Maps
- **WhatsApp:** Click to open WhatsApp chat

## Email Setup Instructions

### Step 1: Enable Gmail 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
4. Click "Select app" → Choose "Mail"
5. Click "Select device" → Choose "Other (Custom name)"
6. Enter "Durga Earthmovers" as the name
7. Click "Generate"
8. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### Step 2: Update Server Environment
In `server/.env`, replace:
```
EMAIL_PASS=your-app-specific-password
```
With your actual 16-character app password from Gmail.

### Step 3. Start MongoDB
The server currently uses local MongoDB. To start MongoDB:
```bash
# On Windows, you may need to start MongoDB service manually
# Or use MongoDB Atlas for cloud database
```

### Step 4. Test the Contact Form
1. Start the server: `cd server && npm start`
2. Start the client: `cd client && npm run dev`
3. Fill out the contact form with your location
4. Submit the form
5. Check your email (venkatadurgaprasad986@gmail.com) for the booking notification

## Email Flow

### Company Notification (to venkatadurgaprasad986@gmail.com)
When a customer submits the form, you'll receive:
- Customer name, phone, email
- Project location
- Project type
- Message
- Direct links to call/email the customer

### Customer Confirmation Email
Customers receive:
- Personalized greeting
- Their booking details
- Your contact information
- Expected response time (24-48 hours)
- Your address and phone numbers

## MongoDB Configuration

### Current Setup
- Using local MongoDB: `mongodb://localhost:27017/durga-earthmovers`
- Contact form submissions are stored in MongoDB
- Email is sent regardless of MongoDB status

### For Production
Consider using MongoDB Atlas:
1. Create free account at mongodb.com
2. Create cluster
3. Get connection string
4. Update `server/.env` with your MongoDB Atlas connection string

## Troubleshooting

### MongoDB Connection Error
If you see "MongoDB Connected" error, ensure MongoDB is running locally or use MongoDB Atlas.

### Email Not Sending
1. Verify Gmail App Password is correct
2. Check internet connection
3. Ensure 2-Factor Authentication is enabled
4. Check server logs for error messages

### Form Submission Error
1. Check if server is running on port 5000
2. Verify API URL in client `.env`
3. Check browser console for errors
4. Ensure all required fields are filled

## Contact Form Fields

### Required Fields:
- Name *
- Phone *
- Email *
- Location *
- Message *

### Optional Fields:
- Project Type (dropdown selection)

## Testing Checklist

- [ ] Phone number clicks to dial
- [ ] Email clicks to open email client
- [ ] Address clicks to open Google Maps
- [ ] Form submission works
- [ ] Email notification received
- [ ] Customer confirmation email sent
- [ ] All form fields validated correctly

## Contact Information Display

The contact information is displayed in:
- Footer (phone, email, address)
- Contact page (phone, email, address, Google Maps link)
- WhatsApp button (floating)
- Email confirmations

## Privacy Note

All contact form submissions are:
- Stored in MongoDB (if configured)
- Sent to venkatadurgaprasad986@gmail.com
- Used only for business purposes
- Not shared with third parties

## Next Steps

1. Set up Gmail App Password
2. Update server `.env` with app password
3. Test contact form submission
4. Verify email delivery
5. Deploy to production server
6. Configure production MongoDB (optional)

For detailed email setup instructions, see `docs/EMAIL-SETUP.md`