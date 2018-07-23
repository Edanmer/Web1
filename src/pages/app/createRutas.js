import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class createRutas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      numero: "",
      rnc: ""
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
          <h1>Creando Rutas</h1>
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