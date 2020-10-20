import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { Botao } from './Componentes/Botao';
import { Input } from './Componentes/Input';
import { InputSec } from './Componentes/InputSec';
import { ClearButton } from './Componentes/ClearButton';
import { EqualButton } from './Componentes/EqualButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputAtual: "",
      inputSec: "",
      Operador: "",
      Resultado: false,
      Inteiro: true
    };
  }

  addToInput = val => {
    if (this.state.Resultado == false) {
      this.setState({inputAtual: this.state.inputAtual + val })
    };
    if (this.state.Resultado == true) {
      this.setState({inputAtual: val })
      this.setState({Resultado: false })
    };
  }

  Ponto = val => {
    if (this.state.Inteiro == true) {
      if (this.state.Resultado == true){
        this.setState({inputAtual: "0" + "." })
        this.setState({Resultado: false })
        this.setState({Inteiro: false })
      };
      if (this.state.Resultado == false){
      this.setState({inputAtual: this.state.inputAtual + val });
      this.setState({Inteiro: false })
      };
    };
  }

  Operacao = val => {
    return(
      this.setState({Operador: val }),
      this.setState({inputSec: this.state.inputAtual}),
      this.setState({inputDVirgulaSec: this.state.inputDVirgula}),
      this.setState({inputAtual: "" })
    );
  }

  Equal = () => {
    let Result = this.state.inputAtual
    if (this.state.Operador == "+") {
      Result = parseFloat(this.state.inputSec) + parseFloat(this.state.inputAtual)
    };
    if (this.state.Operador == "-") {
      Result = parseFloat(this.state.inputSec) - parseFloat(this.state.inputAtual)
    };
    if (this.state.Operador == "x") {
      Result = parseFloat(this.state.inputSec) * parseFloat(this.state.inputAtual)
    };
    if (this.state.Operador == "/") {
      Result = parseFloat(this.state.inputSec) / parseFloat(this.state.inputAtual)
    };
    return(
      this.setState({inputSec: "" }),
      this.setState({Operador: "" }),
      this.setState({Resultado: true }),
      this.setState({Inteiro: true }),
      this.setState({inputAtual: Result })
    );
  }

  render() {
    return (
      <div className="App">
        <div className="calculadora">
          <div className="Visor">
            <InputSec inputSec={this.state.inputSec + this.state.Operador} />
            <Input inputAtual={this.state.inputAtual} />
          </div>
          <div className="rowOperator">
              <Botao handleClick={this.Operacao}>+</Botao>
              <Botao handleClick={this.Operacao}>-</Botao>
              <Botao handleClick={this.Operacao}>x</Botao>
              <Botao handleClick={this.Operacao}>/</Botao>
          </div>
          <div className="rowNumEqual">
            <div className="Number">
              <div className="row">
                <Botao handleClick={this.addToInput}>7</Botao>
                <Botao handleClick={this.addToInput}>8</Botao>
                <Botao handleClick={this.addToInput}>9</Botao>
              </div>
              <div className="row">
                <Botao handleClick={this.addToInput}>4</Botao>
                <Botao handleClick={this.addToInput}>5</Botao>
                <Botao handleClick={this.addToInput}>6</Botao>
              </div>
              <div className="row">
                <Botao handleClick={this.addToInput}>1</Botao>
                <Botao handleClick={this.addToInput}>2</Botao>
                <Botao handleClick={this.addToInput}>3</Botao>
              </div>
              <div className="row">
                <Botao handleClick={this.addToInput}>0</Botao>
                <Botao handleClick={this.Ponto}>.</Botao>
                <ClearButton handleClear={() => this.setState({ inputAtual: "" , Inteiro: true, Resultado: true})}>AC</ClearButton>  
              </div>
            </div>
            <div className="colunmEqual">
              <EqualButton handleClick={this.Equal}>=</EqualButton>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
