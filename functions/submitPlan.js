const Stripe = require('stripe')
const calcPrice = require('./helpers/calcPrice.js')

const stripe = new Stripe(process.env.STRIPE_KEY)

exports.handler = async (event, context, callback) => {
  const { id, values } = JSON.parse(event.body)

  const price = calcPrice(values)

  try {
    const payment = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: price,
      payment_method: id,
      confirm: true,
      // TODO: send stripe receipt_email or send separate confirmation email
      // with specific order details?
    })
    delete payment.client_secret

    return {statusCode: 200,body: JSON.stringify({payment})}
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
