import React, { useCallback } from "react";
import './Button.css';


function Button(props) {
    return(
        <button onClick={!isNaN(props.text) ? () => {document.getElementById('calculator-frame__display').innerHTML === '0' ? document.getElementById('calculator-frame__display').innerHTML = props.text : document.getElementById('calculator-frame__display').innerHTML += props.text} : props.onclick}>
            {props.text}
        </button>
    )
}

export default Button