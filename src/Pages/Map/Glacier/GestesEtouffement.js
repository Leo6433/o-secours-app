import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import BoutonRetour from '../../../Components/RetourMap';
import ImageTapeDos from '../../../assets/ChoixTapeDos.png';
import FormChiffre from '../../../Components/FormChiffre';
import Radio1 from '../../../Components/Radio1';
import Radio2 from '../../../Components/Radio2';

const GestesEtouffement=()=>{
    //const scorePage=0;

    return(
    <div className='div-centrer'>
        <div className='text-margin'>
            <h2> Etoufffement </h2>
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
            <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none' }} to="/ExplicationEtouffement">Valider les réponses</Link> </button>
        </div>
        <BoutonRetour/>     
    </div> 
    );     
        
}

export default GestesEtouffement;