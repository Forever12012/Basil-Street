const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "resto_basil",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query =
    "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
  const values = [name, email, subject, message];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return res
        .status(500)
        .json({ message: "Failed to store contact details" });
    }

    // Email content
    const msg = {
      to: email,
      from: "tusharharinkhede10@gmail.com",
      subject: "We have received your query",
      html: `
        <html>
          <body>
            <h2>Hello ${name},</h2>
            <p>Thank you for reaching out to us!</p>
            <p>We have received your query and our team will get back to you shortly.</p>
            <h3>Query Details:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p>Best regards,</p>
            <p>The Basil Street Team</p>
            <footer>
              <p style="color: #555;">Basil Street, 123 St, Pune, India</p>
              <p style="color: #555;">Email: contact@example.com | Phone: +1234567890</p>
            </footer>
          </body>
        </html>
      `,
    };

    // Send email
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: "Query received and email sent." });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ message: "Query received but failed to send email." });
      });
  });
});

app.post("/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const query = "INSERT INTO news_letter (email) VALUES (?)";
  const values = [email];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return res
        .status(500)
        .json({ message: "Failed to store contact details" });
    }

    // Email content
    const msg = {
      to: email,
      from: "tusharharinkhede10@gmail.com",
      subject: "We have received your subscription",
      html: `
        <html>
          <body>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>We have received your email address and will keep you updated with our latest news.</p>
            <p>Best regards,</p>
            <p>The Basil Street Team</p>
            <footer>
              <p style="color: #555;">Basil Street, 123 St, Pune, India</p>
              <p style="color: #555;">Email: contact@example.com | Phone: +1234567890</p>
            </footer>
          </body>
        </html>
      `,
    };

    // Send email
    sgMail
      .send(msg)
      .then(() => {
        res
          .status(200)
          .json({ message: "Subscription received and email sent." });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ message: "Subscription received but failed to send email." });
      });
  });
});

app.post("/booking", (req, res) => {
  const { name, email, dateTime, peopleCount, specialRequest } = req.body;

  if (!name || !email || !dateTime || !peopleCount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query =
    "INSERT INTO booking (name, email, book_date, people_count, special_request) VALUES (?, ?, ?, ?, ?)";

  const values = [name, email, dateTime, peopleCount, specialRequest || null];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      return res
        .status(500)
        .json({ message: "Failed to store reservation details" });
    }

    // Email content
    const msg = {
      to: email,
      from: "tusharharinkhede10@gmail.com",
      subject: "We have received your reservation details",
      html: `
        <html>
          <body>
          <h2>Hello ${name},</h2>
            <p>Thank you for reserving a table at our restaurant!</p>
            <p>We have received your reservation details and will contact you soon.</p>
            <p>Best regards,</p>
            <p>The Basil Street Team</p>
            <footer>
              <p style="color: #555;">Basil Street, 123 St, Pune, India</p>
              <p style="color: #555;">Email: contact@example.com | Phone: +1234567890</p>
            </footer>
          </body>
        </html>
      `,
    };

    // Send email
    sgMail
      .send(msg)
      .then(() => {
        res
          .status(200)
          .json({ message: "Reservation received and email sent." });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ message: "Reservation received but failed to send email." });
      });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
