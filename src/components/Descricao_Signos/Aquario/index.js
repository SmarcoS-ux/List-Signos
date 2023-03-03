import React from "react";
import './style.css';

import Descr from '../Descr/';

const Aquario = () => {
    return(
        <div className="signo-aquario">
            <Descr
                image='/assets/Aquario.jpg'
                titulo='Aquário'
                descricao='Um aquariano ou uma aquariana pode se identificar com características como o 
                           desejo de inovar e a independência. Sabe aquela galera diferentona? São eles. 
                           Aquário signo costuma ser bastante idealista e seus nativos prezam por 
                           experiências que trazem liberdade. Podem ter posturas consideradas radicais e é 
                           bem comum o aquariano ser o "do contra" da turma.'/>        
        </div>
    );
}

export default Aquario;