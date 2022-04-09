import React from 'react';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

    
export const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
    ];

const NbVie = () => {
    const [state] = useGlobalState();
    return (
        <div> {state.num} </div>
    );
};
export default NbVie;