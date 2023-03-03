import React from "react";
import './style.css';

import Titulo from '../../Titulo/';

const Descricao = (props) => {
    return(
        <div className="descr-signos">
            <Titulo/>

            <h2>{props.titulo}</h2>
            <img src={props.image} alt={props.titulo}/>
            <p>{props.descricao}</p>
        </div>
    );
};

export default Descricao;