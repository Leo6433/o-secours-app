import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import ImageGlacier from '../../../Image/Glacier.png';
import ImageEtouffement from '../../../Image/Etouffement.png'
import BoutonRetour from '../../../Components/RetourMap';
  
const SituationGlacier=() =>{
    
    return (
    <div className='div-centrer'>
        <div className='text-margin'>
            <p>En mangeant son cornet de glace, cette jeune fille  s’étouffe.</p>
        </div>
        <div>
        <img className='img-Situation'
            src={ImageGlacier}
            alt="Glacier"/> 
        <img className='img-Situation2'
            src={ImageEtouffement}
            alt="Etouffement jeune fille"/> 
        </div>
        <div className='centrer'>
            <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none', }} to="/GestesEtouffement">Aider la jeune fille</Link> </button>
        </div> 
        <BoutonRetour/>  
    </div> 
      
    );
  }
  
  
export default SituationGlacier;
/*const SituationGlacier=() =>{
    return(
        <div>
            Situation etouffement glacier
        </div>
        
    )
} 

export default SituationGlacier;*/