import React from "react";
import './style.css';

import Descr from '../Descr/';

const Leao = () => {
    return(
        <div className="signo-leao">
            <Descr
                image='/assets/Leao.jpg'
                titulo='Leão'
                descricao='Quem nasce com o sol no signo Leão pode se identificar com características como a 
                           criatividade e a coragem. Sabe aquela galera com a autoestima lá em cima? 
                           Provavelmente tem Leão signo forte no mapa. A generosidade e o otimismo também 
                           podem ser bem presentes.'/>        
        </div>
    );
}

export default Leao;