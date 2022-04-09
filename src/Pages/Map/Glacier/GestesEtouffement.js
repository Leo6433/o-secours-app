import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import BoutonRetour from '../../../Components/RetourMap';
import ImageTapeDos from '../../../assets/ChoixTapeDos.png';
import FormChiffre from '../../../Components/FormChiffre';
import Radio1 from '../../../Components/Radio1';
import Radio2 from '../../../Components/Radio2';
import {globalStateContext} from '../../../App';
import {dispatchStateContext} from '../../../App';
  
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

   

const GestesEtouffement=()=>{
    const [state, dispatch] = useGlobalState();

    function ValidationReponses() {
        // Sélectionner l'élément input et récupérer sa valeur
        if (state.etouffement>=2) {
            dispatch({ num: state.num + 1 })  
            alert("Niveau validé!")
           }
        else{
            alert("Niveau pas validé!")
        }
    }

    return(
    <div className='div-centrer'>
        <div className='text-margin'>
            <h2> Etoufffement </h2>
            <div>Vos réponses sur la page: <c>{state.etouffement}</c></div>
            <br/>
            <text>
                La victime ne peut ni parler, ni respirer, ni tousser. Il va falloir débloquer ses voies aériennes.
            </text>
        </div>
        <div className='text-margin'>           
            <Radio1/>
            <Radio2/>                   
        </div> 
        <div style={{ margin:20}}>
            <p> Indiquer à quel endroit il faut taper pour libérer la nourriture bloquée!</p>
            <img className='img-Situation'
                src={ImageTapeDos}
                alt="Chute vélo"/>            
        </div>
        <FormChiffre/>

        <div>
            <button className='bouton-sauver' onClick={ValidationReponses}><Link style={{color:'white', textDecoration:'none' }} to="/ExplicationEtouffement">Valider les réponses</Link> </button>
        </div>
        <BoutonRetour/>     
    </div> 
    );     
        
}

export default GestesEtouffement;