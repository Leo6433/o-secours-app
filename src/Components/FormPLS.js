import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    useDisclosureState,
    Disclosure,
    DisclosureContent,
  } from "reakit/Disclosure";
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

// Composant FormPLS appelé dans PLS
    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

export default function Form() {
    const disclosure = useDisclosureState({ visible: false });
    const [essai, setEssai]=useState(0);
    let navigate = useNavigate();

    const [state, dispatch] = useGlobalState();

    function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var value = document.getElementById("in").value;

        // Réussite du niveau avec moins de 2 essais
        if (value==='AEDFBC'&& essai===0){
            dispatch({ vie: state.vie + 1 })  
            setEssai(essai => essai - 1 ); 
        }

        // Réussite mais avec trop essais
        else if(value==='AEDFBC'&& essai===2){
            alert('Bonne réponse mais vous avez trop d essais!')
            navigate("/ExplicationPLS");
        }
        else if (essai===2)
        {
            alert('Ce n est toujours pas la bonne combinaison!')
            navigate("/ExplicationPLS");
        }
        // Echec du niveau
        else{
            alert('Ce n est pas la bonne combinaison!')
            setEssai(essai => essai + 1 );
        }
    }

    return (
         /* Affiche un champ de saisie
        Le joueur a le droit à 2 essais maximum sinon son exercice n'est pas validé*/
        <div>
            <input style={{width:180}}
                type='text'
                placeholder="Votre réponse (en majuscule)" 
                id='in'
            /> 
            <div className='centrer'>
                {essai===-1 && <div>Bien joué!</div>}
                {essai>0 && <div>Nombre d'essais restants: {2-essai} </div>}
                <Disclosure onClick={()=>{getValue()}} className='bouton-sauver'{...disclosure}>Valider la réponse</Disclosure>
                <DisclosureContent style={{margin:5}}{...disclosure}><Link style={{color:'black',textDecoration:'none' }} to="/ExplicationPLS"> Voir l'explication →</Link></DisclosureContent>              
            </div>
        </div>
    );
}