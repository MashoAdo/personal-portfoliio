const express = require("express")
const path = require("path")
const sendEmail = require("./utils/mail")

const app = express()


const PORT = process.env.PORT || 8080

// middlewares
app.use(express.urlencoded({extended:false}))
app.use("/public", express.static(path.join(__dirname , "public")))

console.log(__dirname)

app.set("view engine", "ejs")

// render home page
app.get("/",(req,res) =>{
    res.render("index.ejs")
})

app.post("/email", (req,res) =>{
  // get input from form
const {email,message} = (req.body)


const to = "mashoado@gmail.com"
const from = "nache.masho@students.jkuat.ac.ke"
const subject = "Employer  Message"

const output = `
<h3>New message from ${email}</h3>
<p>${message}</p>
`

sendEmail(to,from,subject, output)
  res.redirect("/")
})



app.listen(PORT,() =>{
    console.log(`Listening on port 8080`)
})