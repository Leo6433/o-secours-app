import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import BoutonRetour from '../../../Components/RetourMap';
import ImageTapeDos from '../../../Image/ChoixTapeDos.png';
import ImageQuestion from '../../../Image/point-dinterrogation.png'
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
            dispatch({ vie: state.vie + 1 })  
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
            <div>Vos bonnes réponses sur la page: <c title="Obtenir un score supérieur à 2"> {state.etouffement}/3 </c>
            <img className='img-question'
                src={ImageQuestion}
                alt="Indication"
                title="Obtenir un score de 2 ou plus pour réussir le niveau"/>   
            </div>
            
            <p>
                La victime ne peut ni parler, ni respirer, ni tousser. Il va falloir débloquer ses voies aériennes.
            </p>
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