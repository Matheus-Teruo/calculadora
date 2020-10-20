import React from "react";
import "./Botoes.css";

const Operador = val => {
    return !isNaN(val) || val === '.' || val === "=";
}

export const Botao = props => (
    <div
        className={`caixa-do-botao ${ 
            Operador(props.children) ? null : "operator"
        }`}
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

export default Botao;