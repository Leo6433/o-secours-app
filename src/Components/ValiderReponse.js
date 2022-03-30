import React from 'react';
import {Link} from 'react-router-dom';

// doit redigérer vers des pages différentes en fonction de l'appel
function ValiderReponse() {
    return (
        <div>           
            <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none' }} to="/">Valider les réponses</Link> </button>
        </div>
    );
}
export default ValiderReponse;
            