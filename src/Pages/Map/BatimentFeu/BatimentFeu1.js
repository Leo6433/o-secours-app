import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import ImageFeu from '../../../Image/immeubleFeu.png';
import ImageBrulure from '../../../Image/GarconBrulure.png';
import BoutonRetour from '../../../Components/RetourMap';

const SituationFeu=() =>{
    return(
        <div className='div-centrer'>
            <div className='text-margin'>
                <p>Ce batiment prend feu et cet adolescent sort avec une brûlure au bras.</p>
            </div>
            <div>
            <img className='img-Situation'
                src={ImageFeu}
                alt="Feu"/> 
            <img className='img-Situation2'
                src={ImageBrulure}
                alt="GarconBrulure"/> 
            </div>
            <div className='centrer'>
                <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none'}} to="/Brulure">Aider l'adolescent</Link> </button>
            </div>
            <BoutonRetour/>
        </div>        
    )
} 
export default SituationFeu;