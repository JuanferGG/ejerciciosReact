import React, { useRef, useState } from 'react';
// ? Styles
import '../styles/formContact.css'
//? Models
import { Contacto } from '../../models/contacto';
// MdContactEmergency
// ? Icons
import { MdContactEmergency } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"


const FormContacto = () => {

    const nameRef = useRef('')
    const telRef = useRef('')
    const [arrayContactos, setArrayContactos] = useState([])

    const btnSubmit = (e) => {
        e.preventDefault()
        if(nameRef.current.value == '' || telRef.current.value == '') return alert('Ingrese Contacto/Numero')
        //TODO Generar el nuevo contacto como objeto
        const contact = new Contacto(nameRef.current.value, telRef.current.value, true)
        //TODO El nuevo array a actualizar
        const array = [...arrayContactos]
        array.push(contact)

        setArrayContactos(array)

        nameRef.current.value = ''
        telRef.current.value = ''
    }

    //TODO Change state conectado & desconectado
    const changeState = (index) => {
        const updateContacts = [...arrayContactos]
        updateContacts[index].conectado = !updateContacts[index].conectado
        setArrayContactos(updateContacts)
    }
    const deleteContact = (index) => {
        const updateContacts = [...arrayContactos]
        updateContacts.splice(index, 1)
        setArrayContactos(updateContacts)
    }

    return (
        <>
            <form onSubmit={btnSubmit}>
                <input ref={nameRef} type='text' placeholder='Name Contact'/>
                <input ref={telRef} type='text' placeholder='317 757 6245'/>
                <button type='submit'><MdContactEmergency className='submit'/></button>
            </form>
            <section className='contactos'>
                <ul>
                    {
                        arrayContactos.map((contacto, index) => (
                            <li key={index}><b>Contacto: {contacto.nombre}</b> Tel:{contacto.telefono} {contacto.conectado ? 'Conectado' : 'Desconectado'} <button onClick={()=> changeState(index)}>{contacto.conectado ? 'Desconectar' : 'Conectar'}</button> <AiFillDelete onClick={() => deleteContact(index)}/></li>
                        ))
                    }
                </ul>
            </section>
        </>
    );
}

export default FormContacto;
