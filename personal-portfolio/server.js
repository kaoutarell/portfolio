require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

console.log("I started");

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Server setup
const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Allow your frontend
  methods: ["GET", "POST"], // Allow only specific methods
  allowedHeaders: ["Content-Type"], // Allow specific headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

app.listen(5001, () => console.log("Server Running"));

router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    to: process.env.RECEIVER_EMAIL, // Your email address
    from: process.env.SENDER_EMAIL, // Verified sender email in SendGrid
    subject: "Contact Form Submission - Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  sgMail
    .send(mail)
    .then(() => {
      res.json({ code: 200, status: "Message Sent" });
    })
    .catch((error) => {
      console.error(error);
      res.json({ code: 500, status: "Failed to send message" });
    });
});
