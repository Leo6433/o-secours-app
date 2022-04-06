import React from 'react';

export default function Radio2() {

    function getValue() {
    var boutons = document.getElementsByName('coup');
    var valeur;
    for(var i = 0; i < boutons.length; i++){
        if(boutons[i].checked){
            valeur = boutons[i].value;
        }
    }
    if (valeur==='4/5'){
        alert("Bonne réponse !")
    }
    else{
        alert("Mauvaise réponse ! La réponse était 4 à 5 coups")
    }
    }

    return (
        <div>
            <p> Nombre de coups à frapper par series : </p> 
            <div className='rectangle-beige'>
            <input type="radio" name="coup" id="coup1" value="1/3"></input>
                <label for="coup1">1 à 3</label>
            <input type="radio" name="coup" id="coup2" value="4/5"></input>
                <label for="coup2">4 à 5</label>
            <input type="radio" name="coup" id="coup3" value="6/7"></input>
                <label for="coup3">6 à 7</label>
            <input type="radio" name="coup" id="coup4" value="7+"></input>
                <label for="coup4">7 ou +</label>
            </div>
            <div className='centrer'>
                <br/>
                <button style={{backgroundColor:'#46c3b5', color:"white", border:"none"}} onClick={()=>{getValue()}}>✓</button>
            </div> 
        </div>
    );
}