import React from 'react';
import '../../style.css';
import echarpe from '../../../assets/Saignement/echarpe.png';
import gant from '../../../assets/Saignement/gant.png';
import sac from '../../../assets/Saignement/sac-plastique.png';
import BoutonRetour from '../../../Components/RetourMap';


const ExplicationCompression=() =>{
    return(
        <div className='div-centrer'>
            <div className='text-margin'>
                <p>Les bonnes réponses étaient:</p>
            </div>
            <div className='fond-beige'>
                <img className='img-saignement' src={echarpe} alt="echarpe"/>
                <img className='img-saignement' src={gant} alt="gant"/>
                <img className='img-saignement' src={sac} alt="sac"/>
            </div>

            <div className='text-margin'>
                <p>Lors d’un saignement continue, il faut exercer une pression sur la plaie avec vos <b>mains protégées</b> (gants jetables, sac plastique ou linge) pour <b>ne pas avoir de contact avec le sang de la victime</b>.</p>
            </div>
            <BoutonRetour/>
        </div>    
    );
};   
export default ExplicationCompression;