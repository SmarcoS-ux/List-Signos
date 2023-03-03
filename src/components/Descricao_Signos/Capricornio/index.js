import React from "react";
import './style.css';

import Descr from '../Descr/';

const Capricornio = () => {
    return(
        <div className="signo-capricornio">
            <Descr
                image='/assets/Capricornio.jpg'
                titulo='Capricórnio'
                descricao='Quem tem Sol em Capricórnio pode se identificar com virtudes como persistência e 
                           responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos 
                           seus limites. A relação próxima com o trabalho também pode ser uma característica 
                           de capricórnio bem marcante.'/>        
        </div>
    );
}

export default Capricornio;