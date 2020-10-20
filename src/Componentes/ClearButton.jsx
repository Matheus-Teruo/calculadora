import React from 'react';
import './Botoes.css';

export const ClearButton = props => ( 
    <div className="clear-button" onClick={props.handleClear}>
        {props.children}
    </div>
);