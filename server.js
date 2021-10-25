const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8080

// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/public", express.static(path.join(__dirname , "public")))

// console.log(__dirname)

app.set("view engine", "ejs")

// render home page
app.get("/",(req,res) =>{
    res.render("index.ejs")
})

app.post("/email", (req,res) =>{
  // get input from the form and use the info in the mailOptions of mailgun
console.log(req.body.email)
// create nodemailer transporter
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'mashoado@gmail.com',
      client_id:"376291037680-r1ereu2t8jk90jboetpd9mg7ufde8h5a.apps.googleusercontent.com",
      client_secret:"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",
      project_id:"astral-depth-330108",
      auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"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",javascript_origins:["https://mashoado.herokuapp.com"]
      
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
    text: req.body.message + req.body.email

  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
      console.log(error)
      res.send("An error occurred please retry again")

    }else{
      console.log("success")
    }
  })



})



app.listen(PORT,() =>{
    console.log(`Listening on port 8080`)
})