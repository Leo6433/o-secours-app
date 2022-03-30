import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

export default function Form() {

    let navigate=useNavigate();

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var value = document.getElementById("in").value;
        // Afficher la valeur
        if (value==='AEDFBC'){
            navigate("/ExplicationBalancoire")
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
                <button onClick={()=>{getValue()}} className='bouton-sauver'><Link style={{color:'white', textDecoration:'none' }} to="/ExplicationBalancoire">Valider les réponse</Link> </button>
            </div> 
        </div>
    );
}