import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import Accueil from './Pages/Accueil/Accueil';
import RegleJeu from './Pages/Accueil/ReglesJeu';
import MapParc from './Pages/Map/MapParc';
import Velo1 from './Pages/Map/Velo/Velo1';
import Balancoire1 from './Pages/Map/Balancoire/Balancoire1';
import ExplicationBalancoire from './Pages/Map/Balancoire/ExplicationBalancoire';
import Glacier1 from './Pages/Map/Glacier/Glacier1';
import BatimentFeu1 from './Pages/Map/BatimentFeu/BatimentFeu1';
import SaignementObjet from './Pages/Map/Velo/SaignementObjets';
import ExplicationCompression from './Pages/Map/Velo/ExplicationCompression';
import GestesChute from './Pages/Map/Balancoire/GestesChute';
import GestesEtouffement from './Pages/Map/Glacier/GestesEtouffement';
import PLS from './Pages/Map/Balancoire/PLS/PLS';
import MassageCardiaque from './Pages/Map/Balancoire/MassageCardiaque';
import ChoixSituation from './Pages/Accueil/ChoixSituation';
import Brulure from './Pages/Map/BatimentFeu/Brulure';
import ExplicationBrulure from './Pages/Map/BatimentFeu/ExplicationBrulure';
import ExplicationEtouffement from './Pages/Map/Glacier/ExplicationEtouffement';
import ExplicationPLS from './Pages/Map/Balancoire/PLS/ExplicationPLS';
import NotFoundPage from './Pages/404Page/NotFoundPage';

const defaultGlobalState = {
  vie:0,
  etouffement:0,
  massage:0,
};

export const globalStateContext = React.createContext(defaultGlobalState);
export const dispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

const App = () => { 
// Définition des routes utilisées pour naviguer entre les pages via Link
  return(
  <GlobalStateProvider>
    
      <Router>       
      <main>
        <Header/>
        <Routes>        
          <Route path="/" exact element={<Accueil/>} />
          <Route path="/MapParc" element={<MapParc/>} /> 
          <Route path="/RegleJeu" element={<RegleJeu/>}/>
          <Route path="/Velo" element={<Velo1/>} /> 
          <Route path="/Balancoire" element={<Balancoire1/>} /> 
          <Route path="/ExplicationBalancoire" element={<ExplicationBalancoire/>} /> 
          <Route path="/Glacier" element={<Glacier1/>} /> 
          <Route path="/BatimentFeu" element={<BatimentFeu1/>} /> 
          <Route path="/Saignement" element={<SaignementObjet/>}/>
          <Route path="/ExplicationCompression" element={<ExplicationCompression/>}/>
          <Route path="/GestesChute" element={<GestesChute/>}/>
          <Route path="/GestesEtouffement" element={<GestesEtouffement/>}/>
          <Route path="/PLS" element={<PLS/>}></Route>
          <Route path="/MassageCardiaque" element={<MassageCardiaque/>}></Route>
          <Route path="/ChoixSituation" element={<ChoixSituation/>}></Route>
          <Route path="/Brulure" element={<Brulure/>}></Route>
          <Route path="/ExplicationBrulure" element={<ExplicationBrulure/>}></Route>
          <Route path="/ExplicationEtouffement" element={<ExplicationEtouffement/>}></Route>
          <Route path="/ExplicationPLS" element={<ExplicationPLS/>}></Route>
          <Route path="*" element={<NotFoundPage/>}> </Route>
        </Routes>
      </main>        
      </Router>
  </GlobalStateProvider>
  );
};

export default App;


