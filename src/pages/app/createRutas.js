import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class createRutas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      ciudad: "",
      clientes: [],
      strList: "",
      objSelected: {},
      clientData: []
    }
  }

  componentDidMount = () => {
    axios.get('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/clientes')
      .then((objResponse) => {
        this.setState({ clientData: objResponse.data });
        console.log(JSON.stringify(objResponse, null, 2));
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/rutas',
      {
        nombre: this.state.nombre,
        ciudad: this.state.ciudad,
        clientes: this.state.clientes
      })
      .then((objResponse) => {
        console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
        window.location = "/rutas";
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  handleSelect = (evt) => {
    let obj = this.state.clientData[evt.target.value];
    let client = this.state.clientes;
    client.push(obj);
    this.setState({ objSelected : obj, clientes: client });
  }

  handleAddClient = () => {

    let str = this.state.strList;
    let list = str.concat(this.state.objSelected.nombre + "\n");

    this.setState({ strList: list});
  }

  render() {

    const options = this.state.clientData.map((item, index) => {
      return(
        <option key={item.id} value={index}>{item.nombre}</option>
      )
    });

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
          <h1>Creando Rutas</h1>
          <form>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Nombre</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombre}
                onChange={(evt) => { this.setState({ nombre: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ciudad</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.ciudad}
                onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
            </div>
            <div className="input-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Cliente</label>
              <select className="col-8 form-control custom-select" id="inputCompany"
              onChange={(evt) => this.handleSelect(evt)}>
                {options}
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="button" id="inputGroupFileAddon04"
                  onClick={ this.handleAddClient }>Add</button>
              </div>
            </div>
            <div className="form-group row formSize">
              <textarea className="offset-4 col-8 form-control" type="text" id="inputCompany"
                disabled value={this.state.strList} rows={5}
                onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
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

export default createRutas;