import React from "react";
import './style.css';

import Descr from '../Descr/';

const Gemeos = () => {
    return(
        <div className="signo-gemeos">
            <Descr
                image='/assets/Gemeos.jpg'
                titulo='Gêmeos'
                descricao='Quem nasce com o sol no signo de Gêmeos geralmente se identifica com 
                           características como a curiosidade, a inteligência e o desejo de liberdade. 
                           Sabe aquela galera que ama ler, aprender coisas novas, puxar conversa e fazer 
                           novas amizades? Provavelmente tem gêmeos signo forte no mapa.'/>        
        </div>
    );
}

export default Gemeos;