import React from 'react';
import FormContacto from '../../components/forms/formContacto'
import { AiFillContacts } from "react-icons/ai"

const ContainerContact = () => {
    return (
        <>
            <main className='mainPrincipal'>
                <header className='title'>
                    <h1>Contactos</h1>
                    <AiFillContacts className='icon' />
                </header>

                {/* TODO Form contacto */}
                <section className='formContact'>
                    <FormContacto />
                </section>
            </main>
        </>
    );
}

export default ContainerContact;
