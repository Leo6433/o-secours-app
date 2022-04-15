import React from 'react';
import '../style.css';
import ImageEcole from '../../Image/ChoixSituation/Ecole.jpeg';
import ImageParc from '../../Image/ChoixSituation/Parc.jpeg';
import {Link} from 'react-router-dom';

// Page qui permet au joueur de choisir une situation
// Seulement la page Parc existe mais c'était pour montrer que le jeu fonctionne avec différentes situations à choisir.

const ChoixSituation =() => {
    return(
        <div className='div-centrer'>
            <h2> Choix du lieux</h2>
            <div>
                <img className='img-Situation2'
                    src={ImageEcole}
                    alt="Ecole"/> 
                <p>A l'école</p>
                <Link to="/MapParc">   
                <img className='img-Situation2'
                    src={ImageParc}
                    alt="Parc"/> 
                </Link>
                <p>Au parc</p>
            </div>

        </div>
    )

}
export default ChoixSituation;