import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//* Styles
import '../styles/formik.css'

const FormikNotas = () => {

    //? Notas
    const [notes, setNotes] = useState([])
    const [renderNotes, setRenderNotes] = useState(false)

    const initialValues = {
        note: ''
    }

    const validationSchema = Yup.object().shape(
        {
            note: Yup.string()
                .required('Note is required')
        }
    )

        const addNote = (valor) => {
            const updateNotes = [...notes]
            updateNotes.push(valor)
            setNotes(updateNotes)
        }

    return (
        <div>
            <h1>Notes - App</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(JSON.stringify(values.note));
                    setRenderNotes(true);
                    addNote(values.note);
                }}


            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>

                        <label htmlFor='note'>Nota:</label>
                        <Field id='note' name='note' placeholder='note...'></Field>
                        {/* Error note */}
                        {
                            errors.note && touched.note && (
                                <ErrorMessage name='note' component='div'/>
                            )
                        }
                        <button type='submit'>Enviar Form</button>
                    </Form>
                )}
            </Formik>

            <div className='containerNotes'>
                {
                    renderNotes ? 
                    notes.map((note, index) => (
                        <div key={index} className='note'>----- { note } -----</div>
                    ))
                    : <h4>No hay notas, Ingresa una.....</h4>
                }
            </div>
        </div>
    );
}

export default FormikNotas;
