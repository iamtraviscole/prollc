const Stripe = require('stripe')
const calcPrice = require('./helpers/calcPrice.js')

const stripe = new Stripe(process.env.GATSBY_STRIPE_SECRET)

exports.handler = async (event, context, callback) => {
  const { id, values } = JSON.parse(event.body)

  const price = calcPrice(values)

  try {
    const payment = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: price,
      payment_method: id,
      confirm: true,
      description: values.plan + ' Plan',
      receipt_email: values.contactDetails.email
    })
    delete payment.client_secret

    return {statusCode: 200, body: JSON.stringify({payment})}
  } catch (error) {
    if (error.statusCode) {
      const { statusCode, message } = error
        if (statusCode === 402) {
          return { statusCode, body: JSON.stringify({message})}
        } else {
          return {
            statusCode,
            body: JSON.stringify({message: 'Something went wrong.'})
          }
        }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({message: 'Something went wrong.'})
      }
    }
  }
}
