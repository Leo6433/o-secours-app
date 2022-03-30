import React from 'react';

const NoMatch=(history) =>{
    return(
        <div style={{marginLeft:'10px'}}>
            <h2>404 Page</h2>
            <p>Redirection to</p><span style={{color:'blue', cursor:'pointer'}} onClick={()=> history.push('/')}>Page d'accueil</span>
        </div>
    )
} 

export default NoMatch;