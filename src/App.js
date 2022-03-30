import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import Accueil from './Pages/Accueil/Accueil';
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
import PLS from './Pages/Map/Balancoire/PLS';
import MassageCardiaque from './Pages/Map/Balancoire/MassageCardiaque';
import ChoixSituation from './Pages/Accueil/ChoixSituation';
import Brulure from './Pages/Map/BatimentFeu/Brulure';
import ExplicationBrulure from './Pages/Map/BatimentFeu/ExplicationBrulure';

// Définition des routes utilisées pour naviguer entre les pages via Link
class App extends React.Component {
  render(){
    return (        
      <Router>       
      <main>
        <Header/>
        <Routes>        
          <Route path="/" exact element={<Accueil/>} />
          <Route path="/MapParc" element={<MapParc/>} /> 
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
        </Routes>
      </main>        
      </Router>
    );
  }
  
}

export default App;


