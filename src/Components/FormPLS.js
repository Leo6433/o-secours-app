import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    useDisclosureState,
    Disclosure,
    DisclosureContent,
  } from "reakit/Disclosure";
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

    
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

        // Réussi le niveau avec moins de 2 essais
        if (value==='AEDFBC'&& essai<2){
            dispatch({ num: state.num + 1 })  
            setEssai(essai => essai - 1 ); 
            navigate("/ExplicationPLS");
        }

        // Réussi mais avec trop essais
        else if(value==='AEDFBC'&& essai>=2){
            alert('Bonne réponse mais vous avez trop d essais!')
            setEssai(essai => essai + 1 );
            navigate("/ExplicationPLS");
        }
        else{
            alert('Ce n est pas la bonne combinanison!')
            setEssai(essai => essai + 1 );
        }
    }

    return (
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