import React from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';
  
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];
    

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

        if (valeur==='Derrière'){
            alert("Bonne réponse !")
            dispatch({ etouffement: state.etouffement + 1 })  
        }
        else{
            alert("Mauvaise réponse ! La réponse était de se placer derrière la victime !")
        }
    }

    return (
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