import React from "react";
import './style.css';

import Descr from '../Descr/';

const Virgem = () => {
    return(
        <div className="signo-virgem">
            <Descr
                image='/assets/Virgem.jpg'
                titulo='Virgem'
                descricao='Quem nasce com o Sol no signo Virgem pode se identificar com características como a 
                           objetividade e a organização. Virginianas e virginianos típicos costumam buscar 
                           constantemente a perfeição e identificar facilmente detalhes que passam despercebidos 
                           por todos os outros, essa é uma das características de Virgem mais admiradas.'/>        
        </div>
    );
}

export default Virgem;