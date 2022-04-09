import React, {useState} from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';
  
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

export default function FormChiffre() {
    const [score, setScore]=useState(0);
    const [erreur, setErreur]=useState(0);
    const [state, dispatch] = useGlobalState();

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var value = document.getElementById("in").value;
        // Afficher la valeur
        if (value==='3'){
            setScore(score => score + 1 );
            alert ('Bonne réponse!')
            dispatch({ etouffement: state.etouffement + 1 })  

        }
        else{
            alert('Ce n est pas la bonne réponse! Tu peux réessayer!')
            setErreur(erreur => erreur + 1 );
        }
    }
    return (
        <div>
            <input style={{width:180}}
                type='text'
                placeholder="Saisir un chiffre entre 1 et 5" 
                id='in'
            />
            <button style={{backgroundColor:'#46c3b5', color:"white", border:"none", margin:3}} onClick={()=>{getValue()}}>✓</button>
            {score===1 && <div> Bien joué! </div>}
            {erreur>=2 && <div>Vous n'avez pas validé cet exercice!</div>} 
        </div>
    );
}