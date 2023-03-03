import React from "react";
import './style.css';

import Descr from '../Descr/';

const Touro = () => {
    return(
        <div className="signo-touro">
            <Descr
                image='/assets/Touro.jpg'
                titulo='Touro'
                descricao='Quem nasce com o sol no signo Touro pode se identificar com virtudes como a 
                           paciência, o bom gosto e a sensualidade. Afeto e valorização do prazer e conforto 
                           também podem ser características de Touro, mas sabe aquela galera meio teimosa? 
                           Pode ser que tenham o signo de Touro forte no Mapa também...'/>        
        </div>
    );
}

export default Touro;