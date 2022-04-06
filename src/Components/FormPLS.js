import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    useDisclosureState,
    Disclosure,
    DisclosureContent,
  } from "reakit/Disclosure";

export default function Form() {
    const disclosure = useDisclosureState({ visible: false });
    const [score, setScore]=useState(0);

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var value = document.getElementById("in").value;
        // Afficher la valeur
        if (value==='AEDFBC'){
            setScore(score => score + 1 );
        }
        else{
            alert('Ce n est pas la bonne combinanison! Tu peux réessayer!')
        }
    }

    return (
        <div>
            <input style={{width:180}}
                type='text'
                placeholder="Votre réponse (en majuscule)" 
                id='in'
            /> 
            <div className='centrer'>
                <Disclosure onClick={()=>{getValue()}} className='bouton-sauver'{...disclosure}>Valider la réponse</Disclosure>
                {score===1 && <div>Bien joué!</div>}
                <DisclosureContent style={{margin:5}}{...disclosure}><Link style={{color:'black',textDecoration:'none' }} to="/ExplicationPLS"> Voir l'explication →</Link></DisclosureContent>              
            </div>
        </div>
    );
}