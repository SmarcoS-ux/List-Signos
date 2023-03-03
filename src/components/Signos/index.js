import React from 'react';
import './style.css';

const ItemLista = (props) => {
    return(
        <div className="itemList">
            <div className="carta">
                <div className="nome-signo">
                    {props.signo}
                </div>

                <div className="img-signo">
                    <img src={props.image} alt={props.signo}/>
                </div>
                
                <div className="datas">
                    {props.dataInicio} - {props.dataFim}
                </div>
            </div>
        </div>
    );
};

export default ItemLista; 