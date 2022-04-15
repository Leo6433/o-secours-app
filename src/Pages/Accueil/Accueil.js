import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

// Page de présentation qui expose l'objectif de l'application web 

const Accueil =() => {
    return(
        <div>
            <div className='Bienvenue'>
                <text> Bienvenue dans ce serious game sur les gestes de premiers secours</text>
            </div>
            <div className='text-presentation'>
                <text>Seulement 10% de population est formée aux gestes de premiers secours et 10 000 vies pourraient être sauvées chaque année si 20% de plus de Français apprennent les gestes vitaux. Se former permet d’intervenir lors d’une situation urgente en apportant les premiers soins à une victime en attendant l’arrivée des secours. L'apprentissage de ces gestes constitue donc un enjeu majeur pour la santé et le civisme.</text>
                <br/><br/>
                <text>Ce serious game n’a pas vocation à remplacer une formation PSC1 mais plutôt à initier ou faire des rappels à la population quant aux gestes de premiers secours.
                </text>
            </div>
            <div className='div-centrer'>
                <button className='bouton-jouer'><Link style={{color:'white', textDecoration:'none'}} to="/ChoixSituation">Jouer</Link> </button>
            </div>
        </div>
    )

}
export default Accueil;