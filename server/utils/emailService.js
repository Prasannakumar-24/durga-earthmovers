const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-app-specific-password') {
    console.log('Email credentials not configured. Email will not be sent.');
    return null;
  }

  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email notification
const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.log('Email not sent - credentials not configured');
      return false;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "venkatadurgaprasad986@gmail.com", // Your specific email
      subject: `New Service Booking - ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f4c430; border-bottom: 2px solid #f4c430; padding-bottom: 10px;">New Service Booking - Durga Earthmovers</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Phone:</strong> ${contactData.phone}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Location:</strong> ${contactData.location}</p>
            <p><strong>Project Type:</strong> ${contactData.projectType || 'N/A'}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #f4c430;">
            <h3 style="margin-top: 0; color: #333;">Customer Contact Information:</h3>
            <p><strong>Direct Call:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Project Location:</strong> ${contactData.location}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This message was sent from the Durga Earthmovers website contact form.<br>
            Our Location: Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Send confirmation email to customer
const sendConfirmationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.log('Confirmation email not sent - credentials not configured');
      return false;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: 'Thank you for your booking request - Durga Earthmovers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f4c430; border-bottom: 2px solid #f4c430; padding-bottom: 10px;">Thank You for Your Booking Request</h2>
          
          <p>Dear ${contactData.name},</p>
          
          <p>Thank you for contacting Durga Earthmovers. We have received your service booking request and will get back to you within 24-48 hours.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Request Details:</h3>
            <p><strong>Project Location:</strong> ${contactData.location}</p>
            <p><strong>Project Type:</strong> ${contactData.projectType || 'General Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <p>If you need immediate assistance, please contact us via:</p>
          <ul>
            <li>Phone: +91 9959290339 or +91 72072 82889</li>
            <li>WhatsApp: +91 9959290339</li>
            <li>Email: venkatadurgaprasad986@gmail.com</li>
          </ul>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Our Location:</h3>
            <p>Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Best regards,<br>
            Durga Earthmovers Team<br>
            Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail,
};