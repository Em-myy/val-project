import dotenv from "dotenv";
dotenv.config();

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ifa010906@gmail.com",
    pass: "yawn blfr sxwu levu",
  },
});

app.post("/api/accepted", async (req, res) => {
  try {
    const mailOptions = {
      from: "ifa010906@gmail.com",
      to: "ifa010906@gmail.com",
      subject: "SHE SAID YES! 💍💖",
      text: "Time to go and buy ring oo! She just clicked YES!",
      html: "<h1>CONGRATULATIONS! 🥳</h1><p>She accepted your proposal. Time to celebrate!</p>",
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ msg: "Sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "Error sending mail" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server running on port 3000");
});
