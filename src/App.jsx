import React from 'react'
import './App.css'
// import ContainerContact from './components/containers/containerContact'
import OptionalRender from './components/pure/optionalRender/optionalRender'
import Cuadrado from './components/pure/cuadrado/cuadrado'
import FormikNotas from './components/forms/formik'

function App() {

  return (
    <main>
      {/* //? Ejercicio contacto */}
      {/* <ContainerContact/> */}
      {/* Ejemplo Renderizado condicional */}
      {/* <OptionalRender/> */}
      {/* //? Ejercicio sesiones 10,11 12 */}
      {/* <Cuadrado/> */}
      {/* //? Ejercicios sesiones 13, 14 y 15 */}
      <FormikNotas />
    </main>
  )
}

export default App
