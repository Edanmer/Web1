import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import Separation from '../../components/separation.js';
import TableRutas from '../../components/tableRutas.js';
import LoginHeader from '../../components/loginHeader.js';

class rutas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rutasData: []
    }
  }

  componentDidMount() {
    axios.get('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/rutas')
      .then((objResponse) => {
        this.setState({ rutasData: objResponse.data })
        console.log(JSON.stringify(objResponse, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  renderTable = () => {

    let tabledata = this.state.rutasData;

    return (
      <div>
        <Separation title={"Rutas"} />
        <TableRutas dataArray={tabledata} />
      </div>
    )
  }

  render() {
    return (
      <div className="container">

        <LoginHeader />

        <section id="header">
          <div className="searchbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/clientes">Clientes</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/rutas">Rutas</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/tripulacion">Tripulacion</a>
                  </li>
                </ul>
              </div>
            </nav>
            <h1>Rutas</h1>
            <a className="btn btn-success text-white" href="/createRutas">Create</a>            
          </div>
        </section>

        {this.renderTable()}

        <section id="footer"></section>
      </div>
    );
  }
}

export default rutas;