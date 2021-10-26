const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")
require('dotenv').config()
const {google} = require('googleapis')
const { raw } = require("express")

const app = express()

const PORT = process.env.PORT || 8080

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/public", express.static(path.join(__dirname , "public")))


app.set("view engine", "ejs")

// render home page
app.get("/",(req,res) =>{
    res.render("index.ejs")
})




app.post("/email", (req,res) =>{
// get input from the form and use the info in the mailOptions of nodemailer
// Creating Oauth2 to enable sending the email safely
const OAuth2 = google.auth.OAuth2

// setup auth2Client
const oauth2Client = new OAuth2(
  "19765224990-8gg94bta37mp549tft4thi1rk4s7q919.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"

)
// get access token using refresh token
oauth2Client.setCredentials({
  refresh_token: '1//04JX9_0CEc7bPCgYIARAAGAQSNwF-L9IrGvEt4dc69DArFbYqxP3JgpzVFSH2lyns9CzDOprKr9q3Vy_sSeWYYs6MimHMXEyfjA4'
})

const accessToken = oauth2Client.getAccessToken()

// create nodemailer transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      type: 'OAuth2',
      user: 'mashoado@gmail.com',
      client_id:"19765224990-8gg94bta37mp549tft4thi1rk4s7q919.apps.googleusercontent.com",
      client_secret:"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",
      refresh_token: '1//04JX9_0CEc7bPCgYIARAAGAQSNwF-L9IrGvEt4dc69DArFbYqxP3JgpzVFSH2lyns9CzDOprKr9q3Vy_sSeWYYs6MimHMXEyfjA4',
      accessToken:'ya29.a0ARrdaM8bpFzQevbSmZRQo_ML3ZRfW6Tlq1PiOzYElrnecSWOTi9bzcEDpcddkF_y-v0_MOibnOHGHS3_DiyAQH2FrpCFISVJfvfYUmQcSkncH_3NCvrfGE9O6hNtsBFQtWoEsGTLOodkuInYtJkFvw-Vkkga ' || accessToken
  },
  tls: {
    rejectUnauthorized: false
}
});

  // configure mail options with form data 
  const mailOptions = {
    from: req.body.email,
    to: "mashoado@gmail.com",
    subject: "Employers from portfolio",
    text: req.body.message + "" +req.body.email

  }

  transporter.sendMail(mailOptions, (error, info) => {
   error ? res.write("not succesful"):  res.send("success")
  })
  transporter.close()
 })



app.listen(PORT,() =>{
    console.log(`Listening on port 8080`)
})