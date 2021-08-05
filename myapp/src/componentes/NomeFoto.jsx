import React, {Component} from "react";
import  logo from "../logo.svg";

class NomeFoto extends Component{
    render(){
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Meu nome: Thomas</p>
            </div>
        )
    }
}

export default NomeFoto;