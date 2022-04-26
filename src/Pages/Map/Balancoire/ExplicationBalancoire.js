import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import BoutonRetour from '../../../Components/RetourMap';

// Correction et explication sur le premier geste à faire avec une personne inconsciente
// 2 boutons qui permettent de choisir entre 2 nouvelles situations

const ExplicationBalancoire=() =>{
    return(
        <div className='div-centrer'>
            <h2>Etapes à suivre avec une personne inconsciente</h2>
            <div className='text-margin fond-beige'>
                <p> <c> 1</c> Il faut vérifier sa respiration. </p>
                <br/>
                <p> <c> 2</c> Si elle respire   → Mettre la victime en Position Latéral de Sécurité (PLS).</p>
                <p> Si elle ne respire pas  → Commencer un massage cardiaque.</p>
                <br/>
                <p> <c> 3</c> Prévenir les secours! </p>
            </div>
            <div>
                <p>Choississez votre situation suivante:</p>
                <button className='bouton-sauver'><Link style={{color:'black', textDecoration:'none' }} to="/PLS">La victime respire </Link> </button>
                <button className='bouton-sauver'><Link style={{color:'black', textDecoration:'none' }} to="/MassageCardiaque">La victime ne respire pas</Link> </button>
            </div>
            <BoutonRetour/>
        </div>    
    );
};   
export default ExplicationBalancoire;