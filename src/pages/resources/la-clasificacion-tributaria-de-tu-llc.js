import React from 'react'

import Resource from '../../components/resource'

const TaxClassification = (props) => {
  return (
    <Resource seoTitle='La clasificación tributaria de tu LLC'>
      <h1>La clasificación tributaria de tu LLC</h1>
      <p>
        ¿Sabías que en Estados Unidos puedes escoger la clasificación tributaria
        que tenga tu compañía LLC?
      </p>
      <p>
        Tienes cuatro alternativas en cuanto a la clasificación tributaria que puedes escoger para tu empresa:
        <span className='resource__point--no-dash'>
            1. Tributar como propietario único,
        </span>
        <span className='resource__point--no-dash'>
          2. Tributar como corporación,
        </span>
          <span className='resource__point--no-dash'>
          3. Tributar como corporación-S o S-Corp,
        </span>
          <span className='resource__point--no-dash'>
          4. Tributar como sociedad colectiva
        </span>
      </p>
      <p>
        Y te preguntarás ¿dónde está la LLC? Como probablemente ya sepas, o te
        puedes hacer una idea por nuestro nombre, en ProLLC recomendamos la LLC
        como la mejor forma jurídica para tu negocio. Sin embargo, a la hora de
        relacionarnos con la IRS (la autoridad tributaria de EE.UU.) no podemos
        escoger la LLC como una forma de clasificación tributaria, sino que
        tendremos que optar por una de las cuatro clasificaciones indicadas
        arriba.
      </p>
      <p>
        Si no escoges la clasificación tributaria, el IRS (la entidad tributaria
          estadounidense) te va a asignar una clasificación por omisión según el
          número de dueños que haya:
        <span className='resource__point'>
          Si tu LLC solo tiene un miembro, la clasificación tributaria será la
          de propietario
          único.
        </span>
        <span className='resource__point'>
          Si hay dos o más miembros, la clasificación será la de sociedad colectiva
          (Partnership, en inglés).
        </span>
      </p>
      <p>
        Si deseas que tu LLC tribute como corporación hay que comunicárselo
        expresamente al IRS, ya que la clasificación de corporación no es una
        clasificación por omisión.
      </p>
    </Resource>
  )
}

export default TaxClassification
