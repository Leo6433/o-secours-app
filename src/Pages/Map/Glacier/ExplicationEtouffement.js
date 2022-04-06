import React from 'react';
import '../../style.css';
import BoutonRetour from '../../../Components/RetourMap';

const ExplicationEtouffement=() =>{
    return(
        <div className='div-centrer'>
            <h2>Etape à suivre lors d'un étouffement</h2>
            <div className='text-margin fond-beige'>
                <p> <c> 1</c> Tiens toi <b>derrière la victime.</b></p>
                <br/>
                <p> <c> 2</c> Penches-la vers l'avant en soutenant sa poitrine d'une main, ce qui permettra à l'objet coincés dans les voies aériennes de ne pas s'enfoncer davantage dans la trachée.</p>
                <br/>
                <p> <c> 3</c> Donnes un maximum de <b>5 </b>claques <b>entre les omoplates</b>. Après chaque claque, regardes si le corps étranger a été rejeté ou non. </p>
            </div>
            <BoutonRetour/>
        </div>    
    );
};   
export default ExplicationEtouffement;