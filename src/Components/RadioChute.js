import React from 'react';
import {
    useDisclosureState,
    Disclosure,
    DisclosureContent,
  } from "reakit/Disclosure";
import {Link} from 'react-router-dom';

export default function Radio2() {
    const disclosure = useDisclosureState({ visible: false });

    function getValue() {
    var boutons = document.getElementsByName('chute');
    var valeur;
        for(var i = 0; i < boutons.length; i++){
        if(boutons[i].checked){
            valeur = boutons[i].value;
        }
    }
    if (valeur==='voies'){
        alert("Bonne réponse !")
    }
    else{
        alert("Mauvaise réponse ! La réponse était de libérer les voies aériennes")
    }
    }

    return (
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