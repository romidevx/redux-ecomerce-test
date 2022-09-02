import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <h1>Error 404 | Page not found</h1>
            <br/><br/>
            <p><Link to={'/'}>Back to products list</Link></p>

        </div>
    )
}

export default NotFound;
