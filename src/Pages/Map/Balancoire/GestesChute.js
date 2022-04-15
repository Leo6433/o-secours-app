import React from 'react';
import '../../style.css';
import RadioChute from '../../../Components/RadioChute';
import BoutonRetour from '../../../Components/RetourMap';
import parle from '../../../Image/Reaction/parlant.png';
import reveil from '../../../Image/Reaction/reveil.png';
import respiration from '../../../Image/Reaction/respiration.png';
import premierSecours from '../../../Image/Reaction/premiers-secours.png';
import difficulte from '../../../Image/Reaction/difficulteRespirer.png';

// Bouton radio pour choisir quelle est la première chose à faire avec une personne inconsciente

const GesteChute=()=>{

    return(
    <div className='div-centrer'>
        <div className='text-margin'>
            <h2> Chute </h2>
            <text>
                La victime a fait une violente chute, elle est au sol et ne réagit pas.
            </text>
        </div>
        <div >
            <text style={{fontWeight:"bold"}}> Quelle est la première chose à faire ?</text>
            <div >
                <img className='img-reaction' src={difficulte} alt="respiration"/>  
                <img className='img-reaction' src={premierSecours} alt="appelSecours"/>  
                <img className='img-reaction' src={respiration} alt="respiration"/>
                <img className='img-reaction' src={parle} alt="parlant"/>
                <img className='img-reaction' src={reveil} alt="reveil"/>
                            
            </div>
        <RadioChute/>
        </div>
        <BoutonRetour/>
    </div> 
    );     
        
    }


export default GesteChute;