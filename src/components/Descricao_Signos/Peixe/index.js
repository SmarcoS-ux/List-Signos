import React from "react";
import './style.css';

import Descr from '../Descr/';

const Peixe = () => {
    return(
        <div className="signo-peixe">
            <Descr
                image='/assets/Peixes.jpg'
                titulo='Peixe'
                descricao='Quem nasce com o sol no signo de Peixes pode se identificar com virtudes como a 
                           sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante 
                           solidários e muitas vezes têm uma forte conexão com a espiritualidade. Por serem 
                           bastante sonhadores, se iludir com certa facilidade também é uma característica 
                           de Peixes.'/>        
        </div>
    );
}

export default Peixe;