import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import ImageChuteBalancoire from '../../../Image/chute.png';
import BoutonRetour from '../../../Components/RetourMap';

// Explication de la situation lorsque l'on clique sur la balancoire. Il s'agit d'une perte de connaissance

const SituationBalancoire=() =>{
    return(
        <div className='div-centrer'>
            <div className='text-margin'>
            Cette jeune fille est tombé de la balancoire et vient de perdre connaissance!
            </div>
            <div>
            <img className='img-Situation'
                src={ImageChuteBalancoire}
                alt="Chute balancoire"/> 
            </div>
            <div className='centrer'>
                <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none', }} to="/GestesChute">Aider la jeune fille</Link> </button>
            </div>
            <BoutonRetour/>
        </div>        
    )
} 

export default SituationBalancoire;