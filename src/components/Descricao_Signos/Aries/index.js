import React from "react";
import './style.css';

import Descr from '../Descr/';

const Aries = () => {
    return(
        <div className="signo-aries">
            <Descr
                image='/assets/Aries.jpg'
                titulo='Áries'
                descricao='Quem tem Sol no signo de Áries pode se identificar com características como a 
                           impulsividade e a coragem. Sabe aquela galera que não tem medo de nada? 
                           Provavelmente tem Áries forte no Mapa. Eles também amam motivar quem está ao 
                           seu redor e são guerreiros por natureza (típica característica de Áries, não?'/>        
        </div>
    );
}

export default Aries;