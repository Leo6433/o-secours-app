import React from 'react';
import './header.css';
import logo from '../../Image/premiers-secours.png';
import Coeur from '../../Image/coeur.png'
import {Link} from 'react-router-dom';
import Vie from '../Vie';

const Header=()=>{
    return(
        <nav className='nav-header'>
            <div className='div-header'>
                <div className='div-logo'>  
                    <Link to="/"><img className='div-logo'src={logo}
                        alt="Premiers secours"/>
                    </Link>
                    <img className='image-coeur'src={Coeur}
                        alt="Coeur vie" />
                       <Vie/>
                </div>
                <div style={{fontSize:30, fontFamily: "serif"}}>
                    <text>O'secours</text>
                </div>
                <div>
                    <button className='div-bouton-bleu'><Link style={{color:'white', textDecoration:'none'}} to="/RegleJeu">Règle du jeu</Link></button>
                    <button className='div-bouton-vert'>Aide</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;
