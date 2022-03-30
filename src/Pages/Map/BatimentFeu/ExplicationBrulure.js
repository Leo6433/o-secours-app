import React from 'react';
import BoutonRetour from '../../../Components/RetourMap';

const ExplicationBrulure=() =>{
    return(
        <div className='div-centrer'>
            <h2>Explication sur les brûlures</h2>
            <div className='container'>
                <div className='explication-brulure'>
                    <div><b> Réponse 1: Aspect, douleur, étendue, localisation </b></div>
                    <div> La réponse 1 concerne les plaies. Comme moyen mnémotechnique, on peut utiliser "adel".</div>
                </div>
                <div className='explication-brulure'>
                    <div><b> Réponse 2: Un drap stérile ou un pansement pour brûlés </b></div>
                    <div> On peut emballer une brûlure avec tout matériel stérile tel qu’un drap, un champ, une compresse ou un pansement pour brûlés (SSA).</div>
                </div>
            
                <div className='explication-brulure'>
                    <div><b> Réponse 3: Couleur d'une brûlure au 2de degrès = Rouge-Rose </b></div>
                    <div>Brulure superficielle (1er degrè): Rouge </div>
                    <div>Brulure superficielle (2ème degrè): Rouge-Rose </div>
                    <div>Brulure profonde (2ème degrè): Rouge mat avec des zones pâles </div>
                    <div>Brulure profonde (3ème degrè): Parcheminée, beige, brune, noire </div>
                </div>
                <div className='explication-brulure'>
                    <div><b> Réponse 4: Absence de douleur et de sensibilité </b></div>
                    <div>Les brûlures du troisième degré (absence de douleur et de sensibilité) sont des urgences médicales. Il faut donc prévenir les secours en faisant le 15 ou le 112 à partir d’un mobile.
                    En attendant leur intervention, mettre la lésion sous l’eau fraîche du robinet ou de la douche pendant 15 minutes. </div>   
                </div>
                <div className='explication-brulure'>
                    <div><b> Réponse 5: Sous de l eau tiède à 15° pendant 15 min </b></div>
                    <div>Appliquez la règle des 3 « 15 » : mettez la région touchée sous une eau fraîche à 15 degrés environ, pendant 15 min à 15 cm du robinet afin d’atténuer la sensation de chaleur.</div>   
                </div>
            </div>  
        
            <BoutonRetour/>
            </div>
                     
    )
} 

export default ExplicationBrulure;