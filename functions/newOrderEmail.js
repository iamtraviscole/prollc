const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.GATSBY_SENDGRID_MAIL)

exports.handler = async (event, context, callback) => {
  const { firstName, lastName, email, price, paymentId } = JSON.parse(event.body)

  const msg = {
    to: process.env.GATSBY_PROLLC_ORDERS_EMAIL,
    from: process.env.GATSBY_PROLLC_ORDERS_EMAIL,
    subject: 'ProLLC - New Order: ' + paymentId,
    html: `<p><b>Name:</b> ${firstName + ' ' + lastName}</p>
    <p><b>Email:</b> ${email}
    <p><b>Payment ID:</b> ${paymentId}
    <br>
    <br>
    <a href='prollc.com/orders/${paymentId}'>prollc.com/orders/${paymentId}</a>`
  }

  try {
    await sgMail.send(msg)
    return {statusCode: 200, body: 'Success'}
  } catch (error) {
    console.error(error)
    return {statusCode: 200, body: 'Something went wrong'}
  }
}
