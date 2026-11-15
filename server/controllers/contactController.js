import nodemailer from "nodemailer";
import mongoose from "mongoose";
import ContactInquiry from "../models/ContactInquiry.js";

const submitContact = async (req, res) => {
  try {
    console.log("CONTACT REQUEST BODY:", req.body);

    const {
      name,
      phone,
      email,
      location,
      projectType,
      message,
    } = req.body;

    // -----------------------------
    // 1. VALIDATE REQUIRED FIELDS
    // -----------------------------

    if (!name || !phone || !email || !location) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const enquiryMessage =
      message || `Project type: ${projectType || "Not specified"}`;

    // -----------------------------
    // 2. SAVE ENQUIRY TO MONGODB (with fallback)
    // -----------------------------

    let inquiry = null;

    // Skip the DB write when MongoDB isn't connected to fail fast
    // instead of waiting for the mongoose buffer timeout.
    if (mongoose.connection.readyState === 1) {
      try {
        inquiry = await ContactInquiry.create({
          name,
          phone,
          email,
          location,
          projectType: projectType || "",
        });
        console.log("Inquiry saved successfully:", inquiry._id);
      } catch (dbError) {
        console.log("MongoDB save failed, but continuing with email:", dbError.message);
      }
    } else {
      console.log("MongoDB not connected, skipping database save.");
    }

    // -----------------------------
    // 3. CREATE EMAIL TRANSPORTER
    // -----------------------------

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-app-specific-password') {
      console.log('Email credentials not configured. Email will not be sent.');
      
      return res.status(201).json({
        success: true,
        message: "Service booking submitted successfully. Email notifications are not configured yet.",
        inquiryId: inquiry?._id,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // -----------------------------
    // 4. SEND EMAIL
    // -----------------------------

    await transporter.sendMail({
      from: `"DURGA EARTHMOVERS" <${process.env.EMAIL_USER}>`,

      to: process.env.COMPANY_EMAIL || "venkatadurgaprasad986@gmail.com",

      replyTo: email,

      subject: "New Service Booking - Durga Earthmovers",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          padding: 25px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #ffffff;
        ">

          <h2 style="
            margin-top: 0;
            color: #f4c430;
            border-bottom: 2px solid #f4c430;
            padding-bottom: 10px;
          ">
            New Service Booking - Durga Earthmovers
          </h2>

          <p style="color: #555;">
            You have received a new service booking request.
          </p>

          <hr style="
            border: none;
            border-top: 1px solid #ddd;
          ">

          <h3 style="color: #222;">
            Customer Details
          </h3>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Phone:</strong>
            <a href="tel:${phone}">
              ${phone}
            </a>
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>

          <p>
            <strong>Location:</strong>
            ${location}
          </p>

          <p>
            <strong>Project Type:</strong>
            ${projectType || "Not provided"}
          </p>

          <h3 style="color: #222;">
            Message
          </h3>

          <div style="
            background: #f5f5f5;
            padding: 15px;
            border-radius: 6px;
            white-space: pre-wrap;
          ">
            ${enquiryMessage}
          </div>

          <hr style="
            border: none;
            border-top: 1px solid #ddd;
            margin-top: 25px;
          ">

          <p style="
            font-size: 12px;
            color: #777;
          ">
            DURGA EARTHMOVERS<br>
            Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001
          </p>

        </div>
      `,
    });

    console.log("Email sent successfully");

    // -----------------------------
    // 5. SUCCESS RESPONSE
    // -----------------------------

    return res.status(201).json({
      success: true,
      message: "Service booking submitted successfully. You will receive a confirmation email shortly.",
      inquiryId: inquiry?._id,
    });

  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    });
  }
};

export default submitContact;