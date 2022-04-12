import React from 'react';
import {
    useDisclosureState,
    Disclosure,
    DisclosureContent,
  } from "reakit/Disclosure";
import {Link} from 'react-router-dom';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

// Composant RadioChute appelé dans GesteChute (Balancoire)

const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

// Fonction qui permet de selectionner quel est la premiere chose à faire en cas de perte de conscience
export default function Radio2() {
    const disclosure = useDisclosureState({ visible: false });
    const [state, dispatch] = useGlobalState();
    
    function getValue() {
        var boutons = document.getElementsByName('chute');
        var valeur;
        // Récupère la valeur de l'element selectionné
        for(var i = 0; i < boutons.length; i++){
        if(boutons[i].checked){
                valeur = boutons[i].value;
            }
        }
         // Bonne réponse
        if (valeur==='voies'){
            alert("Bonne réponse !")
            dispatch({ vie: state.vie + 1 })   
        }
         // Mauvaise réponse 
        else{
            alert("Mauvaise réponse ! La réponse était de libérer les voies aériennes")
        }
        }

    return (
        //Utilisation de input et label pour créer des boutons de type radio
        <div>
            <div>
            <input type="radio" name="chute" id="chute1" value="respiration" checked></input>
                <label className='radioChute'for="chute1">Vérifier la respiration</label>
            <input type="radio" name="chute" id="chute2" value="appeler"></input>
                <label className='radioChute' for="chute2">Appeler les secours</label>
            <input type="radio" name="chute" id="chute3" value="voies"></input>
                <label className='radioChute' for="chute3">Libérer les voies aériennes</label>
            <input type="radio" name="chute" id="chute4" value="parler"></input>
                <label className='radioChute' for="chute4">Lui parler</label>
            <input type="radio" name="chute" id="chute5" value="secouer"></input>
                <label className='radioChute' for="chute5">Le secouer et le réveiller</label>
            </div>
            <div className='centrer'>
            <Disclosure onClick={()=>{getValue()}} className='bouton-sauver'{...disclosure}>Valider la réponse</Disclosure>
            <DisclosureContent style={{margin:5}}{...disclosure}><Link style={{color:'black',textDecoration:'none' }} to="/ExplicationBalancoire"> Voir l'explication →</Link></DisclosureContent>              
        </div>
        </div>
    );
}