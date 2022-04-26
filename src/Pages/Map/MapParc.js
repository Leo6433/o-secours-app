import React from 'react';
import '../style.css';
import ImageParc from '../../Image/MapParc_etoiles.png';
import {Link} from 'react-router-dom';
import {globalStateContext} from '../../App';
import {dispatchStateContext} from '../../App';

    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];


const MapParc =() => {
    const [state, dispatch] = useGlobalState();

    function reset(){
        dispatch({ vie: 0 })   
        dispatch({ etouffement: 0 })   
        dispatch({ massage: 0 })   
    }

    return (
        <div className='div-centrer'>
            <div className='text-margin'>
                <p style={{color:'red'}}> Des personnes sont en danger!</p>
                <p> Clique sur une des situations ★ pour les sauver!</p>           
            </div>
            {state.vie>=4 && <div className="rectangle-beige"><p>Bien joué vous avez sauvé 4 vies! </p>
            <button className="bouton-sauver" onClick={()=>{reset()}}>Recommencer le niveau</button>
            <button className="bouton-sauver" onClick={()=>{reset()}}><Link style={{color:'black',textDecoration:'none'}} to="/ChoixSituation"> Changer de lieu</Link> </button>
            </div>}
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
                <area shape="rect" coords="100, 300, 280, 540" alt="Balancoire" title="Une chute"/>
                </Link> 
                <Link to="/Velo"> 
                <area shape="rect" coords="320, 450, 450, 590" alt="velo" title="Un saignement"/>
                </Link> 
                <Link to="/BatimentFeu">
                <area shape="rect" coords="500,300, 600,460" href="" alt="Batiment" title="Une brûlure"/>
                </Link>
                <Link to="/Glacier">
                <area shape="rect" coords=" 700,400, 900,550" href="" alt="Glacier" title="Un étouffement"/>
                </Link>
                
            </map>
            </div>

        </div>
 
    );
};
export default MapParc;