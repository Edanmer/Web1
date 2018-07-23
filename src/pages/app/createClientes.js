import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class createClientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      numero: "",
      rnc: "",
      ciudad: "",
      sector: "",
      calle: "",
      latitud: "",
      longitud: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/updatecliente',
      {
        nombre: this.state.nombre,
        numero: this.state.numero,
        rnc: this.state.rnc,
        ciudad: this.state.ciudad,
        sector: this.state.sector,
        calle: this.state.calle,
        latitud: this.state.latitud,
        longitud: this.state.longitud
      })
      .then((objResponse) => {
        console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
        window.location = "/clientes";
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  render() {
    return (
      <div className="container">

        <LoginHeader />
        <section id="header">
          <div className="searchbar">
            <nav className="navbar">
            </nav>
          </div>
        </section>

        <section id="body">
          <h1>Creando Cliente</h1>
          <form>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Nombre</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombre}
                onChange={(evt) => { this.setState({ nombre: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Numero</label>
              <input className="col-8 form-control" type="number" id="inputCompany"
                value={this.state.numero}
                onChange={(evt) => { this.setState({ numero: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Rnc</label>
              <input className="col-8 form-control" type="number" id="inputCompany"
                value={this.state.rnc}
                onChange={(evt) => { this.setState({ rnc: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ciudad</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.ciudad}
                onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Sector</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.sector}
                onChange={(evt) => { this.setState({ sector: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Calle</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.calle}
                onChange={(evt) => { this.setState({ calle: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Latitud</label>
              <input className="col-8 form-control" type="number" id="inputCompany"
                value={this.state.latitud}
                onChange={(evt) => { this.setState({ latitud: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Longitud</label>
              <input className="col-8 form-control" type="number" id="inputCompany"
                value={this.state.longitud}
                onChange={(evt) => { this.setState({ longitud: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <button className="offset-4 col-3 btn btn-success" onClick={(evt) => this.handleSubmit(evt)}>Submit</button>
            </div>
          </form>
        </section>

        <section id="footer"></section>
      </div>
    )
  }
}

export default createClientes;