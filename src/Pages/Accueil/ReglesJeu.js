import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

// Page qui explique les règles du jeu
// Accesible par toutes les pages puisque le bouton 'règle du jeu' est placé dans le header

const Regle =() => {
    return(
        <div>
            <div className='Bienvenue'>
                <text> Règle du jeu </text>
            </div>
            <div className='text-presentation'>
                <text>Le joueur sera plongé dans une rue ou un parc et différentes situations d'urgence seront présentées à lui telles qu’une personne subissant un arrêt cardiaque, une plaie ouverte d’un enfant qui vient de tomber de sa balançoire ou encore un étouffement d’un enfant pendant son goûter.<br/>
                    <br/>
                    Il suffit de cliquer sur l'une des ★ pour faire apparaître la situation.<br/>
                    <br/>
                    Le joueur devra ensuite sauver la personne en répondant correctement à une question ou en résolvant une énigme en rapport avec la situation. <br/>
                    <br/>
                    Des explications sur les gestes de secours seront ensuite fournies dans le but d'instruire le joueur. <br/>
                    En haut à gauche, le joueur pourra voir combien de vies il a réussi à sauver. Au bout de 4 vies sauvées, il aura la possibilité de changer de niveau et de lieu.<br/>
                </text>
            </div>
            <div className='div-centrer'>
                <button className='bouton-jouer'><Link style={{color:'white', textDecoration:'none'}} to="/ChoixSituation">Revenir au jeu</Link> </button>
            </div>
        </div>
    )

}
export default Regle;

