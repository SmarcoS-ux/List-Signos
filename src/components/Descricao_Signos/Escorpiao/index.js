import React from "react";
import './style.css';

import Descr from '../Descr/';

const Escorpiao = () => {
    return(
        <div className="signo-escorpiao">
            <Descr
                image='/assets/Escorpiao.jpg'
                titulo='Escorpiao'
                descricao='Quem nasce com o sol no signo Escorpião pode se identificar com características 
                           como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos 
                           costumam ser bastante passionais e muito generosos. O espírito de detetive e o 
                           sexto sentido afiado também são bem marcantes em quem tem escorpião forte no mapa 
                           também.'/>        
        </div>
    );
}

export default Escorpiao;