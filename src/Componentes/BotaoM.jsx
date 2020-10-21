import React from "react";
import "./Botoes.css";

export const BotaoM = props => ( 
    <div className="botaoM" onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
);