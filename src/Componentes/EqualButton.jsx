import React from 'react';
import './Botoes.css';

export const EqualButton = props => ( 
    <div className="equal-button" onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
);