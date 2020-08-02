const calcPrice = (values) => {
  let price
  if (values.plan === 'Basic') price = 74
  if (values.plan === 'Complete') price = 164
  if (values.plan === 'Pro') price = 374

  let prices = {
    fileState: {
      delaware: 50
    },
    proAddress: 59,
    expedited: 39,
    banking: {
      virtualBank: 699,
      bankAccountService: 1100
    }
  }

  if (values.fileState === 'Delaware') price += prices.fileState.delaware

  if (values.companyAddress.proAddress === 'Yes') price += prices.proAddress

  if (values.expedited === 'Yes') price += prices.expedited

  if (values.banking) {
    if (values.banking.otherOptions === 'Virtual Bank') {
      price += prices.banking.virtualBank
    } else if (values.banking.otherOptions === 'Bank Account Service') {
      price += prices.banking.bankAccountService
    }
  }

  // convert to cents for stripe
  return price * 100
}

module.exports = calcPrice
