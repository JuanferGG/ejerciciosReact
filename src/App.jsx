import { useState } from 'react'
import './App.css'
import FormContacto from './components/forms/formContacto'
import { AiFillContacts } from "react-icons/ai"

function App() {
  const [cout, setCount] = useState(0)

  return (
    <main className='mainPrincipal'>
      <header className='title'>
        <h1>Contactos</h1>
        <AiFillContacts className='icon'/>
      </header>

      {/* TODO Form contacto */}
      <section className='formContact'>
        <FormContacto/>
      </section>
    </main>
  )
}

export default App
