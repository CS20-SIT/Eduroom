const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  const transportOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false
  }
  if(process.env.NODE_ENV === 'production'){
    transportOptions.secure = true
    transportOptions.auth = {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    }
  }
  const transporter = nodemailer.createTransport(transportOptions)
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: options.htmlMessage,
  }
  const info = await transporter.sendMail(message)

  console.log('Message sent: %s', info.messageId)
}

module.exports = sendEmail
