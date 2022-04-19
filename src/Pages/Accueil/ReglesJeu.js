import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

// Page qui explique les règles du jeu
// Accesible par toutes les pages puisque le bouton 'règle du jeu' est placé dans le header

const Regle =() => {
    return(
        <div>
            <div className='Bienvenue'>
                <text> Règles du jeu </text>
            </div>
            <div className='text-presentation'>
                <text>Le joueur sera plongé dans une rue ou un parc et différentes situations d'urgence seront présentées à lui telles qu’une personne subissant en arrêt cardiaque, une plaie ouverte d’un enfant qui vient de tomber de sa balançoire ou encore d’un étouffement d’un adolescent après avoir mangé son gâteau.<br/>
                    <br/>
                    Il suffit de cliquer sur l'une des ★ pour faire apparaitre la situation.<br/>
                    <br/>
                    Le joueur devra ensuite sauver la personne en répondant correctement à une question ou en résolvant une énigme en rapport avec la situation. <br/>
                    <br/>
                    Des explications sur les gestes de secours seront ensuite fournies dans le but d'éduquer. <br/>
                    En haut à gauche, le joueur pourra voir combien de vie il a réussit à sauver. Au bout de 4 vies sauver, il aura la possibilité de changer de niveau.<br/>
                </text>
            </div>
            <div className='div-centrer'>
                <button className='bouton-jouer'><Link style={{color:'white', textDecoration:'none'}} to="/ChoixSituation">Revenir au jeu</Link> </button>
            </div>
        </div>
    )

}
export default Regle;

