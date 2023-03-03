import React from "react";
import './style.css';

import Descr from '../Descr/';

const Libra = () => {
    return(
        <div className="signo-libra">
            <Descr
                image='/assets/Libra.jpg'
                titulo='Libra'
                descricao='Quem nasce com o sol no signo Libra, em geral, se identifica com características 
                           como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e 
                           librianos típicos adoram viver relacionamentos e tendem a ter um pouco de 
                           dificuldade para tomar decisões.'/>        
        </div>
    );
}

export default Libra;