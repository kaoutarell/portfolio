// api/contact.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    const mail = {
      to: process.env.RECEIVER_EMAIL,
      from: process.env.SENDER_EMAIL,
      subject: "Contact Form Submission - Portfolio",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };

    try {
      await sgMail.send(mail);
      return res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: "Failed to send message" });
    }
  } else {
    return res.status(405).json({ status: "Method Not Allowed" });
  }
};
