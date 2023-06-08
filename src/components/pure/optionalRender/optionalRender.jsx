import React, { useState } from 'react';

//? Login / Logout Buttons

const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//? (Expresion true) && expresion => se renderiza la expresion
//? (Expresion False) && expresion => no se renderiza la expresion

let red = 0
let green = 200
let blue = 150

//? Estilos para usuario logeado
const loggedStyle = {
    cursor: 'pointer',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}
//? Estilos para usuario no logeado
const unloggedStyle = {
    cursor: 'pointer',
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0)

    // const updateAccess = () => {
    //     setAccess(!access)
    // }
    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    access ? optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction}/>
            : optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}/>;
        
    // Unread Message
    let addMessages = () => setNMessage(nMessage + 1)


    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {/* N message unread */}
            {/* { nMessage > 1 && <p>You have {nMessage} new messages...</p> }
            { nMessage > 0 && nMessage === 1 && <p>You have only one message ...</p> }
            { nMessage === 0 && <p>There are not new messages</p> } */}
            {/* Ternary Operator */}
            { access ? (
                <div>
                { nMessage === 0 && <p>There are not new Message</p>}
                { nMessage === 1 && <p>You have only 1 message</p>}
                { nMessage > 1 ?
                    <p>You have {nMessage} new message{nMessage > 1 ? 's' : null}...</p> :
                    null
                }

                <button onClick={addMessages}>{ nMessage === 0 ? 'Send your First Message' : 'Add new message' }</button>
                </div>
            ) : null }
            

        </div>
    );
}

export default OptionalRender;
