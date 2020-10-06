const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.GATSBY_SENDGRID_MAIL)

exports.handler = async (event, context, callback) => {
  const { name, email, message } = JSON.parse(event.body)

  const msg = {
    to: process.env.GATSBY_PROLLC_CONTACT_EMAIL,
    from: process.env.GATSBY_PROLLC_CONTACT_EMAIL,
    subject: 'ProLLC Contact Form Submission from ' + email,
    html: `<p><b>Name:</b> ${name || ''}</p>
    <p><b>Email:</b> ${email}
    <p style="white-space: pre-wrap;"><b>Message:</b><br>${message}</p>`
  }

  try {
    await sgMail.send(msg)
    return {statusCode: 200, body: 'Success'}
  } catch (error) {
    console.error(error)
    return {statusCode: 200, body: 'Something went wrong'}
  }
}
