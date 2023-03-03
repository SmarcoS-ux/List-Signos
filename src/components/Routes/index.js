import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Pagina_Inicial from '../Lista_Signos/';
import Aquario from '../Descricao_Signos/Aquario/';
import Peixe from '../Descricao_Signos/Peixe/';
import Aries from '../Descricao_Signos/Aries/';
import Touro from '../Descricao_Signos/Touro/';
import Gemeos from '../Descricao_Signos/Gemeos/';
import Cancer from '../Descricao_Signos/Cancer/';
import Leao from '../Descricao_Signos/Leao/';
import Virgem from '../Descricao_Signos/Virgem/';
import Libra from '../Descricao_Signos/Libra/';
import Escorpiao from '../Descricao_Signos/Escorpiao/';
import Sagitario from '../Descricao_Signos/Sagitario/';
import Capricornio from '../Descricao_Signos/Capricornio';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Pagina_Inicial/>}/>
                <Route path='/descr_aquario' element={<Aquario/>}/>
                <Route path='/descr_peixe' element={<Peixe/>}/>
                <Route path='/descr_aries' element={<Aries/>}/>
                <Route path='/descr_touro' element={<Touro/>}/>
                <Route path='/descr_gemeos' element={<Gemeos/>}/>
                <Route path='/descr_cancer' element={<Cancer/>}/>
                <Route path='/descr_leao' element={<Leao/>}/>
                <Route path='/descr_virgem' element={<Virgem/>}/>
                <Route path='/descr_libra' element={<Libra/>}/>
                <Route path='/descr_escorpiao' element={<Escorpiao/>}/>
                <Route path='/descr_sagitario' element={<Sagitario/>}/>
                <Route path='/descr_capricornio' element={<Capricornio/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;