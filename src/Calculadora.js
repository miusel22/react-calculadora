import React, { Component } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Resultado";
import { ClearButton } from "./components/Limpiar";
import * as math from "mathjs";

class Calculadora extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div >
  
    
        <table class="calculadora">
        
        <tr>
               
            <td colspan="4"><Input input={this.state.input} /></td>
        </tr>

        <tr>
            <td><Button handleClick={this.addToInput}>7</Button></td>
            <td><Button handleClick={this.addToInput}>8</Button></td>
            <td><Button handleClick={this.addToInput}>9</Button></td>
            <td><Button handleClick={this.addToInput}>/</Button></td>

        </tr>
        <tr>
            <td><Button handleClick={this.addToInput}>4</Button></td>
            <td><Button handleClick={this.addToInput}>5</Button></td>
            <td><Button handleClick={this.addToInput}>6</Button></td>
            <td><Button handleClick={this.addToInput}>*</Button></td>

        </tr>
        <tr>
            <td><Button handleClick={this.addToInput}>1</Button></td>
            <td><Button handleClick={this.addToInput}>2</Button></td>
            <td><Button handleClick={this.addToInput}>3</Button></td>
            <td><Button handleClick={this.addToInput}>+</Button></td>

        </tr>
        <tr>
            
            
            <td> <Button handleClick={() => this.handleEqual()}>=</Button></td>
            <td><ClearButton handleClear={() => this.setState({ input: "" })}>
              C
            </ClearButton></td>
            <td><Button handleClick={this.addToInput}>0</Button></td>
            <td><Button handleClick={this.addToInput}>-</Button></td>

        </tr>
    </table>
      </div>
    );
  }
}

export default Calculadora;