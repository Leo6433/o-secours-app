import React from 'react';
import '../style.css';
import ImageParc from '../../assets/MapParc_etoiles.png';
import {Link} from 'react-router-dom';


const MapParc =() => {

    return (
        <div className='div-centrer'>
            <div className='text-margin'>
                <text style={{color:'red'}}> Des personnages sont en danger!</text>
                <br/><br/>
                <text> Clique sur une des situations ★ pour les sauver!</text>           
            </div>
            <div>
            <img className='img-MapParc'
                src={ImageParc}
                alt="Map du parc"
                usemap="#Map-Parc"/>    
            </div>
            <div className='test-area'>
            <map 
                name="Map-Parc"> 
                <Link to="/Balancoire">                  
                <area shape="rect" coords="100, 300, 280, 540" alt="Balancoire" />
                </Link> 
                <Link to="/Velo"> 
                <area shape="rect" coords="320, 450, 450, 590" alt="velo" />
                </Link> 
                <Link to="/BatimentFeu">
                <area shape="rect" coords="500,300, 600,460" href="" alt="Batiment" />
                </Link>
                <Link to="/Glacier">
                <area shape="rect" coords=" 700,400, 900,550" href="" alt="Glacier" />
                </Link>
                
            </map>
            </div>

        </div>
 
    );
};
export default MapParc;