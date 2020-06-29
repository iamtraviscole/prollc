import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/faq.scss'

const FAQ = (props) => {
  const accordianCollapseAllState = () => {
    let state = {}
    for (let i = 1; i <= 22; i++) state[i] = false

    return state
  }

  const accordianShowAllState = () => {
    let state = {}
    for (let i = 1; i <= 22; i++) state[i] = true

    return state
  }

  const [accordian, setAccordian] = useState(accordianCollapseAllState())
  const [openCount, setOpenCount] = useState(0)

  const handleQuestionClick = (questionNum) => {
    if (accordian[questionNum]) {
      if (openCount > 0) setOpenCount(openCount - 1)
    } else {
      setOpenCount(openCount + 1)
    }

    setAccordian({...accordian, [questionNum]: !accordian[questionNum]})
  }

  const displayQuestion = (questionNum, question) => {
    return (
      <button className='faq__question'
        onClick={() => handleQuestionClick(questionNum)}>
        <h2>{question}</h2>
        <div className='faq__question-plus-minus'>
          {accordian[questionNum] ? '-' : '+'}
        </div>
      </button>
    )
  }

  const answerClass = (questionNum) => {
    let answerClass = 'faq__answer'
    if (accordian[questionNum]) answerClass = 'faq__answer--show'

    return answerClass
  }

  const handleCollapseAll = () => {
    setOpenCount(0)
    setAccordian(accordianCollapseAllState())
  }

  const handleShowAll = () => {
    setOpenCount(22)
    setAccordian(accordianShowAllState())
  }

  const displayCollapseShow = openCount > 0
    ? <button onClick={handleCollapseAll}>Collapse All</button>
    : <button onClick={handleShowAll}>Show All</button>

  return (
    <Layout pageTitle='FAQ'>
      <SEO title='FAQ' />
      <div className='faq'>
        <div className='faq__collapse-show-ctr'>
          {displayCollapseShow}
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(1, '¿Qué es una compañía LLC?')}
          <div className={answerClass(1)}>
            <p>
              Una LLC es una Limited Liability Company, que traducido al español
              sería “Compañía de Responsabilidad Limitada”. Es una de las
              estructuras de negocio permitidas en Estados Unidos, una figura
              intermedia entre corporación y sociedad personalista.
            </p>
            <p>
              Las ventajas de las LLC son básicamente dos: por un lado, la
              simplicidad en su funcionamiento, ya que prescinde de muchas de
              las normas que deben observar las corporaciones en la toma de
              decisiones o en la administración del negocio; y por otro lado,
              goza de la protección de la responsabilidad limitada, una ventaja
              frente a los individuos que operan por cuenta propia.
            </p>
            <p>
              <Link to='/resources/companias-llc'>
                Descubre aquí todos los detalles sobre las Compañías LLC.
              </Link>
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(2, '¿Qué significa “responsabilidad limitada”?')}
          <div className={answerClass(2)}>
            <p>
              La responsabilidad limitada es un mecanismo legal que permite al
              dueño de una sociedad proteger su patrimonio frente al riesgo
              implícito en cualquier actividad comercial. Es decir, los dueños
              a raíz de la responsabilidad limitada no responderán de las deudas
              sociales de la empresa.
            </p>
            <p>
              De este modo, si instan una acción en contra de la compañía LLC,
              sus dueños por lo general no responderán a esta con todo su
              patrimonio presente y futuro, sino solo hasta el límite de lo que
              hayan aportado a la sociedad. Esto debido a que la LLC es una
              persona jurídica separada y distinta de su dueño.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(3, '¿Quiénes son los miembros en una LLC?')}
          <div className={answerClass(3)}>
            <p>
              Los miembros de la LLC son sus dueños.
            </p>
            <p>
              <Link to='/resources/companias-llc'>
                Tienes más información sobre las compañías LLC en nuestra web.
              </Link>
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(4, '¿Qué diferencia hay entre LLC y corporación?')}
          <div className={answerClass(4)}>
            <p>
              La principal diferencia es la simplicidad en su funcionamiento:
              las LLC son más fáciles de administrar, ya que carecen de las
              rigurosas normas de funcionamiento de las corporaciones, en las
              que las decisiones deben ser aprobadas y tomadas por varias capas
              de ejecutivos, como por ejemplo por los dignatarios y directores,
              y a veces los accionistas. Las LLC también gozan de una mayor
              flexibilidad en cuanto a las clasificaciones tributarias.
            </p>
            <p>
              Mientras que una corporación cuenta con una estructura compleja,
              formada por accionistas, directores, dignatarios y miembros del
              Consejo de Administración, las LLC solo cuentan con dos tipos de
              individuos: miembros o gerentes.
            </p>
            <p>
              Otra diferencia fundamental es la protección que la responsabilidad
              limitada aporta a los dueños, o miembros; las corporaciones también
              cuentan con este mecanismo, pero en ellas es más fácil iniciar un
              procedimiento que consiga que el dueño se haga responsable de las
              deudas de la compañía, o que la compañía se haga responsable de las
              obligaciones de la persona.
            </p>
            <p>
              <Link to='/resources/llc-vs-corporacion'>
                Descubre aquí todos los detalles sobre las diferencias entre LLC
                y corporación.
              </Link>
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(5, '¿Qué hace el gerente de una LLC?')}
          <div className={answerClass(5)}>
            <p>
              El gerente es la persona autorizada para manejar y administrar la
              LLC, según lo dispuesto en el Acta Constitutiva o Articles of
              Organization de la compañía. Puede ser uno o varios de los miembros
              de la LLC, o uno o varios gerentes externos, ajenos a la propiedad
              de la empresa y que la gestionan de manera profesional.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(6, '¿Qué es la denominación de una LLC?')}
          <div className={answerClass(6)}>
            <p>
              La denominación es la clasificación de tu compañía como LLC, la
              forma que el estado requiere para identificar a las empresas que
              operan bajo esta forma jurídica. Se coloca después del nombre
              escogido para tu compañía, y puede ser LLC, L.L.C. o Limited
              Liability Company.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(7, '¿Qué es el domicilio de una LLC?')}
          <div className={answerClass(7)}>
            <p>
              El domicilio de una compañía LLC es el lugar donde se encuentra
              la administración y el equipo directivo de la misma, o aquel lugar
              que se designe como domicilio en la escritura de constitución de
              la empresa.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(8, '¿Cuáles son las ventajas de usar un domicilio proporcionado por ProLLC?')}
          <div className={answerClass(8)}>
            <p>
              Nuestro servicio de Oficina Virtual te ofrece la posibilidad de
              domiciliar tu empresa en una dirección física ubicada en la
              Florida, con la que podrás mejorar la imagen profesional de tu
              negocio y garantizar la confidencialidad de tu domicilio personal.
            </p>
            <p>
              Este servicio también incluye la posibilidad de recibir correo en
              el domicilio proporcionado por ProLLC, el cual te escanearemos y
              te enviaremos a tu correo electrónico tras la recepción.
            </p>
            <p>
              Se trata de un servicio a contratar mes a mes, sin permanencia y
              sin necesidad de firmar un contrato.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(9, '¿Qué es un agente registrado?')}
          <div className={answerClass(9)}>
            <p>
              El agente registrado de una LLC es la persona encargada de recibir
              toda la correspondencia judicial de la compañía: demandas,
              notificaciones judiciales, etc.
            </p>
            <p>
              En Estados Unidos es obligatorio que las LLC nombren a un agente
              registrado dentro del estado donde se haya constituido la empresa.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(10, '¿Qué es un acuerdo operativo?')}
          <div className={answerClass(10)}>
            <p>
              El acuerdo operativo es el documento que regula la operación de la
              LLC, proporcionando todas las reglas necesarias para su buen
              funcionamiento.
            </p>
            <p>
              Algunas de las normas que se pueden incluir en el acuerdo operativo
              son: disposiciones de titularidad, asignación de ganancias y
              pérdidas, derecho de voto, gerencia y administración, derechos y
              obligaciones de miembros y/o gerentes, disposiciones testamentarias
              y protección de activos, entre otras cosas.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(11, '¿Qué es la escritura de constitución?')}
          <div className={answerClass(11)}>
            <p>
              La escritura de constitución es el documento que se entrega a la
              División de Corporaciones para constituir oficialmente la LLC.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(12, '¿Qué es el EIN?')}
          <div className={answerClass(12)}>
            <p>
              El número de identificación tributaria (EIN, por sus siglas en
                inglés) es un número con el que las autoridades tributarias
                identifican a las LLC. Es un requisito necesario para abrir una
                cuenta bancaria a nombre de la compañía.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(13, '¿Qué es el Certificado de Membresía?')}
          <div className={answerClass(13)}>
            <p>
              El Certificado de Membresía es un documento expedido por la LLC
              que identifica al titular o titulares de la misma. Es un documento
              opcional, pero sirve para acreditar su membresía ante terceros e
              incluso entre los socios.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(14, '¿Qué es una resolución bancaria?')}
          <div className={answerClass(14)}>
            <p>
              Redactada por los miembros o gerentes de una compañía, la
              resolución bancaria estipula los derechos y obligaciones bancarios
              de los socios de la compañía.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(15, '¿Necesita mi LLC una cuenta bancaria?')}
          <div className={answerClass(15)}>
            <p>
              No es necesario que la LLC tenga una cuenta bancaria propia,
              pero nosotros recomendamos encarecidamente abrir una, por dos
              motivos:
            </p>
            <p>
              1. Para asegurarte de que cumples al 100% con las normas de
              funcionamiento de la LLC
              <br />
              2. Para no mezclar tus fondos personales con los de la compañía
              <br />
              3. Para respetar la personalidad jurídica de la compañía, ya que
              no es recomendable cobrarle a tus clientes usando tu cuenta
              bancaria personal
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(16, '¿Necesito contar con un abogado para constituir mi LLC?')}
          <div className={answerClass(16)}>
            <p>
              No es necesario contar con el asesoramiento de un abogado para
              rear tu LLC, pero es muy recomendable, ya que la creación de una
              empresa conlleva cuestiones legales complejas, como aquellas
              relacionadas con jurisdicción, estructura y comercio. Por tanto,
              nuestra recomendación es que siempre hables con un abogado antes
              de constituir tu compañía LLC.
            </p>
            <p>
              El paquete ProLLC incluye una consulta con uno de nuestros abogados
              expertos en LLC durante 30 minutos.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(17, '¿En qué consiste el servicio ProLLC?')}
          <div className={answerClass(17)}>
            <p>
              El servicio ProLLC es nuestro paquete más completo, con el que
              obtendrás todo lo necesario para constituir tu LLC: consulta con
              abogado, redacción de acuerdo operativo, asistencia en la apertura
              de cuenta bancaria, y todos los trámites administrativos precisos
              para poder comenzar a operar con tu LLC.
            </p>
            <p>
              Todo ello con una asistencia a medida y en tiempo récord.
            </p>
            <p>
              <Link to='/services'>
              Visita nuestro apartado sobre el servicio ProLLC para más información.
              </Link>
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(18, '¿Qué es una Corporación S, o S-Corp?')}
          <div className={answerClass(18)}>
            <p>
              La Corporación S es una clasificación tributaria en la que la
              compañía opta por pasar los ingresos, pérdidas, deducciones y
              créditos a través de sus dueños, a efectos del impuesto federal.
            </p>
            <p>
              Esto permite a las S-Corp evitar la doble imposición sobre los
              ingresos de la corporación. No obstante, es una figura corporativa
              solo disponibles para residentes fiscales o ciudadanos
              estadounidenses.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(19, '¿Puedo clasificar a mi compañía como una Corporación S?')}
          <div className={answerClass(19)}>
            <p>
              Solo si eres residente fiscal o ciudadano estadounidense.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(20, '¿Tengo que viajar a los EE.UU. para crear mi LLC?')}
          <div className={answerClass(20)}>
            <p>
              No es necesario: si haces uso de los servicios que te ofrece
              ProLLC, podrás crear tu LLC desde la comodidad de tu propia casa.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(21, '¿Cuál es la cuantía de aportación necesaria para constituir la compañía?')}
          <div className={answerClass(21)}>
            <p>
              $0. No es necesario hacer aportación alguna para constituir una LLC.
            </p>
          </div>
        </div>
        <div className='faq__question-ctr'>
          {displayQuestion(22, '¿Tengo que operar dentro de los EE.UU?')}
          <div className={answerClass(22)}>
            <p>
              No es necesario operar dentro de los EE.UU. para tener tu LLC
              legalmente constituida en este país. De hecho, ni siquiera es
              obligatorio que desarrolles una actividad con la compañía; puede
              ser, por ejemplo, para un futuro uso, para reservar el nombre,
              para guardar dinero, etcétera.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
