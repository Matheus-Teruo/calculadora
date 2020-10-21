import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { Botao } from './Componentes/Botao';
import { BotaoM } from './Componentes/BotaoM';
import { Input } from './Componentes/Input';
import { InputSec } from './Componentes/InputSec';
import { InputM } from './Componentes/InputM';
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
      Inteiro: true,
      memoria: [],
      inputM: ""
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

  Memo = val => {
    let Len = this.state.memoria.length-1
    if (val == "MS") {
      this.state.memoria.push(this.state.inputAtual)
      this.setState({})
    };
    if (val == "M+") {
      let Aux = parseFloat(this.state.memoria[Len])
      this.state.memoria.pop()
      this.state.memoria.push(parseFloat(this.state.inputAtual) + Aux)
      this.setState({})
    };
    if (val == "MR") {
      this.setState({inputAtual: this.memoria.M1})
    };
  }

  MemoP1 = val => {
    if (val == "MR") {
      this.setState({inputAtual: this.state.memoria[0]})
    };
    if (val == "MC") {
      this.state.memoria.splice(0,1)
      this.setState({})
    };
  }
  MemoP2 = val => {
    if (val == "MR") {
      this.setState({inputAtual: this.state.memoria[1]})
    };
    if (val == "MC") {
      this.state.memoria.splice(1,1)
      this.setState({})
    };
  }
  MemoP3 = val => {
    if (val == "MR") {
      this.setState({inputAtual: this.state.memoria[2]})
    };
    if (val == "MC") {
      this.state.memoria.splice(2,1)
      this.setState({})
    };
  }
  MemoP4 = val => {
    if (val == "MR") {
      this.setState({inputAtual: this.state.memoria[3]})
    };
    if (val == "MC") {
      this.state.memoria.splice(3,1)
      this.setState({})
    };
  }
  MemoP5 = val => {
    if (val == "MR") {
      this.setState({inputAtual: this.state.memoria[4]})
    };
    if (val == "MC") {
      this.state.memoria.splice(4,1)
      this.setState({})
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
          <div className="botaoMemoria">
            <Botao handleClick={() => this.setState({
               inputAtual: "", inputSec: "", Operador: "" , Inteiro: true, Resultado: true
               })}>MC</Botao>
            <Botao handleClick={this.Memo}>MR</Botao>
            <Botao handleClick={this.Memo}>M+</Botao>
            <Botao handleClick={this.Memo}>MS</Botao>
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
        <div className="memoria">
          <div className="titulo"><h2>Memória</h2></div>
          <InputM inputM={this.state.memoria[0]} />
          <div className="row">;
            <BotaoM handleClick={this.MemoP1}>MC</BotaoM>
            <BotaoM handleClick={this.MemoP1}>MR</BotaoM>
          </div>
          <InputM inputM={this.state.memoria[1]} />
          <div className="row">;
            <BotaoM handleClick={this.MemoP2}>MC</BotaoM>
            <BotaoM handleClick={this.MemoP2}>MR</BotaoM>
          </div>
          <InputM inputM={this.state.memoria[2]} />
          <div className="row">;
            <BotaoM handleClick={this.MemoP3}>MC</BotaoM>
            <BotaoM handleClick={this.MemoP3}>MR</BotaoM>
          </div>
          <InputM inputM={this.state.memoria[3]} />
          <div className="row">;
            <BotaoM handleClick={this.MemoP4}>MC</BotaoM>
            <BotaoM handleClick={this.MemoP4}>MR</BotaoM>
          </div>
          <InputM inputM={this.state.memoria[4]} />
          <div className="row">;
            <BotaoM handleClick={this.MemoP5}>MC</BotaoM>
            <BotaoM handleClick={this.MemoP5}>MR</BotaoM>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
