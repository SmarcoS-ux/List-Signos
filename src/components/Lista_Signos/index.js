import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

import Titulo from '../Titulo/';
import Signos from '../Signos/';

export default function Lista_Signos(){
    return(
        <div className="lista-signos">
            <Titulo/>

            <div className="signos">
                <Link className="links" to='/descr_aquario'><Signos 
                    signo = "Aquário"
                    image = "/assets/Aquario.jpg" 
                    dataInicio = "21/01"
                    dataFim = "19/02"/>
                </Link>

                <Link className="links" to='/descr_peixe'><Signos
                    signo = "Peixe"
                    image = "/assets/Peixes.jpg" 
                    dataInicio = "20/02"
                    dataFim = "20/03"/>
                </Link>

                <Link className="links" to='/descr_aries'><Signos
                    signo = "Áries"
                    image = "/assets/Aries.jpg" 
                    dataInicio = "21/03"
                    dataFim = "20/04"/>
                </Link>

                <Link className="links" to='/descr_touro'><Signos
                    signo = "Touro"
                    image = "/assets/Touro.jpg" 
                    dataInicio = "21/04"
                    dataFim = "21/05"/>
                </Link>

                <Link className="links" to='/descr_gemeos'><Signos
                    signo = "Gêmeos"
                    image = "/assets/Gemeos.jpg" 
                    dataInicio = "22/05"
                    dataFim = "21/06"/>
                </Link>

                <Link className="links" to='/descr_cancer'><Signos
                    signo = "Câncer"
                    image = "/assets/Cancer.jpg" 
                    dataInicio = "21/06"
                    dataFim = "23/07"/>
                </Link>

                <Link className="links" to='/descr_leao'><Signos
                    signo = "Leão"
                    image = "/assets/Leao.jpg" 
                    dataInicio = "24/07"
                    dataFim = "23/08"/>
                </Link>

                <Link className="links" to='/descr_virgem'><Signos
                    signo = "Virgem"
                    image = "/assets/Virgem.jpg" 
                    dataInicio = "24/08"
                    dataFim = "23/09"/>
                </Link>

                <Link className="links" to='/descr_libra'><Signos
                    signo = "Libra"
                    image = "/assets/Libra.jpg" 
                    dataInicio = "24/09"
                    dataFim = "23/10"/>
                </Link>

                <Link className="links" to='/descr_escorpiao'><Signos
                    signo = "Escorpião"
                    image = "/assets/Escorpiao.jpg" 
                    dataInicio = "24/10"
                    dataFim = "22/11"/>
                </Link>

                <Link className="links" to='/descr_sagitario'><Signos
                    signo = "Sagitário"
                    image = "/assets/Sagitario.jpg" 
                    dataInicio = "23/11"
                    dataFim = "21/12"/>
                </Link>

                <Link className="links" to='/descr_capricornio'><Signos
                    signo = "Capricórnio"
                    image = "/assets/Capricornio.jpg" 
                    dataInicio = "22/12"
                    dataFim = "20/01"/>
                </Link>
            </div>
        </div>
    );
};