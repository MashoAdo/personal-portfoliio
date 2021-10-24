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
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user:"mashoado@gmail.com",
      pass: "134637524"
    },
    tls:{
      rejectUnauthorized: false
    }
  })

  // configure mail options with form data 
  const mailOptions = {
    from: req.body.email,
    to: "mashoado@gmail.com",
    subject: "Employers from portfolio",
    text: req.body.message + req.body.email

  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
      res.send("An error occurred please retry again")

    }else{
      console.log("success")
    }
  })



})



app.listen(PORT,() =>{
    console.log(`Listening on port 8080`)
})