import React from 'react';
import '../../style.css';
import ImageChuteVelo from '../../../assets/ChuteVelo.jpeg';
import BoutonRetour from '../../../Components/RetourMap';
import {Link} from 'react-router-dom';

class SituationVelo extends React.Component {
    render(){
        return (        
        <div className='div-centrer'>
            <div className='text-margin'>
                <p>Ce petit garçon est tombé de son vélo et saigne fortement notamment de la jambe!</p>
            </div>
            <div>
            <img className='img-Situation'
                src={ImageChuteVelo}
                alt="Chute vélo"/> 
            </div>
            <div className='centrer'>
                <button className='bouton-sauver'><Link style={{color:'white', textDecoration:'none', }} to="/Saignement">Aider le petit garcon</Link> </button>
            </div> 
             <BoutonRetour/>  
        </div> 
        
               
    );
} 
}
export default SituationVelo;