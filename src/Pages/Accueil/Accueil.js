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
                Seulement 10% de la population est formée aux gestes de premiers secours et 10 000 vies pourraient être sauvées chaque année si 20% de plus de Français apprennaient les gestes vitaux. Se former permet d’intervenir lors d’une situation urgente en apportant les premiers soins à une victime en attendant l’arrivée des secours. L'apprentissage de ces gestes constitue donc un enjeu majeur pour la santé et le civisme.
                <br/><br/>
                Ce serious game n’a pas vocation à remplacer une formation PSC1 mais plutôt à initier ou faire des rappels à la population quant aux gestes de premiers secours.<br/><br/>
                Ce projet a été réalisé par Léonore Bordenave dans le cadre du Projet Individuel d'Informatique de 2e année de l'ENSC.
                <br/><br/><b> Viens apprendre à sauver des vies!!</b>
            </div>
            <div className='div-centrer'>
                <button className='bouton-jouer'><Link style={{color:'white', textDecoration:'none'}} to="/ChoixSituation">Commencer à jouer</Link> </button>
                
            </div>
        </div>
    )

}
export default Accueil;