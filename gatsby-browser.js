/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import './src/styles/global/reset.scss'
import './src/styles/global/theme.scss'

const stripePromise = loadStripe('pk_test_697OCiRHZew3U0CgzdZyEBGT00YiSHQ0Jf')

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripePromise}>{element}</Elements>
)
