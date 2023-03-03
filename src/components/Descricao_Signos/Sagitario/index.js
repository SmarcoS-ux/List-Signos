import React from "react";
import './style.css';

import Descr from '../Descr/';

const Sagitario = () => {
    return(
        <div className="signo-sagitario">
            <Descr
                image='/assets/Sagitario.jpg'
                titulo='Sagitário'
                descricao='Quem nasce com o sol no signo de Sagitário pode se identificar com características 
                           como o otimismo e o desejo de liberdade. Sagitarianas e sagitarianos típicos 
                           costumam ser viajantes e, geralmente, enxergam o mundo inteiro como sua casa. 
                           A jovialidade também é uma característica marcante de Sagitário.'/>        
        </div>
    );
}

export default Sagitario;