import * as yup from 'yup'

export const contactDetails = (
  yup.object().shape({
    firstName: yup.string().required('primer nombre obligatorio'),
    lastName: yup.string().required('apellidos obligatorio'),
    email: yup.string().trim().required('correo electrónico obligatorio').email('correo electrónico no válida'),
    phone: yup.string().required('teléfono obligatorio')
  })
)

export const companyNames = (
  yup.object().shape({
    name1: yup.string()
      .required('nombre 1 obligatorio')
      .test('companyName1', 'nombre 1 debe ser único', function() {
        const { name1, name2, name3 } = this.parent
        return name1 ? (name1 !== name2) && (name1 !== name3) : true
    }),
    name2: yup.string()
      .required('nombre 2 obligatorio')
      .test('companyName2', 'nombre 2 debe ser único', function() {
        const { name1, name2, name3 } = this.parent
        return name2 ? (name2 !== name1) && (name2 !== name3) : true
    }),
    name3: yup.string()
      .required('nombre 3 obligatorio')
      .test('companyName3', 'nombre 3 debe ser único', function() {
        const { name1, name2, name3 } = this.parent
        return name3 ? (name3 !== name1) && (name3 !== name2) : true
    })
  })
)

export const industry = (
  yup.object().shape({
    industry: yup.string().required('industria obligatorio'),
    other: yup.string().when('industry', {
      is: 'Otro',
      then: yup.string().required('otro obligatorio')
    })
  })
)

export const employeeCount = yup.number().min(0, '0 mínimo')

export const companyAddress = (
  yup.object().shape({
    street: yup.string().required('dirección obligatorio'),
    city: yup.string().required('ciudad obligatorio'),
    state: yup.string().required('estado obligatorio'),
    zipcode: yup.string().required('código postal obligatorio'),
    country: yup.string().required('país obligatorio')
  })
)

export const memberDetails = (i) => (
  yup.object().shape({
    companyName: yup.string().when('corporateMember', {
      is: true,
      then: yup.string().required(`nombre de compañía ${i + 1} obligatorio`)
    }),
    firstName: yup.string().when('corporateMember', {
      is: false,
      then: yup.string().required(`primer nombre ${i + 1} obligatorio`)
    }),
    lastName: yup.string().when('corporateMember', {
      is: false,
      then: yup.string().required(`apellidos ${i + 1} obligatorio`)
    }),
    street: yup.string().required(`dirección ${i + 1} obligatorio`),
    city: yup.string().required(`ciudad ${i + 1} obligatorio`),
    state: yup.string().required(`estado ${i + 1} obligatorio`),
    zipcode: yup.string().required(`código postal ${i + 1} obligatorio`),
    country: yup.string().required(`país ${i + 1} obligatorio`)
  })
)

export const managerDetails = (i) => (
  yup.object().shape({
    firstName: yup.string().required(`primer nombre ${i + 1} obligatorio`),
    lastName: yup.string().required(`apellidos ${i + 1} obligatorio`),
    street: yup.string().required(`dirección ${i + 1} obligatorio`),
    city: yup.string().required(`ciudad ${i + 1} obligatorio`),
    state: yup.string().required(`estado ${i + 1} obligatorio`),
    zipcode: yup.string().required(`código postal ${i + 1} obligatorio`),
    country: yup.string().required(`país ${i + 1} obligatorio`)
  })
)

export const proRegisteredAgent = (
  yup.object().shape({
    companyName: yup.string().when('corporateRegisteredAgent', {
      is: true,
      then: yup.string().required('nombre de la compañía obligatorio')
    }),
    firstName: yup.string().when('corporateRegisteredAgent', {
      is: false,
      then: yup.string().required('primer nombre obligatorio')
    }),
    lastName: yup.string().when('corporateRegisteredAgent', {
      is: false,
      then: yup.string().required('apellidos obligatorio')
    }),
    street: yup.string().required('dirección obligatorio'),
    city: yup.string().required('ciudad obligatorio'),
    state: yup.string().required('estado obligatorio'),
    zipcode: yup.string().required('código postal obligatorio'),
    country: yup.string().required('país obligatorio')
  })
)

export const ein = (
  yup.object().shape({
    firstName: yup.string().required('primer nombre obligatorio'),
    lastName: yup.string().required('apellidos obligatorio'),
    ssn: yup.string().test(
      'ssn-empty-or-length',
      'Seguro Social debe tener 9 caracteres',
      val => val.length ? val.length === 9 : true
    ),
    itin: yup.string().test(
      'itin-empty-or-length',
      'ITIN debe tener 9 caracteres',
      val => val.length ? val.length === 9 : true
    )
  })
)

export const banking = (
  yup.object().shape({
    bank: yup.string().when('presentInUS', {
        is: 'Yes',
        then: yup.string().required('banco obligatorio')
      }),
    bankOther: yup.string().when('bank', {
        is: 'Otro',
        then: yup.string().required('otro obligatorio')
    })
  })
)
