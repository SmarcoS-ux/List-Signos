import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

import Titulo from '../../Titulo/';

const Descricao = (props) => {
    return(
        <div className="descr-signos">
            <Titulo/>

            <h2>{props.titulo}</h2>
            <img src={props.image} alt={props.titulo} title={props.titulo}/>
            <p>{props.descricao}</p>
            <Link id="voltar" to='/'>Voltar</Link>
            <p id="copyh">@Dev-Marcos André</p>
        </div>
    );
};

export default Descricao; 