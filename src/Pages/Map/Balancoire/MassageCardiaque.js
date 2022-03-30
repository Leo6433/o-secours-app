import React from 'react';
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

function MassageCardiaque(){
    // pour boite de dialogue 'appeler'
    const dialog = useDialogState();
    const ref = React.useRef();

  React.useEffect(() => {
    if (dialog.visible) {
      ref.current.focus();
    }
  }, [dialog.visible]);

    return(
        <div className='div-centrer'>
            <div >
                <h2>Massage Cardiaque</h2>
            </div>
            <div>
                <p>Il faut faire 100 compressions par minute, soit environ 2 compressions par seconde.</p>
                <p>Appuie sur le coeur pour faire une compression et faire respirer la victime pendant 30 secondes! </p>
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
                    <Button  className='bouton-blanc' ref={ref} onClick={() => {
                        alert("Les bonnes réponses étaient 15 ou 112");
                        dialog.hide();
                        }}>18</Button>
                    <Button className='bouton-blanc'
                        onClick={() => {
                        alert("Les bonnes réponses étaient 15 ou 112");
                        dialog.hide();
                        }}>17</Button>
                    <Button className='bouton-blanc'
                        onClick={() => {
                        alert("Bien joué ! Les bonnes réponses étaient 15 ou 112");
                        dialog.hide();
                        }}>15</Button>
                    <Button className='bouton-blanc'
                        onClick={() => {
                        alert("Bien joué ! Les bonnes réponses étaient 15 ou 112");
                        dialog.hide();
                        }}>112</Button>
                    <Button className='bouton-blanc'
                        onClick={() => {
                        alert("Les bonnes réponses étaient 15 ou 112");
                        dialog.hide();
                        }}>114</Button>
                    </div>
                </Dialog>
                </div>
            </div>

            <BoutonRetour/>
        </div>
    );
};   
export default MassageCardiaque;
