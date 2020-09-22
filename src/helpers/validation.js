import * as yup from 'yup'

export const contactDetails = (
  yup.object().shape({
    firstName: yup.string().required('first name required'),
    lastName: yup.string().required('last name required'),
    email: yup.string().required('email required').email('invalid email'),
    phone: yup.string().required('phone required')
  })
)

export const companyNames = (
  yup.object().shape({
    name1: yup.string()
      .required('name 1 required')
      .test('companyName1', 'name 1 must be unique', function() {
        const { name1, name2, name3 } = this.parent
        return name1 ? (name1 !== name2) && (name1 !== name3) : true
    }),
    name2: yup.string()
      .required('name 2 required')
      .test('companyName2', 'name 2 must be unique', function() {
        const { name1, name2, name3 } = this.parent
        return name2 ? (name2 !== name1) && (name2 !== name3) : true
    }),
    name3: yup.string()
      .required('name 3 required')
      .test('companyName3', 'name 3 must be unique', function() {
        const { name1, name2, name3 } = this.parent
        return name3 ? (name3 !== name1) && (name3 !== name2) : true
    })
  })
)

export const industry = (
  yup.object().shape({
    industry: yup.string().required('industry required'),
    other: yup.string()
      .when('industry', {
        is: 'Other',
        then: yup.string().required('other required')
    })
  })
)

export const employeeCount = yup.number().min(0, '0 minimum')

export const companyAddress = (
  yup.object().shape({
    street: yup.string().required('street required'),
    city: yup.string().required('city required'),
    state: yup.string().required('state required'),
    zipcode: yup.string().required('zipcode required'),
    country: yup.string().required('country required')
  })
)

export const memberDetails = (i) => (
  yup.object().shape({
    companyName: yup.string()
      .when('corporateMember', {
        is: true,
        then: yup.string().required(`company ${i + 1} name required`)
    }),
    firstName: yup.string()
      .when('corporateMember', {
        is: false,
        then: yup.string().required(`first name ${i + 1} required`)
    }),
    lastName: yup.string()
      .when('corporateMember', {
        is: false,
        then: yup.string().required(`last name ${i + 1} required`)
    }),
    street: yup.string().required(`street ${i + 1} required`),
    city: yup.string().required(`city ${i + 1} required`),
    state: yup.string().required(`state ${i + 1} required`),
    zipcode: yup.string().required(`zipcode ${i + 1} required`),
    country: yup.string().required(`country ${i + 1} required`)
  })
)

export const managerDetails = (i) => (
  yup.object().shape({
    firstName: yup.string().required(`first name ${i + 1} required`),
    lastName: yup.string().required(`last name ${i + 1} required`),
    street: yup.string().required(`street ${i + 1} required`),
    city: yup.string().required(`city ${i + 1} required`),
    state: yup.string().required(`state ${i + 1} required`),
    zipcode: yup.string().required(`zipcode ${i + 1} required`),
    country: yup.string().required(`country ${i + 1} required`)
  })
)

export const proRegisteredAgent = (
  yup.object().shape({
    companyName: yup.string()
      .when('corporateRegisteredAgent', {
        is: true,
        then: yup.string().required('company name required')
    }),
    firstName: yup.string()
      .when('corporateRegisteredAgent', {
        is: false,
        then: yup.string().required('first name required')
    }),
    lastName: yup.string()
      .when('corporateRegisteredAgent', {
        is: false,
        then: yup.string().required('last name required')
    }),
    street: yup.string().required('street required'),
    city: yup.string().required('city required'),
    state: yup.string().required('state required'),
    zipcode: yup.string().required('zipcode required'),
    country: yup.string().required('country required')
  })
)

export const ein = (
  yup.object().shape({
    firstName: yup.string().required('first name required'),
    lastName: yup.string().required('last name required'),
    ssn: yup.string().max(9, 'SSN must be less than 9 characters'),
    itin: yup.string().max(9, 'ITIN must be less than 9 characters')
  })
)

export const banking = (
  yup.object().shape({
    // TODO
  })
)
