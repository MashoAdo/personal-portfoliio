const express = require("express");
const compression = require("compression");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// render home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// post request to receive data from the form and send information to my email
app.post("/email", (req, res) => {
  // get input from the form and use the info in the mailOptions of nodemailer
  const { email, message } = req.body;

  // configure mail options with form data
  const mailOptions = {
    from: `mashoado@gmail.com`,
    to: "mashoado@gmail.com",
    subject: "Employers from portfolio",
    text: `${(message, email)}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (!error) {
      transporter.close();
    }
    res.json({ status: 400, success: false, message: "Failed sending email" });
  });
  res.json({ status: 200, success: true, message: "Email successfully sent" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
