let initialMemberDetails = []
for (let i = 0; i < 4; i++) {
  initialMemberDetails.push({
    corporateMember: false,
    companyName: '',
    firstName: '',
    secondName: '',
    lastName: '',
    street: '',
    suite: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    manager: false
  })
}

const initialManagerDetails = []
for (let i = 0; i < 4; i++) {
  initialManagerDetails.push({
    firstName: '',
    secondName: '',
    lastName: '',
    street: '',
    suite: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  })
}

const initialPlanValues = (plan) => {
  return {
    plan: plan,
    fileState: 'Florida',
    contactDetails: {
      firstName: '',
      secondName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    companyNames: {
      name1: '',
      name2: '',
      name3: ''
    },
    denomination: 'LLC',
    industry: {
      industry: '',
      other: ''
    },
    employeeCount: 0,
    companyAddress: {
      proAddress: 'No',
      street: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    },
    members: {
      memberCount: '1',
      memberDetails: initialMemberDetails
    },
    managers: {
      managerCount: '0',
      managerDetails: initialManagerDetails
    },
    registeredAgent: {
      proRegisteredAgent: 'No',
      corporateRegisteredAgent: false,
      companyName: '',
      firstName: '',
      secondName: '',
      lastName: '',
      street: '',
      suite: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    },
    ein: {
      firstName: '',
      secondName: '',
      lastName: '',
      ssn: '',
      itin: ''

    },
    sElection: 'No',
    banking: {
      presentInUS: 'Yes',
      bank: '',
      bankOther: '',
      otherOptions: 'Virtual Bank'
    },
    speakToAttorney: 'Yes',
    expedited: 'No'
  }
}

export default initialPlanValues
