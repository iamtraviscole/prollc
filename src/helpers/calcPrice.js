const calcPrice = (values) => {
  let basePrice

  if (values.plan === 'Basic') basePrice = 74
  if (values.plan === 'Complete') basePrice = 164
  if (values.plan === 'Pro') basePrice = 374

  let addons = {
    fileState: 0,
    proAddress: 0,
    expedited: 0,
    banking: 0
  }

  if (values.fileState === 'Delaware') addons.fileState = 50
  else addons.fileState = 0

  if (values.companyAddress.proAddress === 'Yes') addons.proAddress = 59
  else addons.proAddress = 0

  if (values.expedited === 'Yes') addons.expedited = 39
  else addons.expedited = 0

  if (values.banking) {
    if (values.banking.otherOptions === 'Virtual Bank') {
      addons.banking = 699
    } else if (values.banking.otherOptions === 'Bank Account Service') {
      addons.banking = 1100
    } else {
      addons.banking = 0
    }
  }

  const totalPrice = basePrice +
    addons.fileState +
    addons.proAddress +
    addons.expedited +
    addons.banking

  return totalPrice
}

export default calcPrice
