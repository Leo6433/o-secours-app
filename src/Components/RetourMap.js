import React from 'react';
import '../Pages/style.css';
import {Link} from 'react-router-dom';
import IconeRetour from '../assets/retour.png';

function Retour(){
    return(
    <div style={{textAlign:'left'}}>               
        <button className='bouton-retour'>
            <img style={{height:10}}src={IconeRetour} alt="<"/> 
            <Link style={{color:'black',textDecoration:'none'}} to="/MapParc">Retour à la Map</Link> 
        </button>
    </div>       
    )
}
export default Retour;
