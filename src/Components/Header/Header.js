import React from 'react';
import './header.css';
import logo from '../../assets/premiers-secours.png';
import {Link} from 'react-router-dom';

const Header=()=>{
    return(
        <nav className='nav-header'>
            <div className='div-header'>
                <div className='div-logo'>  
                    <Link to="/"><img className='div-logo'src={logo}
                        alt="Premiers secours"/>
                    </Link>
                </div>
                <div style={{fontSize:30, fontFamily: "serif"}}>
                    <text>O'secours</text>
                </div>
                <div>
                    <button className='div-bouton-bleu'>Règle du jeu</button>
                    <button className='div-bouton-vert'>Aide</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;
