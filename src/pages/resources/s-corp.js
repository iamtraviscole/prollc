import React from 'react'

import Resource from '../../components/resource'

const SCorp = (props) => {
  return (
    <Resource seoTitle='¿Qué es una S-Corp?'>
      <h1>¿Qué es una S-Corp?</h1>
      <p>
        ¿Has escuchado alguna vez el término S-Corp como una de las formas que
        puede tomar una sociedad, pero no tienes muy claro de qué se trata? ¡En
        este post te lo aclaramos!
      </p>
      <h2>Definición y ventajas de las S-Corp</h2>
      <p>Las corporaciones tipo S son un tipo de empresa que se caracteriza
        porque pasan sus ingresos, pérdidas, deducciones y créditos directamente
        a sus accionistas, para que éstos tributen por el impuesto federal en la
        cantidad que les corresponda, junto con el resto de sus ganancias
        personales.
      </p>
      <p>Es decir, que cualquier beneficio que la corporación S genere tributa
        dentro de la declaración personal de impuestos de cada uno de sus
        accionistas. Esto implica una gran ventaja: evitar la doble imposición,
        o lo que es lo mismo, no tener que pagar impuestos dos veces por el mismo
        concepto (una vez por parte de la corporación, y otra vez por los
          ingresos percibidos por el accionista procedentes de la corporación).
      </p>
      <p>Este tipo de sociedad solo está disponible para las empresas con
        accionistas que residan fiscalmente o sean ciudadanos de EE.UU.
      </p>
      <h2>¿Qué requisitos debe cumplir mi empresa para clasificarse como S-Corp?</h2>
      <p>
        Para poder clasificar a tu empresa como una corporación de tipo S, el
        gobierno de Estados Unidos establece los siguientes requisitos:
        <span className='resource__point'>
          Que sea una compañía doméstica, es decir, con domicilio en algunos de
          los estados de EE.UU.
        </span>
        <span className='resource__point'>
          Que los propietarios de la empresa sean solo los permitidos: pueden
          ser personas físicas, ciertos fideicomisos y caudales hereditarios; pero
          no pueden ser sociedades colectivas, sociedades anónimas, o accionistas
          extranjeros no residentes.
        </span>
        <span className='resource__point'>
          Que la compañía no tenga más de 100 accionistas
        </span>
        <span className='resource__point'>
          Que la compañía tenga solo una clase de acción
        </span>
        <span className='resource__point'>
          Que no se trate de una corporación ineligible: lo son ciertas
          instituciones financieras, compañías de seguros y sociedades anónimas
          domésticas de ventas internacionales
        </span>
      </p>
      <h2>¿Qué debo hacer para convertir a mi compañía en una S-Corp?</h2>
      <p>Si tienes claro que te interesan las ventajas fiscales de las S-Corp, y
        te has asegurado de que cumples con todos los requisitos establecidos,
        ya puedes comenzar con todos los trámites para convertir a tu compañía
        en una S-Corp.
      </p>
      <p>Ten en cuenta que las LLC también pueden optar por recibir el mismo
        tratamiento fiscal que las S-Corp, por lo que si has constituido tu
        empresa como una LLC, también podrás disfrutar del tratamiento fiscal
        de estas corporaciones S.
      </p>
      <p>El procedimiento para clasificar tu compañía como S-Corp comienza con
        la presentación del Formulario 2553, Election by a Small Business
        Corporation (Elección de una corporación pequeña); aquí puedes
        descargar el formulario en inglés en PDF. Para más información sobre
        cómo rellenar el formulario y dónde presentarlo, haz clic aquí.
      </p>
      <p>Desde ProLLC podemos ayudarte a decidir si la S-Corp es una
        clasificación posible y recomendable para tu empresa, así como a
        cumplimentar todos los trámites para convertir a tu compañía en uns
        Corporación S. ¡Contacta con nosotros y te ayudaremos!
      </p>
    </Resource>
  )
}

export default SCorp
