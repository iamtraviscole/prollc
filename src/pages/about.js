import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/about.scss'

const About = (props) => {
  return (
    <Layout pageTitle='Quiénes Somos'>
      <SEO title='Quiénes Somos' />
      <div className='about'>
        <h2>Tu primer paso hacia el sueño americano</h2>
        <p>Llevas años soñando con emprender, con crear tu propia empresa o
          negocio, y Estados Unidos, la tierra de las oportunidades, te resulta
          el lugar idóneo para desempeñar tu actividad.
        </p>
        <p>¡Deja de soñar y pasa a la acción! <b>Crear tu empresa en EE.UU.</b> es más
          fácil de lo que pensabas, y estás en el sitio correcto para iniciar tu
          andadura empresarial.
        </p>
        <p>
          <b>ProLLC</b> es un proyecto que surge gracias a personas como tú, que buscan
          información en español sobre temas mercantiles, particularmente sobre
          los trámites de constitución de compañías LLC (sociedad de
          responsabilidad limitada, en español). Nuestro propósito es
          proporcionarte toda la información que necesitas antes de decidirte a
          crear tu LLC y acompañarte en su constitución, asegurándonos que tu
          empresa cumple con todas las formalidades de constitución, todo ello
          por un precio muy asequible.
        </p>

        <h2>Conoce a ProLLC</h2>
        <p>
          ProLLC nace en Miami, puerta a las Américas, una ubicación estratégica
          para todos los empresarios hispanohablantes que busquen establecerse
          en este gran país. Se trata de un proyecto fundado por abogados
          ejercientes en derecho mercantil, laboral e inmigración empresarial,
          que cuenta con muchísima experiencia en el asesoramiento y
          acompañamiento en la creación de sociedades mercantiles, focalizándose
          sobre todo en clientes latinos y españoles.
        </p>
        <p>
          <b>El fundador y gerente de ProLLC</b>, Ronald C. Iacone Jr., Esq. es abogado
          especializado en derecho mercantil, centrado en la eficiencia
          tributaria, protección de activos y confidencialidad. Cuenta con
          amplia experiencia internacional y es orador frecuente en seminarios y
          talleres enfocados a los emprendedores no residentes.
        </p>
        <p>
          La idea de arrancar este negocio le surge cuando, a través de su
          experiencia laboral, detecta cómo muchas personas necesitan contratar
          los servicios de creación de sociedades, pero no pueden permitirse
          costearse a un abogado para ello. Así que se puso manos a la obra para
          crear un servicio que pudiera ofrecer un servicio de alta calidad y
          profesionalismo, pero a precios asumibles para los nuevos emprendedores.
        </p>

        <h2>¿Por qué crear tu empresa con ProLLC?</h2>
        <ul>
          <li>
            1. Porque somos la primera web fundada y gestionada por abogados que
            se centra en ayudar al emprendedor hispanohablante a constituir su
            LLC en Estados Unidos.
          </li>
          <li>
            2. Porque con nuestra ayuda podrás constituir tu empresa desde la
            comodidad de tu casa, sin tener que desplazarte a los EE.UU.
          </li>
          <li>
            3. Porque te guiaremos en relación con todos los trámites que debes
            cumplimentar a la hora de la constituir tu compañía LLC, incluyendo
            la obtención del número de identificación tributaria y la apertura
            de cuenta bancaria; y te ayudaremos a que los completes a tiempo y
            con la completa seguridad de que todo se realizó conforme a las
            normas mercantiles vigentes.
          </li>
          <li>
            4. Porque te ofrecemos un servicio especializado; estarás hablando con
            una persona competente en este campo y no con un vendedor.
          </li>
        </ul>

        <p>
          <b>¿Te atreves a comenzar la gran aventura de tu vida? Desde ProLLC te
          ayudamos a crear tu empresa en Estados Unidos, ampliando con ello el
          alcance de tu negocio, y llegando a nuevos mercados. Echa un vistazo a
          nuestros servicios destinados a la creación de LLC y contacta con
          nosotros si tienes cualquier duda. ¡Sin compromiso!</b>
        </p>

        <div className='about__btn-ctr'>
          <Link to='/services'><button>Ver servicios de ProLLC</button></Link>
        </div>

      </div>
    </Layout>

  )
}

export default About
