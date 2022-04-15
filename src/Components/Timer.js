import React, { useState, useEffect } from 'react';
import Coeur from '../Image/le-coeur-bat.png';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

// Composant Timer appelé dans MassageCardiaque(Balancoire)
    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

// Fonction qui simule un massage cardiaque sur une durée de 20s
const Timer = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);
  const [erreur, setErreur]=useState(null);

  const [state, dispatch] = useGlobalState();
    
  // Fonction qui incrémente un compteur à chaque clic et affiche les résultats
  function handleClick1 () {
      setCounter(counter + 1)
  } 
  function toggle() {
    setIsActive(!isActive);
    setVisible(false);
  }
  // Remettre le timer, compteur et nombre d'erreur à 0
  function reset() {
    setSeconds(20);
    setCounter(0);
    setIsActive(false);
    setVisible(true);
    setErreur(null);
  }
  // Arrete le temps et montre le chrono
  function MontreChrono()
  {
    setVisible(!visible);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1 );
      }, 1000);
    } else if (!isActive && seconds !== 20) {
      clearInterval(interval);
    }
    if(seconds===0)
    {
      MontreChrono(); 
      setIsActive(false);
      // Pour trouver la différence entre le bon score (40) et le score obtenu (counter)
      setErreur(Math.abs(40-counter))  
    if (erreur===3 || erreur===2 || erreur===1 || erreur===0)
    {
      dispatch({ massage: state.massage + 1 })
    }
  }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>
        <button className={"bouton-timer"} onClick={toggle}>
          {isActive ? 'Pause' : 'Jouer'}
        </button>
        <button className="bouton-timer" onClick= {reset}>
          Recommencer
        </button>
      </div>
      <div className="time">
        {visible && <div>{seconds}s</div>}  
      </div>
      <div>
        {seconds===0 && <div><p> Le temps est écoulé! </p>Vous avez fait {counter} compressions en 20s.</div> }
      </div>
      <div>
        <img className='img-moyenne'
            src={Coeur}
            alt="Coeur"
            onClick={handleClick1}
            //Coeur cliquable
            /> 
      </div>
      <div className='compteur'>
        {counter}
      </div> 
    
      <button style={{border:"none", margin:7}} onClick= {MontreChrono}>
          Aide<br/>
          Voir le chrono
      </button>
      <div>
        Nombre d'erreur: {erreur}
        {seconds===0 && erreur<=3 && <div style={{color:'green'}}> Exercice validé!</div> }
        {seconds===0 && erreur>3 && <div style={{color:'green'}}> Exercice pas validé! Vous pouvez recommencer!</div>}
      </div>
      </div>
  );
};

export default Timer;