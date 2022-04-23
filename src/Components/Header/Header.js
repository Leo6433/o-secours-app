import React from 'react';
import './header.css';
import logo from '../../Image/premiers-secours.png';
import Coeur from '../../Image/coeur.png'
import {Link} from 'react-router-dom';
import {globalStateContext} from '../../App';

export const useGlobalState = () => [
        React.useContext(globalStateContext),
    ];

// Affiche le nombre de vie en haut à gauche de l'écran

const Header=()=>{
    const [state] = useGlobalState();
    return(
        <nav className='nav-header'>
            <div className='div-header'>
                <div className='div-logo'>  
                    <Link to="/"><img className='div-logo'src={logo}
                        alt="Premiers secours"/>
                    </Link>
                    <br/>
                    <br/>
                    <img className='image-coeur'src={Coeur}
                        alt="Coeur vie" />
                    <div style={{fontSize:25}}> {state.vie}</div>
                </div>
                <div style={{fontSize:40, fontFamily: "serif"}}>
                    O'secours
                </div>
                <div>
                    <button className='div-bouton-bleu'><Link style={{color:'white', textDecoration:'none', fontSize:15}} to="/RegleJeu">Règle du jeu</Link></button>
                    <button className='div-bouton-vert'>Aide</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;
