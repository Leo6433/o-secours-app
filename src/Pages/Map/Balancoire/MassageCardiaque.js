import React, {useEffect} from 'react';
import '../../style.css';
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
} from "reakit/Dialog";
import { Button } from "reakit/Button";
import BoutonRetour from '../../../Components/RetourMap';
import Timer from '../../../Components/Timer';
import ImageSecours from '../../../assets/Reaction/premiers-secours.png';
import {globalStateContext} from '../../../App';
import {dispatchStateContext} from '../../../App';

    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

function MassageCardiaque(){
    // pour boite de dialogue 'appeler'
    const dialog = useDialogState();
    const ref = React.useRef();
    const [state, dispatch] = useGlobalState();

  useEffect(() => {
    if (dialog.visible) {
      ref.current.focus();
    }
    if (state.massage>=2) {
        dispatch({ num: state.num + 1 })  
        alert("Niveau validé! Vous avez gagné une vie!")
       }
  }, [dialog.visible]);

  function MauvaiseReponse(){
    alert("Les bonnes réponses étaient 15 ou 112");
    dialog.hide();
  }
  function BonneReponse(){
    alert("Bien joué ! Les bonnes réponses étaient 15 ou 112");
    dialog.hide();
    dispatch({ massage: state.massage + 1 })  
  }

    return(
        <div className='div-centrer'>
            <div >
                <h2>Massage Cardiaque</h2>
            </div>
            <div>
                <p>Il faut faire 100 compressions par minute, soit environ 2 compressions par seconde.</p>
                <p>Appuie sur le coeur pour faire une compression et faire respirer la victime pendant 20 secondes! </p>
                Score sur la page: {state.massage}
            </div>
            <div>     
                <Timer/>
                <div > 
                    <p>Appeler les secours</p>
                    <img className='img-moyenne'
                        src={ImageSecours}
                        alt="Appel"/> 
                </div>
                <DialogDisclosure {...dialog} className='bouton-sauver'>Appeler</DialogDisclosure> 
                <div >
                <Dialog {...dialog} role="alertdialog" >
                    <p style={{textAlign:"center"}}>Qui voulez vous appeler?</p>
                    <div className="boite-dialogue" style={{margin:15, textAlign: "center", backgroundColor: "rgb(70, 195,181)", padding:10}}>
                    <Button className='bouton-blanc' onClick={dialog.hide}>Annuler</Button>
                    <Button  className='bouton-blanc' ref={ref} onClick={()=>{MauvaiseReponse()}}>18</Button>
                    <Button className='bouton-blanc' onClick={()=>{MauvaiseReponse()}}>17</Button>
                    <Button className='bouton-blanc' onClick={()=>{BonneReponse()}}>15</Button>
                    <Button className='bouton-blanc' onClick={()=>{BonneReponse()}}>112</Button>
                    <Button className='bouton-blanc'onClick={()=>{MauvaiseReponse()}}>114</Button>
                    </div>
                </Dialog>
                </div>
            </div>

            <BoutonRetour/>
        </div>
    );
};   
export default MassageCardiaque;
