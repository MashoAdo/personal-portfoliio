const sgMail = require ("@sendgrid/mail")
require("dotenv").config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY2)

const sendEmail = (to,from,subject,text) =>{
const msg = {
to,
from,
subject,
html: text,
    }

    sgMail.send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}


module.exports = sendEmail