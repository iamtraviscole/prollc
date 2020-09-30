import * as yup from 'yup'

export const contactDetails = (
  yup.object().shape({
    firstName: yup.string().required('primer nombre necesario'),
    lastName: yup.string().required('apellidos necesario'),
    email: yup.string().required('correo electrónico necesario').email('correo electrónico no válida'),
    phone: yup.string().required('teléfono necesario')
  })
)

export const companyNames = (
  yup.object().shape({
    name1: yup.string()
      .required('nombre 1 necesario')
      .test('companyName1', 'nombre 1 debe ser únicoe', function() {
        const { name1, name2, name3 } = this.parent
        return name1 ? (name1 !== name2) && (name1 !== name3) : true
    }),
    name2: yup.string()
      .required('nombre 2 necesario')
      .test('companyName2', 'nombre 2 debe ser únicoe', function() {
        const { name1, name2, name3 } = this.parent
        return name2 ? (name2 !== name1) && (name2 !== name3) : true
    }),
    name3: yup.string()
      .required('nombre 3 necesario')
      .test('companyName3', 'nombre 3 debe ser únicoe', function() {
        const { name1, name2, name3 } = this.parent
        return name3 ? (name3 !== name1) && (name3 !== name2) : true
    })
  })
)

export const industry = (
  yup.object().shape({
    industry: yup.string().required('industria necesario'),
    other: yup.string()
      .when('industry', {
        is: 'Otro',
        then: yup.string().required('otro necesario')
    })
  })
)

export const employeeCount = yup.number().min(0, '0 mínimo')

export const companyAddress = (
  yup.object().shape({
    street: yup.string().required('dirección necesario'),
    city: yup.string().required('ciudad necesario'),
    state: yup.string().required('estado necesario'),
    zipcode: yup.string().required('código postal necesario'),
    country: yup.string().required('país necesario')
  })
)

export const memberDetails = (i) => (
  yup.object().shape({
    companyName: yup.string()
      .when('corporateMember', {
        is: true,
        then: yup.string().required(`compañía ${i + 1} nombre necesario`)
    }),
    firstName: yup.string()
      .when('corporateMember', {
        is: false,
        then: yup.string().required(`primer nombre ${i + 1} necesario`)
    }),
    lastName: yup.string()
      .when('corporateMember', {
        is: false,
        then: yup.string().required(`apellidos ${i + 1} necesario`)
    }),
    street: yup.string().required(`dirección ${i + 1} necesario`),
    city: yup.string().required(`ciudad ${i + 1} necesario`),
    state: yup.string().required(`estado ${i + 1} necesario`),
    zipcode: yup.string().required(`código postal ${i + 1} necesario`),
    country: yup.string().required(`país ${i + 1} necesario`)
  })
)

export const managerDetails = (i) => (
  yup.object().shape({
    firstName: yup.string().required(`primer nombre ${i + 1} necesario`),
    lastName: yup.string().required(`apellidos ${i + 1} necesario`),
    street: yup.string().required(`dirección ${i + 1} necesario`),
    city: yup.string().required(`ciudad ${i + 1} necesario`),
    state: yup.string().required(`estado ${i + 1} necesario`),
    zipcode: yup.string().required(`código postal ${i + 1} necesario`),
    country: yup.string().required(`país ${i + 1} necesario`)
  })
)

export const proRegisteredAgent = (
  yup.object().shape({
    companyName: yup.string()
      .when('corporateRegisteredAgent', {
        is: true,
        then: yup.string().required('nombre de la compañía necesario')
    }),
    firstName: yup.string()
      .when('corporateRegisteredAgent', {
        is: false,
        then: yup.string().required('primer nombre necesario')
    }),
    lastName: yup.string()
      .when('corporateRegisteredAgent', {
        is: false,
        then: yup.string().required('apellidos necesario')
    }),
    street: yup.string().required('dirección necesario'),
    city: yup.string().required('ciudad necesario'),
    state: yup.string().required('estado necesario'),
    zipcode: yup.string().required('código postal necesario'),
    country: yup.string().required('país necesario')
  })
)

export const ein = (
  yup.object().shape({
    firstName: yup.string().required('primer nombre necesario'),
    lastName: yup.string().required('apellidos necesario'),
    ssn: yup.string().max(9, 'SSN debe tener menos de 9 caracteres'),
    itin: yup.string().max(9, 'ITIN debe tener menos de 9 caracteres')
  })
)

export const banking = (
  yup.object().shape({
    bank: yup.string().required('banco necesario'),
    bankOther: yup.string()
      .when('bank', {
        is: 'Otro',
        then: yup.string().required('otro necesario')
    })
  })
)
