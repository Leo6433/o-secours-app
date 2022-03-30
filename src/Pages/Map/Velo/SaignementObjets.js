import React from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';
import { useCheckboxState, Checkbox } from "reakit/Checkbox";
import BoutonRetour from '../../../Components/RetourMap';
import echarpe from '../../../assets/Saignement/echarpe.png';
import gant from '../../../assets/Saignement/gant.png';
import eau from '../../../assets/Saignement/gouttes-deau.png';
import pansement from '../../../assets/Saignement/pansement.png';
import sac from '../../../assets/Saignement/sac-plastique.png';
import scie from '../../../assets/Saignement/scie-a-main.png';


const SaignementObjet=() =>{
    const checkbox = useCheckboxState({ state: [] });
    return(
        <div className='div-centrer'>
            <div className='text-margin'>
                <h2> Saignement continue</h2>
                <text>
                    La victime saigne de façon continue de la jambe. Il faut arreter le saignement.
                </text>
            </div>
            <div className='fond-beige'>
                <text> Quel(s) objet(s) allez vous utiliser?</text>
                <div >
                    <img className='img-saignement' src={echarpe} alt="echarpe"/>
                    <img className='img-saignement' src={eau} alt="eau"/>
                    <img className='img-saignement' src={gant} alt="gant"/>
                    <img className='img-saignement' src={pansement} alt="pansement"/>
                    <img className='img-saignement' src={sac} alt="sac"/>
                    <img className='img-saignement' src={scie} alt="scie"/>

                </div>   

                <div style={{margin:10}}>
                    <label>
                        <Checkbox {...checkbox} value="echarpe" />
                        Echarpe
                    </label>
                    <label>
                        <Checkbox {...checkbox} value="eau" />
                        Eau
                    </label>
                    <label>
                        <Checkbox {...checkbox} value="gant" />
                        Gant
                    </label>
                    <label>
                        <Checkbox {...checkbox} value="pansement" />
                        Pansement
                    </label>
                    <label>
                        <Checkbox {...checkbox} value="sac" />
                        Sac
                    </label>
                    <label>
                        <Checkbox {...checkbox} value="scie" />
                        Scie
                    </label>            
                </div> 

                <div>Ton choix: {checkbox.state.join(", ")}</div>             
            </div>
            <div>
                <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none' }} to="/ExplicationCompression">Valider les réponses</Link> </button>
            </div>
            <BoutonRetour/>
        </div>      
    );
};

export default SaignementObjet;