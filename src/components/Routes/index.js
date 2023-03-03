import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Pagina_Inicial from '../Lista_Signos/';
import Aquario from '../Descricao_Signos/Aquario/'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Pagina_Inicial/>}/>
                <Route path='/descr_aquario' element={<Aquario/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;