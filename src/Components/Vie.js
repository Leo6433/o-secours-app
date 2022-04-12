import React from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

    
export const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

// Affiche le nombre de vie en haut à gauche de l'écran
const NbVie = () => {
    const [state] = useGlobalState();
    return (
        <div> {state.vie} </div>
    );
};
export default NbVie;