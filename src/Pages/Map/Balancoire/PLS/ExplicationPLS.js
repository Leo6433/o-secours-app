import React from 'react';
import '../../../style.css';
import EtapesPLS from '../../../../assets/Balancoire/EtapesPLS.jpeg'
import BoutonRetour from '../../../../Components/RetourMap';

function ExplicationPLS(){
    return(
        <div className='div-centrer'>
        <h2>Etapes d'une PLS</h2>
        <div style={{ margin:20}}>
            <img className='img-Situation'
                src={EtapesPLS}
                alt="Explication des étapes PLS"/>    
        </div>
        <div>
            <p> Si la victime respire, mettez-la en position latérale de sécurité en attendant l’arrivée des secours. </p>
            <p> Pour cela :</p>
                <p><c>1</c> prenez le bras le plus proche de vous et placez-le à angle droit par rapport à la victime </p>
                <p><c>2</c> prenez l’autre main, paume contre paume </p>
                <p> et positionnez le dos de sa main contre son oreille et sa joue </p>
                <p><c>3</c> soulevez le genou le moins proche de vous</p>
                <p> et ramenez le talon le plus proche des fesses </p>
                <p><c>4</c> appuyez sur le genou pour basculer la victime sans abîmer sa colonne vertébrale ;</p>
                <p><c>5</c> retirez délicatement la main sous le cou de la victime ;</p>
                <p>et remontez le genou supérieur à angle droit pour terminer la stabilisation.</p>
                <p><c>6</c> Restez à côté de la victime en attendant les secours.</p>
        </div>
            <BoutonRetour/>
        </div>
       
    );
};   
export default ExplicationPLS;
