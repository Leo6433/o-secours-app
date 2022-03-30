import React from 'react';
import '../style.css';
import ImageEcole from '../../assets/ChoixSituation/Ecole.jpeg';
import ImageParc from '../../assets/ChoixSituation/Parc.jpeg';
import {Link} from 'react-router-dom';

const ChoixSituation =() => {
    return(
        <div className='div-centrer'>
            <h2> Choix du lieux</h2>
            <div>
                <img className='img-Situation2'
                    src={ImageEcole}
                    alt="Ecole"/> 
                <p>A l'école</p>
                <Link to="/MapParc">   
                <img className='img-Situation2'
                    src={ImageParc}
                    alt="Parc"/> 
                </Link>
                <p>Au parc</p>
            </div>

        </div>
    )

}
export default ChoixSituation;