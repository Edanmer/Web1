import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import LoginHeader from '../../components/loginHeader.js';

class createTripulacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombrechofer: "",
      nombrestaff1: "",
      nombrestaff2: "",
      ciudad: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('https://gittev1u10.execute-api.us-east-2.amazonaws.com/dev/tripulacion',
      {
        nombrechofer: this.state.nombrechofer,
        nombrestaff1: this.state.nombrestaff1,
        nombrestaff2: this.state.nombrestaff2,
        ciudad: this.state.ciudad,
      })
      .then((objResponse) => {
        console.log("SUCCESS" + JSON.stringify(objResponse, null, 2));
        window.location = "/tripulacion";
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
          <h1>Creando Tripulacion</h1>
          <form>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ciudad</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.ciudad}
                onChange={(evt) => { this.setState({ ciudad: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Chofer</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombrechofer}
                onChange={(evt) => { this.setState({ nombrechofer: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ayudante #1</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombrestaff1}
                onChange={(evt) => { this.setState({ nombrestaff1: evt.target.value }) }} />
            </div>
            <div className="form-group row formSize">
              <label className="col-4" htmlFor="inputCompany">Ayudante #2</label>
              <input className="col-8 form-control" type="text" id="inputCompany"
                value={this.state.nombrestaff2}
                onChange={(evt) => { this.setState({ nombrestaff2: evt.target.value }) }} />
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