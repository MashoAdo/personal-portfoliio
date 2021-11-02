const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")
require('dotenv').config()
const {google} = require('googleapis')
const { raw } = require("express")

const app = express()

const PORT = process.env.PORT || 8000

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/public", express.static(path.join(__dirname , "public")))


app.set("view engine", "ejs")

// render home page
app.get("/",(req,res) =>{
    res.render("index.ejs")
})

// app.post("/token" )
// Creating Oauth2 to enable sending the email safely
const OAuth2 = google.auth.OAuth2;

// setup auth2Client
const oauth2Client = new OAuth2(
  "1056257353442-644b1aqhj4tcvc3prf60ruakef36lq9n.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
)
// // get access token using refresh token
oauth2Client.setCredentials({
  refresh_token: '1//044-Gm99qmea8CgYIARAAGAQSNwF-L9Ir8MWx2ntWGhUojRMFhe_-SwAfblqgs2rwrJFxWaRKdjt7ICwSnV-owaBKtioIMx_Ht-w'
})

const accessToken = oauth2Client.getAccessToken()
// create nodemailer transporter
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      refresh_token:"1//044-Gm99qmea8CgYIARAAGAQSNwF-L9Ir8MWx2ntWGhUojRMFhe_-SwAfblqgs2rwrJFxWaRKdjt7ICwSnV-owaBKtioIMx_Ht-w",
      accessToken: accessToken
  },
  tls: {
    rejectUnauthorized: false
}
});


// post request to receive data from the form and send information to my email
app.post("/email", (req,res) =>{
// get input from the form and use the info in the mailOptions of nodemailer
const {email, message} = req.body

  // configure mail options with form data 
  const mailOptions = {
    from: email,
    to: "mashoado@gmail.com",
    subject: "Employers from portfolio",
    text: message + " " + email

  }

  transporter.sendMail(mailOptions, (error, info) => {
    // use ternary operator
    error? console.log(error) : res.send("success")
  })
  transporter.close()
  // res.end()
 })



app.listen(PORT,() =>{
    console.log(`Listening on port 8000`)
})