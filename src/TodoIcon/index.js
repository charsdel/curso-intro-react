import React from "react";
import './TodoIcon.css';


//importar los botones como componentes de de react para luego llamarlos de manera similar
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

//objeto para los tipo de boton
const iconTypes = {
    "check": color => (
      <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };


function TodoIcon({type, color = 'gray', onClick}){

    return(
    <span
        className={`Icon-container Icon-container--${type}`}
        onClick = {onClick}
    >

        {iconTypes[type](color)}
    </span>
    );
}

export {TodoIcon};

