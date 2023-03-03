import React from "react";
import './style.css';

import Descr from '../Descr/';

const Cancer = () => {
    return(
        <div className="signo-cancer">
            <Descr
                image='/assets/Cancer.jpg'
                titulo='Câncer'
                descricao='Quem nasce com o sol no signo de Câncer pode se identificar com características 
                           como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam 
                           ter uma ótima intuição, além de um forte vínculo com seus familiares. A busca 
                           constante por segurança também é uma característica do signo de câncer.'/>        
        </div>
    );
}

export default Cancer;