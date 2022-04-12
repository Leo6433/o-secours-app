import React from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';
  
// Composant Radio 1 appelé dans GesteEtouffement

const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];
    
    // Fonction qui permet à l'utilisateur de choisir la position pour taper dans le dos d'une personne qui s'etouffe
export default function Radio() {
    const [state, dispatch] = useGlobalState();

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        if (document.getElementById('position-a').checked) {
            var valeur = document.getElementById('position-a').value;
           }
        if (document.getElementById('position-b').checked) {
            valeur = document.getElementById('position-b').value;
           }
        // Bonne réponse
        if (valeur==='Derrière'){
            alert("Bonne réponse !")
            dispatch({ etouffement: state.etouffement + 1 })  
        }
        // Mauvaise réponse 
        else{
            alert("Mauvaise réponse ! La réponse était de se placer derrière la victime !")
        }
    }

    return (
        //Utilisation de input et label pour créer des boutons de type radio
        <div>
            <p>Il faut se placer:</p> 
            <input type="radio" name="position" className="radio-position" id="position-a" value="Devant"></input>
                <label for="position-a">Devant la victime</label>
            <input type="radio" name="position" className="radio-position" id="position-b" value="Derrière"></input>
                <label for="position-b">Derrière la victime</label>

            <div className='centrer'>
                <br/>
                <button style={{backgroundColor:'#46c3b5', color:"white", border:"none"}} onClick={()=>{getValue()}}>✓</button>
            </div> 
        </div>
    );
}