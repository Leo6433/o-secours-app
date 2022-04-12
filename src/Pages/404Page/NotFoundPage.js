import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

// Page qui s'affiche si la page n'existe pas 

class NotFoundPage extends React.Component{
    render(){
        return(
        <div style={{textAlign:"center", margin:50}}>
          <div style={{fontSize:80}}>404</div>
          Page not found
            <p >
              <Link to="/">Revenir à l'accueil </Link>
            </p>
          </div>
        )
    }
}
export default NotFoundPage;