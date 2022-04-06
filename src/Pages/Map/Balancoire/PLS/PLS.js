import React from 'react';
import '../../../style.css';
import ImageEtapesPLS from '../../../../assets/Balancoire/PLS.png'
import Form from '../../../../Components/FormPLS';
import BoutonRetour from '../../../../Components/RetourMap';

function PLS(){
    return(
        <div className='div-centrer'>
        <h2>Etapes d'une PLS</h2>
        <div style={{ margin:20}}>
            <img className='img-Situation'
                src={ImageEtapesPLS}
                alt="Etapes PLS"/> 
            <p>Indiquez l’ordre des étapes</p>
            <Form/>          
        </div>
            <BoutonRetour/>
        </div>
       
    );
};   
export default PLS;
