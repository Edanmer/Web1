import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class createTripulacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      cedula: "",
      ciudad: "",
      calle: "",
    }
  }

  componentDidMount() {
    // axios.get('http://api-empleos.net:8080/categories')
    //   .then((objResponse) => {
    //     this.setState({ categoryData: objResponse.data });
    //     console.log("SUCCESS" + JSON.stringify(objResponse.data, null, 2));
    //   })
    //   .catch((objError) => {
    //     console.log("ERROR" + JSON.stringify(objError, null, 2));
    //   })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(JSON.stringify(this.state, null, 2));
    // axios.post('http://api-empleos.net:8080/jobs',
    //   {
    //     category: this.state.category,
    //     type: this.state.type,
    //     company: this.state.company,
    //     logo: this.state.logo.name,
    //     url: this.state.url,
    //     position: this.state.position,
    //     address: this.state.location,
    //     description: this.state.description,
    //     email: "mail@mail.com",
    //     howToApply: "wakanda forever"
    //   })
    //   .then((objResponse) => {
    //     console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
    //     window.location = "/";
    //   })
    //   .catch((objError) => {
    //     console.log("ERROR" + JSON.stringify(objError, null, 2));
    //   })
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
          <h1>Creando Tripulacion</h1>
          <form>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Nombre</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombre}
                onChange={(evt) => { this.setState({ nombre: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Apellido</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.apellido}
                onChange={(evt) => { this.setState({ apellido: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Cedula</label>
              <input className="col-8 form-control" type="number" id="inputCompany"
                value={this.state.cedula}
                onChange={(evt) => { this.setState({ cedula: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ciudad</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.ciudad}
                onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Calle</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.calle}
                onChange={(evt) => { this.setState({ calle: evt.target.value }) }} />
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

export default createTripulacion;