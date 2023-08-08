const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

// API endpoint to handle contact form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Predefined admin email (change this to your admin's email)
  const adminEmail = 'admin@example.com';

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Set up your email service provider settings here
    // For example, using Gmail:
    service: 'Gmail',
    auth: {
      user: 'mohitmungra2003@gmail.com',
      pass: 'Mahipatel1243',
    },
  });

  // Mail options
  const mailOptions = {
    from: email,
    to: adminEmail,
    subject: 'New Contact Us Submission',
    text: `Mohit: ${name}\nmohitmungra2003@gmail.com: ${email}\nHello: ${message}`,
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'Email sent successfully' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
