import React, {useState} from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

// Composant FormChiffre appelé dans GesteEtouffement

const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];
// Fonction qui permet à l'utilisateur d'indiquer l'endroit où il faut taper dans le dos pour debloquer ses voies
export default function FormChiffre() {
    const [score, setScore]=useState(0);
    const [erreur, setErreur]=useState(0);
    const [state, dispatch] = useGlobalState();

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var value = document.getElementById("in").value;
        // Vérifie si la valeur est de 3
        if (value==='3'){
            setScore(score => score + 1 );
            alert ('Bonne réponse!')
            // Augmente la variable etouffement qui correspond aux reponses correctes sur la page Geste etouffement
            dispatch({ etouffement: state.etouffement + 1 })  

        }
        else{
            alert('Ce n est pas la bonne réponse!')
            setErreur(erreur => erreur + 1 );
        }
    }
    return (
        /* Affiche un champ de saisie
        Le joueur a le droit à 2 essais maximum sinon son exercice n'est pas validé*/
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