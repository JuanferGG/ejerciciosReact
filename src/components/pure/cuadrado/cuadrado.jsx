import React, { useState } from 'react';

const Box = ( { propStyle, overMouse, mouseLeave, doubleClick } ) => {
    return (
        <div style={propStyle} onMouseOverCapture={overMouse} onMouseLeave={mouseLeave} onDoubleClick={doubleClick}></div>
    )
}

const Cuadrado = () => {

    const [colorInterval, setColorInterval] = useState(0)
    //? Styles Box
    const [styleBox, setStyleBox] = useState({width: '255px', height: '255px',backgroundColor: 'black'})

    const changeColor = () => {
        setStyleBox({
            width: '255px',
            height: '255px',
            backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        })
    }

    //? Mouse Over
    const mouseOver = () => {
        setColorInterval(setInterval(changeColor, 800))
    }
    //? Mouse Leave
    const mouseLeave = () => {
        clearInterval(colorInterval)
    }
    //? Double Click
    const doubleClick = () => {
        clearInterval(colorInterval)
    }

    return (
        <div>
            <Box propStyle={styleBox} overMouse={mouseOver} mouseLeave={mouseLeave} doubleClick={doubleClick}/>
        </div>
    );
}

export default Cuadrado;
