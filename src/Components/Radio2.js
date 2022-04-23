import React, {useState} from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';
  
// Composant Radio 2 appelé dans GesteEtouffement

const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

  // Fonction qui permet à l'utilisateur de choisir le nombre de tappe à effectuer sur une personne qui s'etouffe
export default function Radio2() {
    const [state, dispatch] = useGlobalState();
    const [essai, setEssai]=useState(0);
    const [score, setScore]=useState(0);

    function getValue() {
    var boutons = document.getElementsByName('coup');
    var valeur;
    // Récupère la valeur de l'element selectionné
    for(var i = 0; i < boutons.length; i++){
        if(boutons[i].checked){
            valeur = boutons[i].value;
        }
    }
     // Bonne réponse en 1 essai
    if (valeur==='4/5' && essai===0){
        setScore(score => score + 1 );
        dispatch({ etouffement: state.etouffement + 1 })  
    }
     // Mauvaise réponse 
    else if (valeur!=='4/5'){
        alert("Mauvaise réponse ! La réponse était 4 à 5 coups")
        setEssai(essai => essai + 1 ); 
    }
    }

    return (
        //Utilisation de input et label pour créer des boutons de type radio
        <div>
            <p> Nombre de coups à frapper par series : </p> 
            <div className='rectangle-beige'>
            <input onClick={()=>{getValue()}} type="radio" name="coup" id="coup1" value="1/3"></input>
                <label for="coup1">1 à 3</label>
            <input onClick={()=>{getValue()}} type="radio" name="coup" id="coup2" value="4/5"></input>
                <label for="coup2">4 à 5</label>
            <input onClick={()=>{getValue()}} type="radio" name="coup" id="coup3" value="6/7"></input>
                <label for="coup3">6 à 7</label>
            <input onClick={()=>{getValue()}} type="radio" name="coup" id="coup4" value="7+"></input>
                <label for="coup4">7 ou +</label>
            </div>
            {score===1 && <div> <br/>Bien joué! </div>} 
        </div>
    );
}