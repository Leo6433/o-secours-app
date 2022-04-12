import React from "react";
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

// Checkbox où le joueur choisit un objet pour arreter le saignement

export default function Checkbox() { 

  const [state, dispatch] = useGlobalState();
  
  // Permet de recuperer la valeur de l'element selectionné
  function getValue() {
    var boutons = document.getElementsByName('saignement');
    var valeur;
    for(var i = 0; i< boutons.length; i++){
        if(boutons[i].checked){
            valeur = boutons[i].value; 
        }
    }
    alert("Votre réponse : "+ valeur);

    if(valeur==='gant' || valeur==='echarpe' || valeur==='sac')
    {
      alert("Bonne réponse!")
      dispatch({ vie: state.vie + 1 })
    }

    else if (valeur==='echarpe' || valeur==='eau' || valeur==='scie' || valeur==='pansement')
    {
      alert("Mauvaise réponse!")
    }
  }
    return (
        <div>   
            <div>
              <input type="checkbox" name="saignement" value="echarpe"/>
                Echarpe
              <input type="checkbox" name="saignement" value="eau"/>
                Eau
              <input type="checkbox" name="saignement" value="gant"/>
                Gant
              <input type="checkbox" name="saignement" value="pansement"/>
                Pansement
              <input type="checkbox" name="saignement" value="sac"/>
                Sac
              <input type="checkbox" name="saignement" value="scie"/>
                Scie
            </div> 
            <div>
                <button className='bouton-sauver' onClick={()=>{getValue()}}>Valider les réponses</button>
            </div>
        </div>
  );
}