import React, {useState} from "react";
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';
import {useNavigate} from 'react-router-dom';

    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

// Checkbox où le joueur choisit un objet pour arreter le saignement

export default function Checkbox() { 
  const [essai, setEssai]=useState(0);
  const [state, dispatch] = useGlobalState();
  let navigate = useNavigate();
  
  // Permet de recuperer la valeur de l'element selectionné
  function getValue() {
    var boutons = document.getElementsByName('saignement');
    var valeur="";
    for(var i = 0; i< boutons.length; i++){
        if(boutons[i].checked){
            valeur += boutons[i].value + ","; 
        }
    }
    alert("Vos réponses : "+ valeur);

    if(valeur==='echarpe,gant,sac,')
    {
      alert("Bonne réponse!")
      dispatch({ vie: state.vie + 1 })
      navigate("/ExplicationCompression");
    }
    else 
    {
      alert("Mauvaise réponse! Il y a 3 bonnes réponses!")
      setEssai(essai => essai + 1 ); 
    }
    if (essai===2)
    {
      navigate("/ExplicationCompression");
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
            Nombre d'essais restants: {2-essai}
        </div>
  );
}