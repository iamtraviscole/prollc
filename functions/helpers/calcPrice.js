const calcPrice = (values) => {
  let price
  if (values.plan === 'Basic') price = 199
  if (values.plan === 'Complete') price = 289
  if (values.plan === 'Pro') price = 479

  let prices = {
    fileState: {
      delaware: 15
    },
    proAddress: 59,
    expedited: 39,
    banking: {
      bankAccountService: 1100
    }
  }

  if (values.fileState === 'Delaware') price += prices.fileState.delaware

  if (values.companyAddress.proAddress === 'Yes') price += prices.proAddress

  if (values.expedited === 'Yes') price += prices.expedited

  if (values.banking) {
    if (values.banking.otherOptions === 'Physical Bank') {
      price += prices.banking.bankAccountService
    }
  }

  // convert to cents for stripe
  return price * 100
}

module.exports = calcPrice
