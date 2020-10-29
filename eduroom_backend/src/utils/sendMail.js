const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  if (process.env.SMTP_SECURE === 'true') {
    transport_options = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    }
  } else {
    transport_options = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
    }
  }
  const transporter = nodemailer.createTransport(transport_options)
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  }
  const info = await transporter.sendMail(message)

  console.log('Message sent: %s', info.messageId)
}

module.exports = sendEmail
