import React from 'react';
import '../../style.css';
import BoutonRetour from '../../../Components/RetourMap';
import echarpe from '../../../Image/Saignement/echarpe.png';
import gant from '../../../Image/Saignement/gant.png';
import eau from '../../../Image/Saignement/gouttes-deau.png';
import pansement from '../../../Image/Saignement/pansement.png';
import sac from '../../../Image/Saignement/sac-plastique.png';
import scie from '../../../Image/Saignement/scie-a-main.png';
import Checkbox from '../../../Components/Checkbox';

const SaignementObjet=() =>{

    return(
        <div className='div-centrer'>
            <div className='text-margin'>
                <h2> Saignement continue</h2>
                <p>
                    La victime saigne de façon continue de la jambe. Il faut arrêter le saignement.
                </p>
            </div>
            <div className='fond-beige'>
                <text> Quel(s) objet(s) allez vous utiliser?</text>
                <div >
                    <img className='img-saignement' src={echarpe} alt="echarpe"/>
                    <img className='img-saignement' src={eau} alt="eau"/>
                    <img className='img-saignement' src={gant} alt="gant"/>
                    <img className='img-saignement' src={pansement} alt="pansement"/>
                    <img className='img-saignement' src={sac} alt="sac"/>
                    <img className='img-saignement' src={scie} alt="scie"/>
                </div> 
                <Checkbox/>             
            </div>
            <BoutonRetour/>
        </div>      
    );
};

export default SaignementObjet;