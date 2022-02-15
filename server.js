const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { google } = require("googleapis");

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

console.log(process.env.EMAIL_USER);

app.set("view engine", "ejs");

// render home page
app.get("/", (req, res) => {
	res.render("index.ejs");
});

// Creating Oauth2 to enable sending the email safely
const OAuth2 = google.auth.OAuth2;

// setup auth2Client
const OAuth2Client = new OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET
	// "https://developers.google.com/oauthplayground"
);
// // get access token using refresh token
OAuth2Client.setCredentials({
	refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = OAuth2Client.getAccessToken();
// create nodemailer transporter
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: process.env.EMAIL_USER,
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		refresh_token: process.env.REFRESH_TOKEN,
		accessToken: process.env.ACCESS_TOKEN || accessToken,
	},
	tls: {
		rejectUnauthorized: false,
	},
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
		// use ternary operator
		error ? console.log(error) : transporter.close();
	});
	res.send("success");
});

app.listen(PORT, () => {
	console.log(`Listening on port 8000`);
});
