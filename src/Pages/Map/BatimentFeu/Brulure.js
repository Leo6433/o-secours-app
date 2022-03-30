import React from 'react';
import '../../style.css';
import Quizz from '../../../Components/Quizz';
import BoutonRetour from '../../../Components/RetourMap';

const QuizzBrulure=() =>{
    return(
        <div className='div-centrer'>
            <h2>Quizz sur les brûlures</h2>
            Répondez aux questions avec un score supérieur à 3!
            <div className='quizz-centrer'>
            <Quizz style={{margin:20}}/>
            </div>
            <BoutonRetour/>
            
        </div>        
    )
} 

export default QuizzBrulure;