import React from 'react';
import spinner from './assets/spinners/loading-big.gif';
import './styles.css';

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <img src={spinner} alt='spinner' style={{width:'40px',marginTop:'40px'}} />
            </div>
        </div>
    )
}

export default Spinner
