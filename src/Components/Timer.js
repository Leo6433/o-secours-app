import React, { useState, useEffect } from 'react';
import Coeur from '../assets/le-coeur-bat.png';

const Timer = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);
  const [erreur, setErreur]=useState(0);
    
    // Fonction qui incrémente à chaque clic et affiche les résultats
  function handleClick1 () {
      setCounter(counter + 1)
  } 
  function toggle() {
    setIsActive(!isActive);
    setVisible(false);
  }
// Remettre le timer et compteur à 0
  function reset() {
    setSeconds(20);
    setCounter(0);
    setIsActive(false);
    setVisible(true);
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
      setErreur(Math.abs(40-counter))
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
        {seconds===0 && <div><p> Le temps est écoulé! </p>Vous avez fait {counter} compressions en 20s.</div>}
        
      </div>
      <div>
        <img className='img-moyenne'
            src={Coeur}
            alt="Coeur"
            onClick={handleClick1}/> 
      </div>
      <div className='compteur'>
        {counter}
      </div> 
    
      <button style={{border:"none", margin:7}} onClick= {MontreChrono}>
          Aide<br/>
          Voir le chrono
      </button>
      <div>
        {seconds===0 && erreur<=3 && <div style={{color:'green'}}> Niveau validé!</div>}
        {seconds===0 && erreur>=3 && <div style={{color:'green'}}> Niveau pas validé! Vous pouvez recommencer!</div>}
      </div>
      </div>
  );
};

export default Timer;